import { MdStar } from 'react-icons/md';

export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    icon: MdStar,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            name: 'blogs',
            title: 'Featured Blogs',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'blog' }],
                },
            ],
            description: 'Choose any blog that will be pinned to the top of the site',
            validation: (Rule) => [
                Rule.error('Every Item should be unique').unique(),
                Rule.required().error('At least one item is required'),
            ],
        },
        {
            name: 'category',
            title: 'Featured Top Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'categories' }],
                },
            ],
            description: 'Choose the right category for this featured post',
            validation: (Rule) => [
                Rule.error('Every Item should be unique').unique(),
                Rule.required().error('At least one item is required'),
            ],
        },
    ]
};