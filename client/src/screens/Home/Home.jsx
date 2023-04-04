import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import DogsSection from "./sections/DogsSection";
import ServicesSection from "./sections/ServiceSection/ServicesSection";
import ClientsSection from "./sections/ClientsSection";

const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <DogsSection />
      <ServicesSection />
      <ClientsSection />
    </Layout>
  );
};

export default Home;
