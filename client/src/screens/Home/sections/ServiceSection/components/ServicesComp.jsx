import React from "react";
import styled from "styled-components";
import threeDogs from "../../../../../assets/threeDogs.png";
import groupIcon from "../../../../../assets/group-icon.png";
import qualityIcon from "../../../../../assets/quality-icon.png";
import CounterWidget from "../../../../../components/CounterWidget";
import happyDogsVideo from "../../../../../assets/happyDogsVideo.mp4";
import { Spacer } from "../../../../../components/Spacer";

const ServicesSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & .threeDogs,
  .group {
    height: auto;
    max-width: 40%;
    min-width: 16rem;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

const ReasonsWrapper = styled.div`
  display: grid;
  gap: 1rem;

  & .first {
    border-bottom: solid ${(props) => props.theme.colors.lightBlue};
    border-bottom-style: dashed;
  }
  & .reason {
    display: flex;
    align-items: center;
    gap: 5%;
    padding: 1rem 0;
    & img {
      height: 100%;
      width: 10%;
      object-fit: contain;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      text-align: center;
      & .icon {
        width: 20%;
      }
    }
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  & video {
    width: 90%;
    min-height: 14rem;
    object-fit: cover;
    height: auto;
    border: 1rem solid white;
    border-radius: ${(props) => props.theme.radius.large};
  }
`;

const ServicesComp = () => {
  return (
    <>
      {" "}
      <Spacer size="s" />
      <ServicesSectionContainer>
        <img className="threeDogs" src={threeDogs} alt="dogs" />
        <ReasonsWrapper>
          <h2>Best service to breeds your loved dogs</h2>
          <div className="reason first">
            <img className="icon" src={groupIcon} alt="group" />
            <div>
              <h3>Professional Breeder</h3>
              <p>We provide consultations from dog breeders.</p>
            </div>
          </div>
          <div className="reason">
            <img className="icon" src={qualityIcon} alt="quality" />
            <div>
              <h3>Highest Quality</h3>
              <p>We provide the highest quality service.</p>
            </div>
          </div>{" "}
          <Spacer size="s" />
        </ReasonsWrapper>
      </ServicesSectionContainer>
      <CounterWidget />
      <VideoWrapper>
        <video
          className="happyDogVideo"
          src={happyDogsVideo}
          autoPlay
          muted="muted"
          loop
        ></video>
      </VideoWrapper>
    </>
  );
};

export default ServicesComp;
