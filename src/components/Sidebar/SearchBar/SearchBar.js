import React from "react";
import { MdSearch } from "react-icons/md";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <MdSearch className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
