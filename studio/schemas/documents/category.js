import { MdCategory } from 'react-icons/md';

export default {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    icon: MdCategory,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'customImage',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'textEditor',
        },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'coverImage',
            slug: 'slug',
        },
        prepare({ title, image, slug }) {
            return {
                title,
                media: image,
                subtitle: slug.current,
            }
        }
    }
};