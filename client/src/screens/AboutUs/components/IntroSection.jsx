import { Container } from "@mui/material";
import PawsBcg from "../../../components/PawsBcg";
import { Spacer } from "../../../components/Spacer";
import ImageQuote from "./ImageQuote";
import styled from "styled-components";
import SlideUp from "../../../components/SlideUp";

const IntroWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const IntroSection = () => {
  return (
    <PawsBcg>
      <Container>
        <SlideUp>
          <IntroWrapper>
            <Spacer size="s" />
            <h1>We're pet lovers making a difference</h1>
            <p>
              "The dogs may be homeless, but in this shelter, they are not
              without a home. It's the people working here who provide them with
              love, care, and a second chance at a better life."
            </p>
            <Spacer size="s" />
          </IntroWrapper>
        </SlideUp>
      </Container>
    </PawsBcg>
  );
};

export default IntroSection;
