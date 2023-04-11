import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router";
import Intro from "./components/Intro";
import { DogsContext } from "../../context/DogsContext";
import PawsBcg from "../../components/PawsBcg";
import AdoptionForm from "./components/AdoptionForm";

const Adoption = () => {
  const { id } = useParams();
  const { dogs } = useContext(DogsContext);
  const [dog, setDog] = useState({});

  useEffect(() => {
    setDog(dogs?.find((dog) => dog.id == id));
  }, [dogs]);

  return (
    <Layout>
      <PawsBcg>
        <Intro dog={dog} />
      </PawsBcg>
    </Layout>
  );
};

export default Adoption;
