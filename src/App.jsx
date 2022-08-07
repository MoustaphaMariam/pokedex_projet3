import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./views/Detail";
import Listing from "./views/Listing";
import Pokedex from "./views/Pokedex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="*" element={<Listing />} />
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
