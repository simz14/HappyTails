import React, { useRef } from "react";
import styled from "styled-components";
import whiteDogWomen from "../../../assets/whiteDogWomen.jpg";
import { Container } from "../../../components/Container";
import { FaUserAlt } from "react-icons/fa";
import { Spacer } from "../../../components/Spacer";
import SlideUp from "../../../components/SlideUp";

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
    opacity: 5;
  }

  & .quote {
    position: absolute;
    bottom: 12%;
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
    & .quote {
      min-width: 20rem;
      padding: 1.5rem;
    }
  }
`;

const ClientsQuotes = styled.div`
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

const ClientsSection = () => {
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
          <SlideUp viewOffset={500}>
            <div>
              <img className="dogImage" src={whiteDogWomen} alt="dog" />
            </div>
          </SlideUp>

          <div className="quote">
            <p>
              “The first day we bought Miso home, he did’nt cry at all on the
              car ride home. He was incredibely curious.”
            </p>
            <h3>Catherine, Los Angeles</h3>
          </div>
        </Intro>
        <Spacer size="s" />
        <ClientsQuotes>
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
        </ClientsQuotes>
        <Spacer size="s" />
      </Container>
    </ClintesWrapp>
  );
};

export default ClientsSection;
