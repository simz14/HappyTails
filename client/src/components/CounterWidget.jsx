import React from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  min-width: 90%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .count {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & h1 {
      margin: 0;
      color: ${(props) => props.theme.colors.darkestPurple};
      font-family: ${(props) => props.theme.typography.family.extra};
      font-size: ${(props) => props.theme.typography.size.lHeader};
    }
    & span {
      color: ${(props) => props.theme.colors.lightGrey};
      font-size: ${(props) => props.theme.typography.size.large};
    }
  }
`;

const CounterWidget = () => {
  return (
    <CounterWrapper>
      <div className="count">
        <h1>10k+</h1>
        <span>Dogs Adopted</span>
      </div>
      <div className="count">
        <h1>5k+</h1>
        <span>Shelters & Rescues</span>
      </div>
      <div className="count">
        <h1>18+</h1>
        <span>Years of Impact</span>
      </div>
    </CounterWrapper>
  );
};

export default CounterWidget;
