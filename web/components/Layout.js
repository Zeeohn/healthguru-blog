import React from 'react'
import { SearchModalContextProvider } from './../src/context/SearchModalContext';
import GlobalStyles from './../src/styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import Search from './search/SearchModal';


function Layout( {children} ) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
};

export default Layout