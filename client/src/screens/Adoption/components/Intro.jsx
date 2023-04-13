import React from "react";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import { Container } from "../../../components/Container";
import AdoptionForm from "./AdoptionForm";
import PropTypes from "prop-types";

const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    border-radius: ${({ theme }) => theme.radius.large};
    border: 1px solid ${(props) => props.theme.colors.yellow};
    box-shadow: 0px 10px 30px 0px rgba(204, 142, 9.9, 0.12);
    height: auto;
    max-width: 100%;
  }
  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`;

const Intro = ({ dog }) => {
  return (
    <Container>
      <Spacer size="xs" />
      <div>
        <h2>{dog?.name} is already excited for a new home</h2>
        <p>
          The next step you need to take for successful adoption is to fill out
          the form and choose date to meet Velfire.
        </p>
      </div>
      <Spacer size="xs" />
      <IntroWrapper>
        <div>
          <img src={dog && dog.imgs && dog.imgs[0]} alt="dog" />
        </div>
        <AdoptionForm />
      </IntroWrapper>
      <Spacer size="s" />
    </Container>
  );
};

Intro.propTypes = {
  dog: PropTypes.object.isRequired,
};

export default Intro;
