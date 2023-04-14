import React from "react";
import Layout from "../../components/Layout";
import ScrollTop from "../../components/ScrollTop";
import IntroSection from "./components/IntroSection";
import ImageQuote from "./components/ImageQuote";
import CounterWidget from "../../components/CounterWidget";
import { Container } from "../../components/Container";
import MeetOurTeam from "./components/MeetOurTeam";
import PartnersSection from "../../components/PartnersSection";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>About Us - HappyTails</title>
        <meta
          name="description"
          content="Discover our dog shelter, a safe haven for dogs in need of care and affection. Our passionate staff is dedicated to providing every dog with the love, medical attention, and shelter they deserve. We strive to find forever homes for each furry friend we take in."
        />
      </Helmet>
      <ScrollTop />
      <IntroSection />
      <ImageQuote />
      <Container>
        <CounterWidget />
      </Container>
      <MeetOurTeam />
      <PartnersSection />
    </Layout>
  );
};

export default AboutUs;
