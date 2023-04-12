import React from "react";
import Layout from "../../components/Layout";
import IntroSection from "./components/IntroSection";
import GallerySection from "./components/GallerySection";
import DescriptionSection from "./components/DescriptionSection";

const Donation = () => {
  return (
    <Layout>
      <IntroSection />
      <GallerySection />
      <DescriptionSection />
    </Layout>
  );
};

export default Donation;
