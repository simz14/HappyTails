import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import DogsSection from "../../components/DogsSection";
import ServicesSection from "./sections/ServiceSection/ServicesSection";
import ClientsSection from "./sections/ClientsSection";

const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <DogsSection amount={6} />
      <ServicesSection />
      <ClientsSection />
    </Layout>
  );
};

export default Home;
