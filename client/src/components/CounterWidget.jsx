import React from "react";
import styled from "styled-components";
import useCount from "../hooks/useCount";
import SlideUp from "../components/SlideUp";

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
  const [dogAmount, fireDogAmount] = useCount(10);
  const [shelters, fireShelters] = useCount(5);
  const [years, fireYears] = useCount(18);
  return (
    <SlideUp
      viewOffset={50}
      afterReveal={() => {
        fireDogAmount(true), fireShelters(true), fireYears(true);
      }}
    >
      <CounterWrapper>
        <div className="count">
          <h2>{dogAmount}k+</h2>
          <span>Dogs Adopted</span>
        </div>
        <div className="count">
          <h2>{shelters}k+</h2>
          <span>Shelters & Rescues</span>
        </div>
        <div className="count">
          <h2>{years}+</h2>
          <span>Years of Impact</span>
        </div>
      </CounterWrapper>
    </SlideUp>
  );
};

export default CounterWidget;
