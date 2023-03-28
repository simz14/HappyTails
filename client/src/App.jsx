import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
