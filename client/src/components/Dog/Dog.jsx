import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import PropTypes from "prop-types";

const DogWrap = styled.div`
  border-radius: ${(props) => props.theme.radius.large};
  padding: ${(props) => props.theme.spacing.padding.small};
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.yellow};
    box-shadow: 0px 10px 30px 0px rgba(204, 142, 9.9, 0.12);
  }
  & h3 {
    &:hover {
      color: ${(props) => props.theme.colors.mediumPurple};
    }
  }

  & img {
    height: auto;
    max-width: 100%;
    border-radius: ${(props) => props.theme.radius.large};
    transition-duration: 0.3s;
    &:hover {
      transform: translateY(-8px);
      transition-duration: 0.3s;
    }
  }
  & .info {
    & span {
      font-size: ${(props) => props.theme.typography.size.small};
      color: ${(props) => props.theme.colors.darkestPurple};
      padding: 0 0.5rem;
    }
    & .borderRight {
      padding: 0 0.5rem 0 0;
    }
    & .border {
      border-right: 1px solid ${(props) => props.theme.colors.lightBlue};
      border-left: 1px solid ${(props) => props.theme.colors.lightBlue};
    }
  }
`;

const Dog = ({ dog }) => {
  const navigate = useNavigate();
  return (
    <DogWrap onClick={() => navigate(`/dog/${dog.id}`)}>
      <img src={dog?.imgs[0]} alt="dog" />
      <h3>{dog.name}</h3>
      <p>{dog.breed}</p>
      <div className="info">
        <span className="borderRight">{dog.sex}</span>
        <span className="border">{dog.age} Years</span>
        <span>{dog.location}</span>
      </div>
    </DogWrap>
  );
};

Dog.propTypes = {
  dog: PropTypes.object.isRequired,
};

export default Dog;
