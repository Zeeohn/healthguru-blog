import React, { useState, useContext } from "react";
import { SearchModalStyles } from "./../../styles/search/SearchModalStyles";
import { SearchModalContext } from "./../../context/SearchModalContext";
import ActionButton from "./../buttons/ActionButton";
import { MdClose } from "react-icons/md";
import SearchField from "./SearchField";

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnFocus = () => {
    console.log("focused");
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
        ></SearchField>
      </div>
    </SearchModalStyles>
  );
}

export default Search;
