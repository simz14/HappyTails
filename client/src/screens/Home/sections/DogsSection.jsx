import React, { useContext } from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import DogSection from "../../../components/DogSection";
import { DogsContext } from "../../../context/DogsContext";
import PurpleButton from "../../../components/PuprleButton";
import { FaArrowCircleRight } from "react-icons/fa";

const DogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .sectionDescription {
    text-align: center;
  }
  & h2 {
    color: ${(props) => props.theme.colors.darkestPurple};
    font-family: ${(props) => props.theme.typography.family.extra};
    font-size: ${(props) => props.theme.typography.size.lHeader};
  }
  & p {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.typography.size.large};
  }
  @media (max-width: 750px) {
    & h2 {
      font-size: ${(props) => props.theme.typography.size.sHeader};
    }
    & p {
      font-size: ${(props) => props.theme.typography.size.small};
    }
  }
`;

const DogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

const DogsSection = () => {
  const { dogs } = useContext(DogsContext);
  console.log(dogs);
  return (
    <Container>
      <DogsContainer>
        <div className="sectionDescription">
          <h2>Dogs available for adoption</h2>
          <p>These are some of the dogs that are looking for home.</p>
        </div>
        <DogsWrapper>
          {dogs.slice(0, 6).map((dog) => {
            return <DogSection key={dog.id} dog={dog} />;
          })}
        </DogsWrapper>{" "}
        <PurpleButton
          icon={<FaArrowCircleRight />}
          iconAfter={true}
          title={"View more"}
        />
      </DogsContainer>
    </Container>
  );
};

export default DogsSection;
