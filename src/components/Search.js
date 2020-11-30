import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="form-search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          className="form-input"
        />
        <button onClick={callSearchFunction} type="submit" className="btn-submit">SUBMIT</button>
      </form>
    );
}

export default Search;