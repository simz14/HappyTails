import React, { useEffect, useState } from "react";
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
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";
import useDog from "../../hooks/useDog";
import { CircularProgress } from "@mui/material";
import SlideUp from "../../components/SlideUp";

const LoadingWrap = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogDetail = () => {
  const { id } = useParams();
  const { dog, loading } = useDog(id);
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Dog - HappyTails</title>
        <meta
          name="description"
          content="Meet the dogs of our shelter, each with a unique personality and story to share. From playful puppies to gentle seniors, we have dogs of all ages and breeds in need of loving homes. Browse our available dogs and find your new furry companion today."
        />
      </Helmet>
      <ScrollTop dependecy={id} />
      {loading ? (
        <LoadingWrap>
          <CircularProgress />
        </LoadingWrap>
      ) : (
        <>
          <PawsBcg>
            <Container>
              <Spacer size="s" />
              <SlideUp>
                <h1>Hi, my name is {dog?.name}!</h1>
                <p>Here are all the facts about me you need to know.</p>
              </SlideUp>

              <Spacer size="s" />
              <DogInfo dog={dog} />
            </Container>
          </PawsBcg>
          <Container>
            <KnowBetter dog={dog} />
          </Container>
          <AdoptRequest id={id} />
          <Spacer size="s" />
          <DogsSection
            loaded={true}
            navigateTo={true}
            hasBottomBorder={true}
            amount={3}
          />
        </>
      )}
    </Layout>
  );
};

export default DogDetail;
