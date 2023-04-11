import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SwiperWrap = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;

  ${({ swiperName }) =>
    swiperName
      ? `.${swiperName} {height:100%;width:100%;position:relative}`
      : null}

  .swiper-button-next,.swiper-button-prev {
    color: #edebe7;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: medium;
    font-weight: 600;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.small};
    max-height: 20rem;
  }
`;

const SwiperComp = ({ images, swiperName }) => {
  useEffect(() => {
    const swiper = new Swiper(`.${swiperName}`, {
      loop: true,
      slidesPerView: "1",
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Navigation],
    });
  }, []);

  return (
    <SwiperWrap swiperName={swiperName}>
      <div className={swiperName}>
        <div className="swiper-wrapper">
          {images?.map((image) => {
            return (
              <div key={image} className="swiper-slide">
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </SwiperWrap>
  );
};

export default SwiperComp;
