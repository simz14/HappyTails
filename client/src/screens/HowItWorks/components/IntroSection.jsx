import React from "react";
import { Container } from "../../../components/Container";
import PawsBcg from "../../../components/PawsBcg";
import { Spacer } from "../../../components/Spacer";

const IntroSection = () => {
  return (
    <PawsBcg>
      <Container>
        <Spacer size="s" />
        <h1>How it works</h1>
        <p>
          Adopting a dog is not just bringing home a pet, it's welcoming a new
          member into your family. It takes patience, love, and commitment to
          provide a safe and happy home for your furry friend, but the
          unconditional love and joy they bring into your life is worth every
          effort.
        </p>
        <Spacer size="s" />
      </Container>
    </PawsBcg>
  );
};

export default IntroSection;
