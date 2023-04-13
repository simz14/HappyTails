import React from "react";
import styled from "styled-components";
import bcgPaws from "../assets/bcgPaws.png";
import PropTypes from "prop-types";

const PawsBcgWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgPink};
  display: flex;
  text-align: center;
  position: relative;
  & .paws {
    object-fit: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
  }
`;

const PawsBcg = ({ children }) => {
  return (
    <PawsBcgWrap>
      <img className="paws" src={bcgPaws} alt="paws" /> {children}
    </PawsBcgWrap>
  );
};

PawsBcg.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PawsBcg;
