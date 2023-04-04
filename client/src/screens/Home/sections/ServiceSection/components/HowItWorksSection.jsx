import React from "react";
import styled from "styled-components";
import { Container } from "../../../../../components/Container";
import shapeMask from "../../../../../assets/shape.png";
import { Spacer } from "../../../../../components/Spacer";

const HowItWorksWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .stepsWrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 1030px) {
    & .stepsWrap {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 750px) {
    & .stepsWrap {
      gap: 0;
      grid-template-columns: 1fr;
    }
  }
`;

const StepNum = styled.div`
  position: relative;
  & img {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: -20px;
    left: -25px;
  }
  & h4 {
    position: relative;
    z-index: 5;
    color: ${(props) => props.theme.colors.mediumPurple};
    font-family: ${(props) => props.theme.typography.family.extra};
    font-size: ${(props) => props.theme.typography.size.xxLarge};
  }
`;

const HowItWorksSection = () => {
  return (
    <Container>
      <HowItWorksWrap>
        <Spacer size="s" />
        <h2>How it works?</h2>
        <p>Look at how the adoption process looks like.</p>
        <div className="stepsWrap">
          <div>
            <StepNum>
              <img src={shapeMask} alt="shape" />
              <h4>01.</h4>
            </StepNum>
            <h3>Browse pet profiles</h3>
            <p>Look threw all dogs available for adoption.</p>
          </div>
          <div>
            <StepNum>
              <img src={shapeMask} alt="shape" />
              <h4>02.</h4>
            </StepNum>
            <h3>Join & message the Guardians</h3>
            <p>Once you find a dog you want to adopt, contact our Guardians.</p>
          </div>
          <div>
            <StepNum>
              <img src={shapeMask} alt="shape" />
              <h4>03.</h4>
            </StepNum>
            <h3>Make a meet-up</h3>
            <p>If you think you are a good fit, plan a meetup.</p>
          </div>
          <div>
            <StepNum>
              <img src={shapeMask} alt="shape" />
              <h4>04.</h4>
            </StepNum>
            <h3>Make a Legal Pet Adoption</h3>
            <p>Finally, adopt your new friend.</p>
          </div>
        </div>
        <Spacer size="s" />
      </HowItWorksWrap>
    </Container>
  );
};

export default HowItWorksSection;
