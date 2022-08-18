export default {
    title: 'Article Excerpt',
    name: 'excerptText',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists:[],
        marks: {
            decorators: [
                {title: 'Bold', value: 'strong'},
                {title: 'Italics', value: 'em'},
            ],
            annotations: [],
        },
      },  
    ],
};