import { MdPerson } from 'react-icons/md'

export default {
    title: 'Authors',
    name: 'author',
    type: 'document',
    icon: MdPerson,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        },
        {
            title: 'Profile Image',
            name: 'profileImage',
            type: 'customImage',
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'textEditor',
        }
    ],

    preview: {
        select: {
            image: 'profileImage',
            title: 'name',
            slug: 'slug',
        },
        prepare ({ image, title, slug }) {
            return {
                title,
                media: image,
                subtitle: slug.current,
            }
        }
    }
};