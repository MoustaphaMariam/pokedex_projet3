import React from "react";
import "../styles/components/Card.css";
import { Link, NavLink } from "react-router-dom";

const Card = (props) => {
  console.log("prps", props);

  return (
    <div className="Card">
      <div className="name">
        <h2>{props.pokemon.name}</h2>
      </div>
      <NavLink to={`/detail/${props.index}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.index}.svg`}
          alt="pokemon"
        />
      </NavLink>

      <div className="menu">
        <ul>
          <li>
            <a href="/#" className="add">
              Add
            </a>
          </li>
          <li>
            <a href="/#" className="remove">
              Remove
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
