import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import OptionsSection from "./sections/OptionsSections";

const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <OptionsSection />
    </Layout>
  );
};

export default Home;
