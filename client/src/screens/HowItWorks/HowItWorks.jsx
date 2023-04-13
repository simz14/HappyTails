import React from "react";
import Layout from "../../components/Layout";
import IntroSection from "./components/IntroSection";
import StepsSection from "./components/StepsSection";
import ClientsSection from "../Home/sections/ClientsSection";
import OurPartnersSection from "../../components/PartnersSection";
import LearnMore from "../Home/sections/LearnMore";
import ScrollTop from "../../components/ScrollTop";

const HowItWorks = () => {
  return (
    <Layout>
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
