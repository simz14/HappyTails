import React from "react";
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import HowItWorksSection from "./components/HowItWorksSection";
import ServicesComp from "./components/ServicesComp";

const ServicesSectionWrapp = styled.div`
  background-color: ${(props) => props.theme.colors.lightBcgBlue};
  & .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

const ServicesSection = () => {
  return (
    <ServicesSectionWrapp>
      <Container>
        <div className="wrap">
          <ServicesComp />
          <HowItWorksSection />
        </div>
      </Container>
    </ServicesSectionWrapp>
  );
};

export default ServicesSection;
