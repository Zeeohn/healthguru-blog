import React, { useContext } from 'react';
import { SearchModalStyles } from './../../src/styles/search/SearchModalStyles';
import { SearchModalContext } from './../../src/context/SearchModalContext';
import ActionButton from './../buttons/ActionButton';
import { MdClose } from 'react-icons/md';
import SearchField from './../../../.history/web/components/search/SearchField_20220823123507';

function Search() {
    const { isSearchModalOpen } = useContext(SearchModalContext);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOnFocus = () => {
        console.log('focused');
    };

    if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
        <div className='modal__container'>
            <ActionButton className='close'>
                <MdClose />
            </ActionButton>
            <SearchField value={searchQuery} setValue={setSearchQuery} onFocus={handleOnFocus}></SearchField>
        </div>
    </SearchModalStyles>
  );
}

export default Search;