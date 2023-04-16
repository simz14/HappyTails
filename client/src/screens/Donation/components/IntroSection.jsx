import React from "react";
import PawsBcg from "../../../components/PawsBcg";
import { Container } from "../../../components/Container";
import chihuahuaAlone from "../../../assets/chihuahua/chihuahuaAlone.png";
import shibainuAlone from "../../../assets/shibainu/shibainuAlone.png";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import DonateSection from "./DonateSection";
import SlideUp from "../../../components/SlideUp";

const IntroWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 10rem;
  .imgWrap {
    width: 35%;
    img {
      object-fit: cover;
      height: auto;
      width: 100%;
    }
  }
  @media (max-width: 1030px) {
    padding-bottom: 20rem;
  }

  @media (max-width: 750px) {
    padding-bottom: 45rem;
    flex-direction: column;
    align-items: center;
    .remove {
      display: none;
    }
    .imgWrap {
      width: 70%;
    }
  }
`;

const IntroSection = () => {
  return (
    <PawsBcg>
      <Container>
        <SlideUp>
          <IntroWrap>
            <div className="imgWrap remove">
              <img src={chihuahuaAlone} alt="chihuahua" />
            </div>

            <div className="textWrap">
              <h2>Make a donation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <div className="imgWrap">
              <img src={shibainuAlone} alt="shibainu" />
            </div>
          </IntroWrap>
          <Spacer size="s" />
        </SlideUp>
        <DonateSection />
      </Container>
    </PawsBcg>
  );
};

export default IntroSection;
