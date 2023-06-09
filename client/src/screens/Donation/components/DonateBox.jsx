import React, { useState } from "react";
import styled from "styled-components";
import PetsIcon from "@mui/icons-material/Pets";
import LightPurpleButton from "../../../components/Buttons/LightPurpleButton";
import DonationForm from "./DonationForm";
import PropTypes from "prop-types";

const BoxWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.large};
  padding: ${({ theme }) => theme.spacing.padding.xLarge};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  transition: 0.5s ease;
  gap: 1rem;
  .pawBox {
    width: 5rem;
    height: 5rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -25%;
    border: 5px solid white;
    background-color: ${({ color }) => {
      switch (color) {
        case 1:
          return "#616fe2";
        case 2:
          return "#85bf83";
        case 3:
          return "#ffb20c";
        case 4:
          return "#322258";
        default:
          return "white";
      }
    }};
    svg {
      color: white;
      width: 3rem;
      height: 3rem;
    }
  }
  :hover {
    transition: 0.5s ease;
    border-bottom: 5px solid ${({ theme }) => theme.colors.brightYellow};
  }
`;

const DonateBox = ({ color, amount }) => {
  const [open, setOpen] = useState(false);
  return (
    <BoxWrap color={color}>
      <div className="pawBox">
        <PetsIcon />
      </div>
      <h2>{amount}$</h2>
      <LightPurpleButton onClick={() => setOpen(true)} title="Donate" />
      <DonationForm amount={amount} open={open} setOpen={setOpen} />
    </BoxWrap>
  );
};

DonateBox.propTypes = {
  color: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default DonateBox;
