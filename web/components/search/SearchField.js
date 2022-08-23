import React from 'react';
import { SearchFieldStyles } from './../../src/styles/search/SearchFieldStyles';


function SearchField({ value, setValue, onFocus }) {
  return (
  <SearchFieldStyles>
    <input type='text' placeholder='search' value={value} onChange={(e) => setValue(e.target.value)} onFocus={onFocus && onFocus} />
  </SearchFieldStyles>
  );
}

export default SearchField;