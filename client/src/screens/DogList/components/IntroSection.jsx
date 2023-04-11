import React from "react";
import { Container } from "../../../components/Container";
import PawsBcg from "../../../components/PawsBcg";
import { Spacer } from "../../../components/Spacer";

const IntroSection = () => {
  return (
    <PawsBcg>
      <Container>
        <Spacer size="s" />
        <h1>Available for adoption</h1>
        <p>Here are all dogst looking for new home.</p>
        <Spacer size="s" />
      </Container>
    </PawsBcg>
  );
};

export default IntroSection;
