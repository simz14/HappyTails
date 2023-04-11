import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useParams } from "react-router";
import { DogsContext } from "../../context/DogsContext";
import { Spacer } from "../../components/Spacer";
import { Container } from "../../components/Container";
import DogInfo from "./components/DogInfo";
import KnowBetter from "./components/KnowBetter";
import AdoptRequest from "./components/AdoptRequest";
import DogsSection from "../../components/Dog/DogsSection";
import PawsBcg from "../../components/PawsBcg";

const DogDetail = () => {
  const { id } = useParams();
  const { dogs } = useContext(DogsContext);
  const [dog, setDog] = useState({});

  useEffect(() => {
    setDog(dogs.find((dog) => dog.id == id));
  }, [dogs, id]);

  return (
    <Layout>
      <PawsBcg>
        <Container>
          <Spacer size="s" />
          <h1>Hi, my name is {dog?.name}!</h1>
          <p>Here are all the facts about me you need to know.</p>
          <Spacer size="s" />
          <DogInfo dog={dog} />
        </Container>
      </PawsBcg>
      <Container>
        <KnowBetter dog={dog} />
      </Container>
      <AdoptRequest />
      <Spacer size="s" />
      <DogsSection hasBottomBorder={true} amount={3} />
    </Layout>
  );
};

export default DogDetail;
