import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home/Home";
import DogDetail from "./screens/Dog/DogDetail";
import Theme from "./utils/themes/Theme";
import { DogsProvider } from "./context/DogsContext";
import GlobalStyle from "./utils/globalStyle/Style";
import DogList from "./screens/DogList/DogList";
import Adoption from "./screens/Adoption/Adoption";
import Donation from "./screens/Donation/Donation";
import HowItWorks from "./screens/HowItWorks/HowItWorks";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <DogsProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dog/:id" element={<DogDetail />} />
          <Route exact path="/doglist" element={<DogList />} />
          <Route exact path="/adoption/:id" element={<Adoption />} />
          <Route exact path="/donation" element={<Donation />} />
          <Route exact path="/howitworks" element={<HowItWorks />} />
        </Routes>
      </DogsProvider>
    </Theme>
  );
};

export default App;
