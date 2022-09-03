import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import { Title } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';
import MyPortableText from '../components/MyPortableText';

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      category {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

function SingleBlogs({ data }) {
  const blog = data.sanityBlog;

  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt}
              className="blog-cover-image"
            />
            <Title className="title">{blog.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), 'p, MMM dd yyyy')}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />
              <span>
                {blog.category?.map((item, index) => (
                  <span key={item.slug.current}>
                    <Link to={`/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.category.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </ParagraphText>
            <ParagraphText className="author">
              <FiUser />
              <Link to={`/authors/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody} />
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleBlogs;
