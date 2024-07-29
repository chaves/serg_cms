import type { Schema, Attribute } from '@strapi/strapi';

export interface PartsPerson extends Schema.Component {
  collectionName: 'components_parts_people';
  info: {
    displayName: 'Person';
    icon: 'bulletList';
  };
  attributes: {
    first_name: Attribute.String & Attribute.Required;
    last_name: Attribute.String & Attribute.Required;
    status: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'parts.person': PartsPerson;
    }
  }
}
