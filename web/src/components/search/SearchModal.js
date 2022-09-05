import React, { useState, useContext } from 'react';
import axios from 'axios';
import { MdClose } from 'react-icons/md';
import { graphql, useStaticQuery } from 'gatsby';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import { SearchModalContext } from '../../context/SearchModalContext';
import ActionButton from '../buttons/ActionButton';
import SearchField from './SearchField';
import SearchResult from './SearchResult';

const query = graphql`
  {
    localSearchBlogs {
      publicIndexURL
      publicStoreURL
    }
    localSearchAuthors {
      publicIndexURL
      publicStoreURL
    }
    localSearchCategories {
      publicIndexURL
      publicStoreURL
    }
    localSearchEvents {
      publicIndexURL
      publicStoreURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const data = useStaticQuery(query);
  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [eventsIndexStore, setEventsIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);

  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: categoriesPublicStoreURL,
    publicIndexURL: categoriesPublicIndexURL,
  } = data.localSearchCategories;
  const {
    publicStoreURL: authorsPublicStoreURL,
    publicIndexURL: authorsPublicIndexURL,
  } = data.localSearchAuthors;
  const {
    publicStoreURL: eventsPublicStoreURL,
    publicIndexURL: eventsPublicIndexURL,
  } = data.localSearchEvents;

  const handleOnFocus = async () => {
    if (blogsIndexStore && categoriesIndexStore && authorsIndexStore) return;

    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
      { data: eventsIndex },
      { data: eventsStore },
      { data: authorsIndex },
      { data: authorsStore },
    ] = await Promise.all([
      axios.get(blogsPublicIndexURL),
      axios.get(blogsPublicStoreURL),
      axios.get(categoriesPublicIndexURL),
      axios.get(categoriesPublicStoreURL),
      axios.get(eventsPublicIndexURL),
      axios.get(eventsPublicStoreURL),
      axios.get(authorsPublicIndexURL),
      axios.get(authorsPublicStoreURL),
    ]);

    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    });
    setCategoriesIndexStore({
      index: categoriesIndex,
      store: categoriesStore,
    });
    setEventsIndexStore({
      index: eventsIndex,
      store: eventsStore,
    });
    setAuthorsIndexStore({
      index: authorsIndex,
      store: authorsStore,
    });
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          categoriesIndexStore &&
          eventsIndexStore &&
          authorsIndexStore && (
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                categoriesIndexStore={categoriesIndexStore}
                eventsIndexStore={eventsIndexStore}
                authorsIndexStore={authorsIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;
