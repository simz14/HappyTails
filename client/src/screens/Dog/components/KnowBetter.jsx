import React from "react";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import Condition from "../../../components/Condition";
import PropTypes from "prop-types";

const KnowContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
`;

const KnowWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-items: center;
  & img {
    border-radius: ${({ theme }) => theme.radius.small};
    height: 100%;
    max-width: 20rem;
    object-fit: cover;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    & img {
      max-width: 100%;
    }
  }
`;

const Conditions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10%;
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const KnowBetter = ({ dog }) => {
  return (
    <>
      <KnowContainer>
        <Spacer size="s" />
        <KnowWrap>
          <div>
            <h2>Know {dog?.name} better</h2>
            <p>{dog?.story}</p>
          </div>
          <div>
            <img src={dog && dog.imgs && dog.imgs[0]} alt="dog" />
          </div>
        </KnowWrap>
        <Spacer size="s" />
      </KnowContainer>
      <Spacer size="s" />
      <Conditions>
        <Condition check={true} title="House" />
        <Condition check={true} title="Apartment" />
        <Condition check={true} title="Kids" />
        <Condition check={true} title="Older people" />
        <Condition check={false} title="Sports" />
        <Condition check={false} title="Other dogs" />
      </Conditions>
      <Spacer size="s" />
    </>
  );
};

KnowBetter.propTypes = {
  dog: PropTypes.object,
};

export default KnowBetter;
