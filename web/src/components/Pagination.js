import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationStyles } from '../styles/PaginationStyles';
import ParagraphText from './typography/ParagraphText';

function Pagination({ baseURL, numberOfPages, currentPage }) {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container">
      <PaginationStyles>
        <div className="icons">
          <Link
            to={`${baseURL}/${prevPage}`}
            className={clsx(currentPage <= 1 && 'disabled')}
          >
            <FiChevronLeft /> Prev.
          </Link>
          <Link
            to={`${baseURL}/${nextPage}`}
            className={clsx(currentPage >= numberOfPages && 'disabled')}
          >
            <FiChevronRight /> Next.
          </Link>
        </div>
        <ParagraphText>
          page {currentPage} of {numberOfPages} pages
        </ParagraphText>
      </PaginationStyles>
    </div>
  );
}

export default Pagination;
