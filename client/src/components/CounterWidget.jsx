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
    gap: 1rem;
  }

  & .count {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & h2 {
      margin: 0;
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
        <h2>10k+</h2>
        <span>Dogs Adopted</span>
      </div>
      <div className="count">
        <h2>5k+</h2>
        <span>Shelters & Rescues</span>
      </div>
      <div className="count">
        <h2>18+</h2>
        <span>Years of Impact</span>
      </div>
    </CounterWrapper>
  );
};

export default CounterWidget;
