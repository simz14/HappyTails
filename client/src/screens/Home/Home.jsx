import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import OptionsSection from "./sections/OptionsSections";
import DogsSection from "./sections/DogsSection";
import ServicesSection from "./sections/ServicesSection";

const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <OptionsSection />
      <DogsSection />
      <ServicesSection />
    </Layout>
  );
};

export default Home;
