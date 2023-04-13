import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Swiper, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import PropTypes from "prop-types";

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
    color: ${({ theme }) => theme.colors.brightYellow};
    background-color: white;
    padding: 1rem 1.2rem;
    border-radius: 100px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.small};
    max-height: ${({ maxHeight }) => maxHeight};
  }
`;

const SwiperComp = ({ maxHeight, images, swiperName }) => {
  useEffect(() => {
    const swiper = new Swiper(`.${swiperName}`, {
      loop: true,
      slidesPerView: "1",
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
      },

      modules: [Navigation, Autoplay],
    });
  }, []);

  return (
    <SwiperWrap maxHeight={maxHeight} swiperName={swiperName}>
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

SwiperComp.propTypes = {
  maxHeight: PropTypes.string.isRequired,
  images: PropTypes.array,
  swiperName: PropTypes.string.isRequired,
};

export default SwiperComp;
