// src/admin/app.js
import {
  setPluginConfig,
  defaultHtmlPreset,
  defaultMarkdownPreset,
  StrapiMediaLib,
  StrapiUploadAdapter,
} from "@_sh/strapi-plugin-ckeditor";

import { MediaEmbed } from "ckeditor5";

export default {
  register() {
    // Clone so we don't mutate the imported preset object
    const htmlPreset = {
      ...defaultHtmlPreset,
      editorConfig: {
        ...defaultHtmlPreset.editorConfig,
        plugins: [
          ...(defaultHtmlPreset.editorConfig.plugins || []),

          // Strapi Media Library integration
          StrapiMediaLib,
          StrapiUploadAdapter,

          // Embeds (YouTube/Vimeo/etc)
          MediaEmbed,
        ],
        toolbar: [
          ...(defaultHtmlPreset.editorConfig.toolbar || []),

          // Buttons (if not already in the preset)
          "strapiMediaLib",
          "uploadImage",
          "mediaEmbed",
        ],
      },
    };

    setPluginConfig({
      presets: [htmlPreset, defaultMarkdownPreset],
    });
  },
};
