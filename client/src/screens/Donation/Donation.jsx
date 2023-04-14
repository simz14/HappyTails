import React from "react";
import Layout from "../../components/Layout";
import IntroSection from "./components/IntroSection";
import GallerySection from "./components/GallerySection";
import DescriptionSection from "./components/DescriptionSection";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";

const Donation = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Donation - HappyTails</title>
        <meta
          name="description"
          content="Support our shelter dogs by making a donation today. Your contribution will help provide food, medical care, and a comfortable living environment for our furry friends. With your help, we can continue to make a difference in the lives of dogs in need."
        />
      </Helmet>
      <ScrollTop />
      <IntroSection />
      <GallerySection />
      <DescriptionSection />
    </Layout>
  );
};

export default Donation;
