import React from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router";
import Intro from "./components/Intro";
import PawsBcg from "../../components/PawsBcg";
import ScrollTop from "../../components/ScrollTop";
import { Helmet } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import useDogs from "../../hooks/useDogs";
import useDog from "../../hooks/useDog";

const AdoptionLoadingWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1rem;
  min-height: 400px;
  align-items: center;
`;

const Adoption = () => {
  const { id } = useParams();
  const { loading } = useDogs();
  const { dog } = useDog();

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
        {loading ? (
          <AdoptionLoadingWrap>
            <CircularProgress />
          </AdoptionLoadingWrap>
        ) : (
          <Intro dog={dog(id)} />
        )}
      </PawsBcg>
    </Layout>
  );
};

export default Adoption;
