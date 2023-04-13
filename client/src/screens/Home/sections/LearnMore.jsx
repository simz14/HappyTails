import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";
import rehomePurple from "../../../assets/rehomePurple.png";
import adoptionWhite from "../../../assets/adoptionWhite.png";
import beagleAlone from "../../../assets/beagleAlone.png";
import { Container } from "../../../components/Container";
import LearnMoreArrow from "../../../components/LearnMoreArrow";

const LearnMore = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  & .beagle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 140%;
  }
  & img {
    max-width: 30%;
    height: auto;
    object-fit: contain;
  }
  & span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease;
    cursor: pointer;
    &:hover {
      transform: translateY(-8px);
    }
  }

  & .purple {
    display: flex;
    background-color: ${(props) => props.theme.colors.mediumPurple};
    border-radius: 20px 0 0 20px;
    padding: ${(props) => props.theme.spacing.padding.xLarge};
    padding-right: 50px;
    & h2,
    p {
      color: white;
    }
  }
  & .yellow {
    display: flex;
    background-color: ${(props) => props.theme.colors.brightYellow};
    border-radius: 0 20px 20px 0;
    padding: ${(props) => props.theme.spacing.padding.xLarge};
    padding-left: 50px;
    & h2,
    p {
      color: ${(props) => props.theme.colors.darkestPurple};
    }
  }
  @media (max-width: 1030px) {
    & .beagle {
      display: none;
    }
    & .purple,
    .yellow {
      display: flex;
      flex-direction: column;
      padding-right: ${(props) => props.theme.spacing.padding.xLarge};
      text-align: center;
      align-items: center;
    }
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    & .purple {
      border-radius: 20px 20px 0 0;
    }
    & .yellow {
      border-radius: 0 0 20px 20px;
    }
  }
`;

const LearnMoreSection = (props) => {
  return (
    <Container>
      <LearnMore>
        <img className="beagle " src={beagleAlone} alt="beagle" />
        <div className="purple">
          <img src={adoptionWhite} alt="adopt" />
          <div>
            <h2>Adopt a dog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <LearnMoreArrow navigateTo="/doglist" color={"white"} />
          </div>
        </div>
        <div className="yellow">
          <img src={rehomePurple} alt="rehome" />
          <div>
            <h2>Rehome a dog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <LearnMoreArrow navigateTo="/rehome" color={"#322258"} />
          </div>
        </div>
      </LearnMore>
    </Container>
  );
};

export default LearnMoreSection;
