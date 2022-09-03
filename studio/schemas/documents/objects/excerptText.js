import React from 'react';

export default {
  title: 'Article Excerpt',
  name: 'excerptText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italics', value: 'em' },
          {
            title: 'Superscript',
            value: 'sup',
            blockEditor: {
              icon: () => (
                <span>
                  A<sup>S</sup>
                </span>
              ),
              render: (props) => <sup>{props.children}</sup>,
            },
          },
          {
            title: 'Subscript',
            value: 'sub',
            blockEditor: {
              icon: () => (
                <span>
                  A<sub>S</sub>
                </span>
              ),
              render: (props) => <sub>{props.children}</sub>,
            },
          },
        ],
        annotations: [],
      },
    },
  ],
};
