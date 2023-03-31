import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: white;
  color: ${(props) => props.theme.colors.darkestPurple};
  font-weight: ${(props) => props.theme.typography.weight.medium};
  font-size: ${(props) => props.theme.typography.size.xSmall};
  padding: ${(props) => props.theme.spacing.padding.small};
  border-radius: ${(props) => props.theme.radius.xSmall};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  margin: 0 10px;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    background-color: ${(props) => props.theme.colors.lightPurple};
    color: ${(props) => props.theme.colors.mediumPurple};
  }
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
