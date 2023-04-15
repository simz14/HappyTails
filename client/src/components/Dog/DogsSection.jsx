import React, { useState } from "react";
import { Container } from "../Container";
import styled from "styled-components";
import Dog from "./Dog";
import PurpleButton from "../Buttons/PuprleButton";
import { FaArrowCircleRight } from "react-icons/fa";
import { Spacer } from "../Spacer";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import useDogs from "../../hooks/useDogs";

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

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogsSection = ({
  amount,
  navigateTo,
  loadMore,
  hasBottomBorder,
  hasTopPadding,
  loaded,
}) => {
  const { dogs, loading } = useDogs();
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

        {loading || !loaded ? (
          <LoadingWrap>
            <CircularProgress />
          </LoadingWrap>
        ) : (
          <>
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
          </>
        )}

        <Spacer size="s" />
      </DogsContainer>
    </Container>
  );
};

DogsSection.propTypes = {
  amount: PropTypes.number.isRequired,
  navigateTo: PropTypes.bool,
  loadMore: PropTypes.bool,
  hasBottomBorder: PropTypes.bool,
  hasTopPadding: PropTypes.bool,
};

export default DogsSection;
