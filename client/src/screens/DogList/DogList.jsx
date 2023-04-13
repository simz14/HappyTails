import React, { useContext } from "react";
import Layout from "../../components/Layout";
import IntroSection from "./components/IntroSection";
import HowItWorksSection from "../../components/HowItWorks";
import AskedQuestions from "../../components/AskedQuestions/AskedQuestions";
import DogsSection from "../../components/Dog/DogsSection";
import ScrollTop from "../../components/ScrollTop";

const DogList = () => {
  return (
    <Layout>
      <ScrollTop />
      <IntroSection />
      <DogsSection loadMore={true} hasTopPadding={true} amount={6} />
      <HowItWorksSection />
      <AskedQuestions hasBottomBorder={true} />
    </Layout>
  );
};

export default DogList;
