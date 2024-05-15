import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Page/Home";
import StatParEquipe from "../Page/StatParEquipe";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statjoueursparequipe" element={<StatParEquipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;