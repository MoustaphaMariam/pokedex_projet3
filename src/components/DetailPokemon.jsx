import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/DetailPokemon.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPokemon = () => {
  const { id } = useParams();
  const [getPokemonDetail, setPokemonDetail] = useState();



  
  const [getSpicies, setSpecies] = useState();
  const [getEvolution, setEvolution] = useState();

  /**URL  des caracteristiques de le page Detail */
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const url_species = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const url_charact = `https://pokeapi.co/api/v2/characteristique/${id}`;
  const url_group = `https://pokeapi.co/api/v2/egg-group/${id}`;
  const url_evolution = `https://pokeapi.co/api/v2/evolution-chain/${id}`;

  const getPok = async () => {
    try {
      const pokemon = await axios.get(url);
      setPokemonDetail(pokemon.data);
    } catch (error) {
      console.log("error", "error");
    }
  };

  const getSpi = async () => {
    try {
      const species = await axios.get(url_species);
      setSpecies(species.data);
    } catch (error) {
      console.log("error", "error");
    }
  };

  const getEvo = async () => {
    try {
      const evolutions = await axios.get(url_evolution);
      setEvolution(evolutions.data);
    } catch (error) {
      console.log("error", "error");
    }
  };

  console.log(getPokemonDetail);

  useEffect(() => {
    getPok();
    getSpi();
    getEvo();
  }, []);
  return (
    <div className="DetailPokemon">
      ;{" "}
      <div className="return" title="Cliquez pour retourner à l'accueil">
        <NavLink to="/">
          <i className="fa fa-arrow-left"></i>
        </NavLink>
        <h3>#00{getPokemonDetail?.id}</h3>
      </div>
      <h1>{getPokemonDetail?.name}</h1>
      <div className="detail-one">
        <div className="detail-one-left">
          <div className="image-pokemon">
            <img
              src={getPokemonDetail?.sprites.other.home.front_default}
              alt=""
            />
          </div>
          <div className="types-pokemon">
            <ul>
              {getPokemonDetail?.types.map((type, index) => (
                <li>
                  {/* <img src="../assets/images/grass.png" alt="type" /> */}
                  <p key={index}>{type.type.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="detail-one-rigth">
          <table id="customers">
            <thead>
              <tr>
                <th colSpan="2">Profil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weight</td>
                <td>{getPokemonDetail?.weight}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{getPokemonDetail?.height}</td>
              </tr>

              <tr>
                <td>Egg group</td>
                <td>
                  <ul>
                    {getSpicies?.egg_groups.map((egg_group, index) => (
                      <li key={index}>{egg_group.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>
                  {getPokemonDetail?.abilities[0].ability.name} ,{" "}
                  {getPokemonDetail?.abilities[1].ability.name}{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="description">
          <p>
            <span>Description:</span>
            {getSpicies?.flavor_text_entries[0].flavor_text}
            <br />
            {getSpicies?.flavor_text_entries[2].flavor_text}
            <br />
            {getSpicies?.flavor_text_entries[3].flavor_text}
          </p>
        </div>
      </div>
      <div className="detail-two">
        <h2>Statistiques</h2>
        <section className="skills" id="skills">
          <div className="max-width">
            <div className="skills-content">
              <div className="bars">
                <div className="info">
                  <span>Hp</span>
                  <span>{getPokemonDetail?.stats[0].base_stat}</span>
                </div>
                <div className="line hp"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Attack</span>
                  <span>{getPokemonDetail?.stats[1].base_stat}</span>
                </div>
                <div className="line attack"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Defense</span>
                  <span>{getPokemonDetail?.stats[2].base_stat}</span>
                </div>
                <div className="line defense"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>special-attack</span>
                  <span>{getPokemonDetail?.stats[3].base_stat}</span>
                </div>
                <div className="line special-attack"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Special Defense</span>
                  <span>{getPokemonDetail?.stats[4].base_stat}</span>
                </div>
                <div className="line special-defense"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Special Speed</span>
                  <span>{getPokemonDetail?.stats[5].base_stat}</span>
                </div>
                <div className="line speed"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="detail-three">
        <h2>Evolution</h2>
        <div className="evolution">
          <div className="evolution-1">
            <img
              src={getPokemonDetail?.sprites.other.home.front_default}
              // src={
              //   getEvo?.chain.evolves_to[2].url.split("/")[
              //     url.split("/").length - 2
              //   ]
              // }
            />
          </div>
          <div className="arrow">
            <img src="../assets/images/arrow-fire.png" alt="fleche" />
          </div>
          <div className="evolution-2">
            <img src={getPokemonDetail?.sprites.other.home.front_default} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPokemon;
