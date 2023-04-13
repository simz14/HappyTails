import React from "react";
import Layout from "../../components/Layout";
import ScrollTop from "../../components/ScrollTop";
import IntroSection from "./components/IntroSection";
import ImageQuote from "./components/ImageQuote";
import CounterWidget from "../../components/CounterWidget";
import { Container } from "../../components/Container";
import MeetOurTeam from "./components/MeetOurTeam";
import PartnersSection from "../../components/PartnersSection";

const AboutUs = () => {
  return (
    <Layout>
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
