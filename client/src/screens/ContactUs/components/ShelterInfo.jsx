import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import styled from "styled-components";
import Map from "./Map";
import { Spacer } from "../../../components/Spacer";

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .iconsWrapper {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

    a {
      display: flex;
      background-color: ${(props) => props.theme.colors.darkestPurple};
      border-radius: 34px;
      width: 1rem;
      height: 1rem;
      align-items: center;
      padding: 0.5rem;
      justify-content: center;
      transition: 0.3s ease;
      svg {
        transition: 0.3s ease;
        color: white;
      }
      :hover {
        background-color: ${(props) => props.theme.colors.lightPurple};
        transition: 0.3s ease;
        svg {
          transition: 0.3s ease;
          color: ${(props) => props.theme.colors.darkestPurple};
        }
      }
    }
  }
  .map {
    grid-column: 1/3;
  }
`;

const ShelterInfo = () => {
  return (
    <ContentWrap>
      <div>
        <h4>Adress</h4>
        <p>8880 Santa Monica Blvd Suite Hollywood, CA 90069</p>
      </div>
      <div>
        <h4>Phone</h4>
        <p>+123 456 789 </p>
      </div>
      <div>
        <h4>Email</h4>
        <p>adoptions@help.com</p>
      </div>
      <div>
        <h4>Follow Us</h4>
        <div className="iconsWrapper">
          <a href="">
            <TfiFacebook />
          </a>
          <a href="">
            <TfiTwitterAlt />
          </a>
          <a href="">
            <BsInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="map">
        <Map lat={38.96137} lng={-77.00848} zoom={15} />
      </div>
    </ContentWrap>
  );
};

export default ShelterInfo;
