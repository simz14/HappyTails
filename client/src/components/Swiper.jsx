import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import "swiper/css";

const SwiperWrap = styled.div`
  width: 100%;
  overflow: hidden;
  & .swiper-container {
    width: 100%;
  }
`;

const SwiperComp = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: "2",
      centeredSlides: true,
    });
  }, []);

  return (
    <SwiperWrap>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">1</div>
          <div className="swiper-slide">2</div>
          <div className="swiper-slide">3</div>
          <div className="swiper-slide">4</div>
          <div className="swiper-slide">5</div>{" "}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </SwiperWrap>
  );
};

export default SwiperComp;
