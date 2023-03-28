import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.mediumPurple};
  color: white;
  font-weight: ${(props) => props.theme.typography.weight.xThick};
  font-size: ${(props) => props.theme.typography.size.large};
  padding: ${(props) => props.theme.spacing.padding.large};
  border-radius: ${(props) => props.theme.radius.xSmall};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  display: flex;
  transition: 0.5s ease;
  & .icon {
    & svg {
      display: flex;
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
    }
  }

  &:hover {
    transition: 0.5s ease;
    box-shadow: 0px 0px 0px 10px ${(props) => props.theme.colors.lightPurple};
  }
`;

const PurpleButton = ({ title, onClick, icon }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon && <div className="icon">{icon}</div>}

      {title}
    </StyledButton>
  );
};

export default PurpleButton;
