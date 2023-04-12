import React from "react";
import styled from "styled-components";
import SwiperComp from "../../../components/Swiper";
import donation1 from "../../../assets/donation/donation1.jpg";
import donation2 from "../../../assets/donation/donation2.jpg";
import donation3 from "../../../assets/donation/donation3.jpg";
import donation4 from "../../../assets/donation/donation4.jpg";
import { Container } from "../../../components/Container";
import { Spacer } from "../../../components/Spacer";

const GallerySection = () => {
  return (
    <Container>
      <Spacer size="s" />
      <SwiperComp
        maxHeight="35rem"
        swiperName={"gallery"}
        images={[donation1, donation2, donation3, donation4]}
      />
      <Spacer size="s" />
    </Container>
  );
};

export default GallerySection;
