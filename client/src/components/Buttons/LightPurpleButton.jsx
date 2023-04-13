import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkestPurple};
  border: none;
  border-radius: ${({ theme }) => theme.radius.small};
  font-size: ${({ theme }) => theme.typography.size.xLarge};
  padding: ${({ theme }) => theme.spacing.padding.small};
  font-weight: ${({ theme }) => theme.typography.weight.xThick};
  width: 100%;
  transition: 0.5s ease;
  cursor: pointer;
  :hover {
    transition: 0.5s ease;
    background-color: ${({ theme }) => theme.colors.darkestPurple};
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

const LightPurpleButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

LightPurpleButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default LightPurpleButton;
