import React from "react";
import "../styles/components/Favorite.css";
import { NavLink } from "react-router-dom";

const Favorite = () => {
  return (
    <div>
      <div className="Favorite">
        <button>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <NavLink to="/detail">
          <img src="./assets/images/bulmasaur.png" alt="pokemon" />
        </NavLink>
        <p>Bulbasaur</p>
      </div>
    </div>
  );
};

export default Favorite;
