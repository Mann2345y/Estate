import React from "react";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourite";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/fav" element={<Favourite />} />
    </Routes>
  );
}

export default App;
