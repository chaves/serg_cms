'use strict';

const DEFAULT_SLUG_MAX_LENGTH = 255;

const slugify = (value, maxLength) =>
  String(value)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, maxLength)
    .replace(/-+$/g, '');

/**
 * Fills an empty `slug` from the field it is attached to (the UID's
 * `targetField`), for every API content type that has a UID slug.
 * Keeps an existing slug, and appends -2, -3… when the slug is taken
 * by another document.
 */
const autoSlug = (strapi) => async (ctx, next) => {
  if (!['create', 'update'].includes(ctx.action) || !ctx.uid.startsWith('api::')) {
    return next();
  }

  const slugAttr = strapi.getModel(ctx.uid)?.attributes?.slug;
  const data = ctx.params?.data;
  if (!slugAttr || slugAttr.type !== 'uid' || !slugAttr.targetField || !data || data.slug) {
    return next();
  }

  const documentId = ctx.action === 'update' ? ctx.params.documentId : null;
  const existing = documentId
    ? await strapi.db.query(ctx.uid).findOne({
        where: { documentId },
        select: ['slug', slugAttr.targetField],
      })
    : null;

  // Partial update that does not touch the slug: keep the stored one.
  if (existing?.slug && !('slug' in data)) {
    return next();
  }

  const maxLength = slugAttr.maxLength ?? DEFAULT_SLUG_MAX_LENGTH;
  const base = slugify(data[slugAttr.targetField] ?? existing?.[slugAttr.targetField] ?? '', maxLength);
  if (!base) {
    return next();
  }

  let slug = base;
  for (let i = 2; ; i++) {
    const taken = await strapi.db.query(ctx.uid).findOne({
      where: { slug, ...(documentId ? { documentId: { $ne: documentId } } : {}) },
      select: ['id'],
    });
    if (!taken) break;
    const suffix = `-${i}`;
    slug = `${base.slice(0, maxLength - suffix.length).replace(/-+$/g, '')}${suffix}`;
  }

  data.slug = slug;
  return next();
};

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register({ strapi }) {
    strapi.documents.use(autoSlug(strapi));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  bootstrap(/*{ strapi }*/) {},
};
