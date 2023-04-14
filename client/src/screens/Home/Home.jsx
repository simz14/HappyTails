import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import DogsSection from "../../components/Dog/DogsSection";
import ServicesSection from "./sections/ServiceSection/ServicesSection";
import ClientsSection from "./sections/ClientsSection";
import LearnMoreSection from "./sections/LearnMore";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";
import DogsGroup from "../../assets/DogsGroup.jpg";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>HappyTails</title>
        <meta property="og:title" content="HappyTails Dog Shelter" />
        <meta property="og:image" content={DogsGroup} />
        <meta
          property="og:description"
          content="Our dog shelter provides a safe and loving environment for dogs who have been abandoned or surrendered. We provide medical care, socialization, and training to help prepare our dogs for their forever homes. Our ultimate goal is to find each dog a loving and permanent family to call their own."
        />
      </Helmet>
      <ScrollTop />
      <IntroSection />
      <DogsSection loaded={true} navigateTo={true} amount={6} />
      <ServicesSection />
      <ClientsSection />
      <LearnMoreSection />
    </Layout>
  );
};

export default Home;
