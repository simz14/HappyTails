import React from "react";
import IntroSection from "./sections/IntroSection";
import Layout from "../../components/Layout";
import DogsSection from "../../components/Dog/DogsSection";
import ServicesSection from "./sections/ServiceSection/ServicesSection";
import ClientsSection from "./sections/ClientsSection";
import LearnMoreSection from "./sections/LearnMore";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>HappyTails</title>
        <meta property="og:title" content="HappyTails Dog Shelter" />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg?w=1380&t=st=1681468573~exp=1681469173~hmac=f7281b58b0163b5ed3b58cfc438a3bc6453a6c7c691aa87f80486b5b8aa46d2a"
        />
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
