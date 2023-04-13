import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContentWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.5s ease;
  cursor: pointer;
  color: ${({ color }) => color};
  &:hover {
    transform: translateY(-8px);
  }
`;
const LearnMoreArrow = ({ color, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <ContentWrap onClick={() => navigate(navigateTo)} color={color}>
      Learn more <FaArrowCircleRight />
    </ContentWrap>
  );
};

LearnMoreArrow.propTypes = {
  color: PropTypes.string,
  navigateTo: PropTypes.string,
};

export default LearnMoreArrow;
