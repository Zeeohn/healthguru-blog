exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;

  // Resolve the path of the components(template)
  const singleBlogTemplate = require.resolve('./src/templates/SingleBlogs.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const eventsListTemplate = require.resolve('./src/templates/events-list.js');
  const singleEventTemplate = require.resolve(
    './src/templates/single-event.js'
  );
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );

  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategories {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityEvents {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  const category = result.data.allSanityCategories.nodes;
  const events = result.data.allSanityEvents.nodes;
  const authors = result.data.allSanityAuthor.nodes;

  // Creating each blog page
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // Creating each Author page
  authors.forEach((author) => {
    createPage({
      path: `/authors/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  // Creating each event page
  events.forEach((event) => {
    createPage({
      path: `/events/${event.slug.current}`,
      component: singleEventTemplate,
      context: { id: event.id },
    });
  });

  // Creating each category page
  category.forEach((categories) => {
    createPage({
      path: `/categories/${categories.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: categories.id },
    });
  });

  // Create a List of some specific pages
  // Create blog-list pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);

  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/blogs' : `/blogs/page${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // create category-list pages
  const totalCategoryListPages = Math.ceil(category.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/categories' : `/categories/page${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // create events-list pages
  const totalEventsListPages = Math.ceil(category.length / postsPerPage);
  Array.from({ length: totalEventsListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/events' : `/events/page${index + 1}`,
      component: eventsListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalEventsListPages,
        currentPage: index + 1,
      },
    });
  });

  // I don't want to create a list for the authors since it will just be two authors..
};
