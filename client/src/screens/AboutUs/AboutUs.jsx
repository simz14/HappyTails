import React from "react";
import Layout from "../../components/Layout";
import ScrollTop from "../../components/ScrollTop";
import IntroSection from "./components/IntroSection";
import ImageQuote from "./components/ImageQuote";
import CounterWidget from "../../components/CounterWidget";
import { Container } from "../../components/Container";

const AboutUs = () => {
  return (
    <Layout>
      <ScrollTop />
      <IntroSection />
      <ImageQuote />
      <Container>
        <CounterWidget />
      </Container>
    </Layout>
  );
};

export default AboutUs;
