import React from "react";
import Navigation from "../components/Navigation";
import PokedexContainer from "../components/PokedexContainer";

const Pokedex = () => {
  return (
    <div className="max-width">
      <Navigation />
      <h1>POKEDEX</h1>
      <PokedexContainer />
    </div>
  );
};

export default Pokedex;
