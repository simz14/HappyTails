import React from "react";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";

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

const KnowBetter = ({ dog }) => {
  return (
    <KnowContainer>
      <Spacer size="s" />
      <KnowWrap>
        <div>
          <h2>Know {dog?.name} better</h2>
          <p>{dog?.story}</p>
        </div>
        <div>
          <img src={dog?.img} alt="dog" />
        </div>
      </KnowWrap>
      <Spacer size="s" />
    </KnowContainer>
  );
};

export default KnowBetter;
