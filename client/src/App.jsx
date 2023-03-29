import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home/Home";
import Theme from "./utils/themes/Theme";

const App = () => {
  return (
    <Theme>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Theme>
  );
};

export default App;
