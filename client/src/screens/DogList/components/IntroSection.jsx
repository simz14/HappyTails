import React from "react";
import { Container } from "../../../components/Container";
import PawsBcg from "../../../components/PawsBcg";
import { Spacer } from "../../../components/Spacer";
import SlideUp from "../../../components/SlideUp";

const IntroSection = () => {
  return (
    <PawsBcg>
      <Container>
        <Spacer size="s" />
        <SlideUp>
          <h1>Available for adoption</h1>
          <p>Here are all dogst looking for new home.</p>
        </SlideUp>

        <Spacer size="s" />
      </Container>
    </PawsBcg>
  );
};

export default IntroSection;
