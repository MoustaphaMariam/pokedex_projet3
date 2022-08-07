import React from "react";
import { useState, useEffect } from "react";
import "../styles/components/SearchBar.css";

function SearchBar() {
  const [data, setData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleSearchPokemon = (e) => {
    let value = e.target.value;
    setSearchPokemon(value);
  };
  console.log(searchPokemon);
  return (
    <div className="SearchBar">
      <div className="search" id="search">
        <input
          type="text"
          placeholder="Rechecher un Pokemon...."
          id="searchInput"
          onChange={handleSearchPokemon}
        />
        <button type="submit" className="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
