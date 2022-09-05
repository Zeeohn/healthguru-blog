import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import ParagraphText from '../typography/ParagraphText';
import {
  BlogsSearchResultItem,
  CategoriesSearchResultItem,
} from './SearchResultItem';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  eventsIndexStore,
  authorsIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const eventsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(eventsIndexStore.index),
    eventsIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    eventsResult.length === 0 &&
    authorsResult.length === 0
  ) {
    return <ParagraphText>No Result Found</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Blogs</ParagraphText>
          {blogsResult?.map((result) => (
            <BlogsSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Categories</ParagraphText>
          {categoriesResult?.map((result) => (
            <CategoriesSearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
