import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';
import { SectionTitle } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle>404</SectionTitle>
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
