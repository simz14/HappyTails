import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useParams } from "react-router";
import { DogsContext } from "../../context/DogsContext";
import { Spacer } from "../../components/Spacer";
import { Container } from "../../components/Container";
import bcgPaws from "../../assets/bcgPaws.png";
import DogInfo from "./components/DogInfo";
import KnowBetter from "./components/KnowBetter";
import AdoptRequest from "./components/AdoptRequest";
import DogsSection from "../../components/DogsSection";

const IntroWrap = styled.div`
  background-color: rgb(255, 252, 248);
  display: flex;
  text-align: center;
  position: relative;
  & .paws {
    object-fit: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
  }
`;

const DogDetail = () => {
  const { id } = useParams();
  const { dogs } = useContext(DogsContext);
  const [dog, setDog] = useState({});

  useEffect(() => {
    setDog(dogs.find((dog) => dog.id == id));
  }, [dogs, id]);

  return (
    <Layout>
      <IntroWrap>
        <img className="paws" src={bcgPaws} alt="paws" />
        <Container>
          <Spacer size="s" />
          <h1>Hi, my name is {dog?.name}!</h1>
          <p>Here are all the facts about me you need to know.</p>
          <Spacer size="s" />
          <DogInfo dog={dog} />
        </Container>
      </IntroWrap>
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
