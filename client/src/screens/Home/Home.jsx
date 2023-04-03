import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import OptionsSection from "./sections/OptionsSections";
import DogsSection from "./sections/DogsSection";

const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <OptionsSection />
      <DogsSection />
    </Layout>
  );
};

export default Home;
