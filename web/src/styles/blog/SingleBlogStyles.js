import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
  max-width: 700px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h4 {
      margin: 1rem 0;
    }
    h3 {
      margin: 1rem 0;
      font-size: 1.6rem;
    }
    table {
      margin: 10px 0 10px 0;
      border-radius: 1px;
      border-collapse: collapse;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      th {
        background-color: #04aa4e;
        color: white;
        padding: 8px;
        height: 50%;
        font-size: 1rem;
        text-align: center;
        border: 1px solid #ddd;
      }
      td {
        font-size: 1rem;
        height: 50%;
        text-align: center;
        padding: 8px;
        border: 1px solid #ddd;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
    blockquote {
      font-size: 1.5rem;
      font-family: 'Caveat', cursive;
      font-weight: 400;
      max-width: 300px;
      line-height: 1.4;
      position: relative;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #04aa4e;
      border-radius: 3px;
      &:before {
        position: absolute;
        content: '"';
        color: #ddd;
        font-size: 8rem;
        width: 4rem;
        height: 4rem;
        left: 1;
        top: -4rem;
      }
      &:after {
        position: absolute;
        content: '"';
        color: #ddd;
        font-size: 8rem;
        width: 4rem;
        height: 4rem;
        right: 0;
        bottom: 0rem;
      }
    }

    .bodyImage {
      margin: 2rem 0;
    }
  }
`;
