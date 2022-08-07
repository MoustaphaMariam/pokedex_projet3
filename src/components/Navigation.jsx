import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <span>
        <p>0 pokemons</p>
      </span>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
            Listing<i className="fa fa-home home"></i>
          </li>
        </NavLink>
        <NavLink
          to="/pokedex"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>
            Pokedex
            <img src="./assets/images/pokeball.png" alt="pokemon" />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
