export default {
    title: 'Article Body',
    name: 'textEditor',
    type: 'array',
    of: [
      {
        type: 'block',
        title: 'Block',
        styles: [
            {title: 'normal size', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Quotes', value: 'blockquote'},
        ],
        lists: [
            {title: 'Bullet List', value: 'bullet'},
            {title: 'Numbered List', value: 'number'},
        ],
        marks: {
            decorators: [
                {title: 'Bold', value: 'strong'},
                {title: 'Italics', value: 'em'},
                {title: 'Underline', value: 'underline'},
                {title: 'Strike Through', value: 'strike-through'},
            ],
        },
      },  
      {
        type: 'customImage',
      },
      {
        type: 'customTable',
      }
    ],
};