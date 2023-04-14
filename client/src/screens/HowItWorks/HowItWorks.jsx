import React from "react";
import Layout from "../../components/Layout";
import IntroSection from "./components/IntroSection";
import StepsSection from "./components/StepsSection";
import ClientsSection from "../Home/sections/ClientsSection";
import OurPartnersSection from "../../components/PartnersSection";
import LearnMore from "../Home/sections/LearnMore";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";

const HowItWorks = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>How It Works - HappyTails</title>
        <meta
          name="description"
          content="Curious about how our dog shelter works? It's simple! We take in dogs in need of care, provide them with medical attention, love, and a safe temporary home. When they're ready, we find them loving forever homes with responsible and caring owners. Join us in our mission to give dogs a second chance at happiness."
        />
      </Helmet>
      <ScrollTop />
      <IntroSection />
      <StepsSection />
      <ClientsSection />
      <OurPartnersSection />
      <LearnMore />
    </Layout>
  );
};

export default HowItWorks;
