import React from "react";
import useRecipeStore from "../store/useRecipeStore";
import "./style.css";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() !== "") {
      filterRecipes();
    }
  };
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        placeholder="🔍 Search recipes..."
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
