import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home/Home";
import DogDetail from "./screens/Dog/DogDetail";
import Theme from "./utils/themes/Theme";
import { DogsProvider } from "./context/DogsContext";
import GlobalStyle from "./utils/globalStyle/Style";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <DogsProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dog/:id" element={<DogDetail />} />
        </Routes>
      </DogsProvider>
    </Theme>
  );
};

export default App;
