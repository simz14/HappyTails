import React from "react";
import styled from "styled-components";
import whiteDogWomen from "../../../assets/whiteDogWomen.jpg";
import { Container } from "../../../components/Container";
import { FaUserAlt } from "react-icons/fa";
import rehomePurple from "../../../assets/rehomePurple.png";
import adoptionWhite from "../../../assets/adoptionWhite.png";
import beagleAlone from "../../../assets/beagleAlone.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { Spacer } from "../../../components/Spacer";

const ClintesWrapp = styled.div`
  background-color: ${(props) => props.theme.colors.lightBcgPink};
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: relative;
  padding-bottom: 8rem;
  & .dogImage {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.spacing.padding.large};
  }

  & .qoute {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 20px;
    max-width: 20rem;
    padding: 3rem;
    border: 1px solid rgb(255, 234, 189);
    box-shadow: rgba(204, 142, 10, 0.12) 0px 10px 30px 0px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    & .qoute {
      min-width: 80%;
      padding: 1.5rem;
    }
  }
`;

const ClientsQutes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  @media (max-width: 1030px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  & .user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & p {
      margin: 0;
    }
    & svg {
      height: 2rem;
      width: 2rem;
      color: ${(props) => props.theme.colors.mediumPurple};
    }
  }
`;

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
    & span,
    h2,
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
    & span,
    h2,
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

const ClientsSection = (props) => {
  return (
    <ClintesWrapp>
      <Container>
        <Spacer size="s" />
        <Intro>
          <div>
            <h1>Our client testimonial</h1>
            <p>
              We have clients all over the world. Here are some of their
              feedback and stories.
            </p>
          </div>
          <div>
            <img className="dogImage" src={whiteDogWomen} alt="dog" />
          </div>
          <div className="qoute">
            <p>
              “The first day we bought Miso home, he did’nt cry at all on the
              car ride home. He was incredibely curious.”
            </p>
            <h3>Catherine, Los Angeles</h3>
          </div>
        </Intro>
        <Spacer size="s" />
        <ClientsQutes>
          <div>
            <p>
              “I was hesitant about adopting a dog at first, but it's been such
              a rewarding experience.”
            </p>
            <div className="user">
              <FaUserAlt />
              <div>
                <h3>Dany Monson</h3>
                <p>Austin, TX</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              “ It's amazing how much a pet can teach you about unconditional
              love.”
            </p>
            <div className="user">
              <FaUserAlt />
              <div>
                <h3>Cahaya Dewi</h3>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              “She's always by my side, ready to give me a cuddle and make me
              smile.”
            </p>
            <div className="user">
              <FaUserAlt />
              <div>
                <h3>Sacha Dubois</h3>
                <p>Loas Angeles, LA</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              “Adopting a dog was the best decision I ever made. My furry friend
              brings me so much joy.”
            </p>
            <div className="user">
              <FaUserAlt />
              <div>
                <h3>Pavlyuchenko</h3>
                <p>California, CA</p>
              </div>
            </div>
          </div>
        </ClientsQutes>
        <Spacer size="s" />
        <LearnMore>
          <img className="beagle " src={beagleAlone} alt="beagle" />
          <div className="purple">
            <img src={adoptionWhite} alt="adopt" />
            <div>
              <h2>Adopt a dog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span>
                Learn more <FaArrowCircleRight />
              </span>
            </div>
          </div>
          <div className="yellow">
            <img src={rehomePurple} alt="rehome" />
            <div>
              <h2>Rehome a dog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span>
                Learn more <FaArrowCircleRight />
              </span>
            </div>
          </div>
        </LearnMore>
        <Spacer size="s" />
      </Container>
    </ClintesWrapp>
  );
};

export default ClientsSection;
