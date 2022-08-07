import axios from "axios";

const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon-species/";
  const { data } = await axios.get(url);
  return data;
};
export default getPokemon;
