import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Spacer } from "../../../components/Spacer";
import donation3 from "../../../assets/donation/donation3.jpg";
import CounterWidget from "../../../components/CounterWidget";
import SlideUp from "../../../components/SlideUp";
import { Slide } from "@mui/material";

const DescriptionWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  .quote {
    padding: 0 1rem;
    border-left: 5px solid ${({ theme }) => theme.colors.mediumPurple};
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    p {
      margin: 0;
    }
  }
  img {
    border-radius: ${({ theme }) => theme.radius.small};
    margin-bottom: 1rem;
  }
`;

const DescriptionSection = () => {
  return (
    <DescriptionWrap>
      <Container>
        <Spacer size="s" />
        <SlideUp viewOffset={100}>
          <h2>Let’s donate to save more dogs</h2>
        </SlideUp>

        <p>
          Donating to a dog shelter can help provide essential resources and
          care to dogs in need. Your donation can support the shelter's efforts
          to provide food, shelter, medical treatment, and love to dogs who may
          have been abandoned or mistreated. With your donation, the shelter can
          continue its mission to rescue dogs, rehabilitate them, and find them
          forever homes. Every dollar counts, and even a small donation can make
          a big difference in a dog's life. Your donation can also help educate
          the community on responsible pet ownership and promote adoption.
        </p>

        <div className="quote">
          <span>
            "Every dog deserves a loving home, and we're here to help make that
            happen."
          </span>
          <div>
            <h4>Lars Peeters</h4>
            <p>Founder</p>
          </div>
        </div>
        <img src={donation3} alt="donation" />
        <CounterWidget />
        <Spacer size="s" />
      </Container>
    </DescriptionWrap>
  );
};
export default DescriptionSection;
