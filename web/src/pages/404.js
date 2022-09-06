import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle className="title">404</SectionTitle>
          <ParagraphText>
            Uh-oh, it looks like you visited an invalid link{' '}
            <span style={{ color: 'red' }}>💔</span>. <br /> Go to the{' '}
            <Link to="/" className="link">
              Homepage
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
