import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import DogSection from "../../../components/DogSection";

const DogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .sectionDescription {
    text-align: center;
  }
  & h2 {
    color: ${(props) => props.theme.colors.darkestPurple};
    font-family: ${(props) => props.theme.typography.family.extra};
    font-size: ${(props) => props.theme.typography.size.mHeader};
  }
  & p {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.typography.size.large};
  }
  @media (max-width: 750px) {
    & h2 {
      font-size: ${(props) => props.theme.typography.size.sHeader};
    }
    & p {
      font-size: ${(props) => props.theme.typography.size.small};
    }
  }
`;

const DogsSection = () => {
  return (
    <Container>
      <DogsContainer>
        <div className="sectionDescription">
          <h2>Dogs available for adoption</h2>
          <p>These are some of the dogs that are looking for home.</p>
        </div>
        <div>
          <DogSection />
        </div>
      </DogsContainer>
    </Container>
  );
};

export default DogsSection;
