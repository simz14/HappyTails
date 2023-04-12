import React from "react";
import styled from "styled-components";
import DonateBox from "./DonateBox";

const DonateBoxWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  top: 70%;
  position: absolute;
  z-index: 9;
  width: 100%;
  left: 0;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr 1fr;
    top: 40%;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    top: 35%;
  }
`;

const DonateSection = () => {
  return (
    <DonateBoxWrap>
      <DonateBox color={1} amount={50} />
      <DonateBox color={2} amount={100} />
      <DonateBox color={3} amount={250} />
      <DonateBox color={4} amount={500} />
    </DonateBoxWrap>
  );
};

export default DonateSection;
