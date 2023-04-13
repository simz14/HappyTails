import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
  gap: 1rem;
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
  transition: 0.5s ease;

  & .icon {
    & svg {
      display: flex;
      width: 1rem;
      height: 1rem;
    }
  }

  &:hover {
    transition: 0.5s ease;
    box-shadow: 0px 0px 0px 10px rgba(96, 110, 225, 0.16);
  }
`;

const PurpleButton = ({
  icon,
  title,
  onClick,
  inputButton,
  iconBefore,
  iconAfter,
}) => {
  return (
    <StyledButton inputButton={inputButton} onClick={onClick}>
      {iconBefore && icon && <div className="icon">{icon}</div>}
      {title && <span>{title}</span>}
      {iconAfter && icon && <div className="icon">{icon}</div>}
    </StyledButton>
  );
};

PurpleButton.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  onClick: PropTypes.func,
  inputButton: PropTypes.bool,
  iconBefore: PropTypes.bool,
  iconAfter: PropTypes.bool,
};

export default PurpleButton;
