/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// Custom Schemas/documents
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';
import events from './documents/events';

// Custom Objects
import customImage from './documents/objects/customImage';
import textEditor from './documents/objects/textEditor';
import excerptText from './documents/objects/excerptText';
import customTable from './documents/objects/customTable';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    author,
    category,
    customImage,
    textEditor,
    customTable,
    excerptText,
    featured,
    events,
  ]),
});
