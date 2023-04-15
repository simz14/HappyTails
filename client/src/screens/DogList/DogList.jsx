import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import IntroSection from "./components/IntroSection";
import HowItWorksSection from "../../components/HowItWorks";
import AskedQuestions from "../../components/AskedQuestions/AskedQuestions";
import DogsSection from "../../components/Dog/DogsSection";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";

const DogList = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //just for fake loading :)
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Dog List - HappyTails</title>
        <meta
          name="description"
          content="Explore our list of dogs available for adoption at our shelter. Each dog has their own profile with photos and information about their personality, likes, and needs. Find your perfect match and give a dog in need a loving forever home."
        />
      </Helmet>
      <ScrollTop />
      <IntroSection />
      <DogsSection
        loaded={loaded}
        loadMore={true}
        hasTopPadding={true}
        amount={6}
      />
      <HowItWorksSection />
      <AskedQuestions hasBottomBorder={true} />
    </Layout>
  );
};

export default DogList;
