import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.mediumPurple};
  color: white;
  font-weight: ${(props) => props.theme.typography.weight.xThick};
  font-size: ${(props) => props.theme.typography.size.large};
  padding: ${(props) =>
    props.inputButton
      ? props.theme.spacing.padding.large
      : props.theme.spacing.padding.small};
  border-radius: ${(props) =>
    props.inputButton ? "0 9px 9px 0" : props.theme.radius.xSmall};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  display: flex;
  transition: 0.5s ease;

  & span {
    margin-left: 1rem;
  }

  & .icon {
    & svg {
      display: flex;
      width: 1rem;
      height: 1rem;
    }
  }

  &:hover {
    transition: 0.5s ease;
    box-shadow: 0px 0px 0px 10px ${(props) => props.theme.colors.lightPurple};
  }
`;

const PurpleButton = (props) => {
  return (
    <StyledButton inputButton={props.inputButton} onClick={props.onClick}>
      {props.icon && <div className="icon">{props.icon}</div>}
      {props.title && <span>{props.title}</span>}
    </StyledButton>
  );
};

export default PurpleButton;
