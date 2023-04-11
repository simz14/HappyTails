import React, { useContext, useState } from "react";
import { Container } from "../Container";
import styled from "styled-components";
import Dog from "./Dog";
import { DogsContext } from "../../context/DogsContext";
import PurpleButton from "../PuprleButton";
import { FaArrowCircleRight } from "react-icons/fa";
import { Spacer } from "../Spacer";
import { useNavigate } from "react-router";

const DogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: ${(props) =>
    props.className === "border" &&
    `1px solid ${props.theme.colors.lightBlue}`};
  & .sectionDescription {
    text-align: center;
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

const DogsSection = ({
  amount,
  navigateTo,
  loadMore,
  hasBottomBorder,
  hasTopPadding,
}) => {
  const { dogs } = useContext(DogsContext);
  const navigate = useNavigate();
  const [dogsToShow, setDogsToShow] = useState(amount);

  const handleClick = () => {
    navigateTo && navigate("/doglist");
    loadMore && setDogsToShow((prev) => prev + 6);
  };

  return (
    <Container>
      <DogsContainer className={hasBottomBorder && "border"}>
        {hasTopPadding && <Spacer size="s" />}
        <div className="sectionDescription">
          <h2>Dogs available for adoption</h2>
          <p>These are some of the dogs that are looking for home.</p>
        </div>
        <DogsWrapper>
          {dogs.slice(0, dogsToShow).map((dog) => {
            return <Dog key={dog.id} dog={dog} />;
          })}
        </DogsWrapper>
        {dogsToShow === dogs.length || dogsToShow > dogs.length ? null : (
          <PurpleButton
            onClick={handleClick}
            icon={<FaArrowCircleRight />}
            iconAfter={true}
            title={"View more"}
          />
        )}

        <Spacer size="s" />
      </DogsContainer>
    </Container>
  );
};

export default DogsSection;
