// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Hero
    {
      title: 'Hero',
      name: 'hero',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
      ],
    },

    //Features
    {
      title: 'Features',
      name: 'feature',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Sub-title',
          name: 'subTitle',
          type: 'string',
        },
        {
          title: 'Features',
          name: 'features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Icon',
                  name: 'icon',
                  type: 'image',
                },
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
      ],
    },

    //About
    {
      title: 'About',
      name: 'about',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
      ],
    },

    //Testimonials
    {
      title: 'Testimonials',
      name: 'testimonial',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          title: 'Testimonials',
          name: 'testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                },
                {
                  title: 'Name',
                  name: 'name',
                  type: 'string',
                },
                {
                  title: 'Testimony',
                  name: 'testimony',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },

    //Price
    {
      title: 'Pricing',
      name: 'pricing',
      type: 'document',
      fields: [
        {
          title: 'Testimonials',
          name: 'testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Price',
                  name: 'price',
                  type: 'string',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text',
                },
                {
                  title: 'Features',
                  name: 'features',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    //Contact
    {
      title: 'Contact',
      name: 'contact',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Sub Title',
          name: 'subTitle',
          type: 'string',
        },
        {
          title: 'Email',
          name: 'email',
          type: 'string',
        },
      ],
    },
  ]),
})
