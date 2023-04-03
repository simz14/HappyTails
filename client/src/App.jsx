import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home/Home";
import Theme from "./utils/themes/Theme";
import { DogsProvider } from "./context/DogsContext";

const App = () => {
  return (
    <Theme>
      <DogsProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </DogsProvider>
    </Theme>
  );
};

export default App;
