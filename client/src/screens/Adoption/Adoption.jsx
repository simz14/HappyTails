import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router";
import Intro from "./components/Intro";
import { DogsContext } from "../../context/DogsContext";
import PawsBcg from "../../components/PawsBcg";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";

const Adoption = () => {
  const { id } = useParams();
  const { dogs } = useContext(DogsContext);
  const [dog, setDog] = useState({});

  useEffect(() => {
    setDog(dogs?.find((dog) => dog.id == id));
  }, [dogs]);

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Adoption - HappyTails</title>
        <meta
          name="description"
          content="Looking to make a difference in the lives of dogs in need? Consider making a donation to our dog shelter today. Your support will help us provide crucial care, shelter, and nourishment for the dogs in our care. Every contribution counts, no matter the size."
        />
      </Helmet>
      <ScrollTop />
      <PawsBcg>
        <Intro dog={dog} />
      </PawsBcg>
    </Layout>
  );
};

export default Adoption;
