import React from "react";
import CardsContainer from "../components/CardsContainer";
import LogoPokemon from "../components/LogoPokemon";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

const Listing = () => {
  return (
    <div className="max-width">
      <Navigation />
      <LogoPokemon />
      <SearchBar />
      <CardsContainer />
    </div>
  );
};

export default Listing;
