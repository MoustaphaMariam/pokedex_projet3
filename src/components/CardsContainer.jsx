import { useState, useEffect } from "react";
import "../styles/components/CardsContainer.css";
import getPokemon from "../Service";
import Card from "../components/Card";

const CardsContainer = () => {
  //const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemons, setPokemons] = useState(null);
  // const pokemonIndex = url.split("/")[url.split("/").length - 2];

  useEffect(() => {
    getPokemon().then((data) => {
      setPokemons(data.results);
    });
  }, []);

  console.log(pokemons);
  return (
    <div className="CardsContainer">
      {pokemons?.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} index={index + 1} />
      ))}
    </div>
  );
};

export default CardsContainer;
