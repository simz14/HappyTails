import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import DogsSection from "../../components/Dog/DogsSection";
import ServicesSection from "./sections/ServiceSection/ServicesSection";
import ClientsSection from "./sections/ClientsSection";
import LearnMoreSection from "./sections/LearnMore";

const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <DogsSection navigateTo={true} amount={6} />
      <ServicesSection />
      <ClientsSection />
      <LearnMoreSection />
    </Layout>
  );
};

export default Home;
