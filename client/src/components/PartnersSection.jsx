import styled from "styled-components";
import { Container } from "./Container";
import partner1 from "../assets/partners/partner1.png";
import partner2 from "../assets/partners/partner2.png";
import partner3 from "../assets/partners/partner3.png";
import partner4 from "../assets/partners/partner4.png";
import { Spacer } from "./Spacer";

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
`;

const PartnersWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .partnerWrap {
    display: flex;
    gap: 5%;
    img {
      border-radius: ${({ theme }) => theme.radius.large};
    }
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const OurPartnersSection = () => {
  return (
    <ContentContainer>
      <Container>
        <Spacer size="s" />
        <PartnersWrap>
          <div className="partnerWrap">
            <div>
              <img src={partner1} alt="logo" />
            </div>
            <div>
              <h4>Salford & Co.</h4>
              <p>
                Lorem ipsum dolor sit amet, consect adiping elit. Ut elit
                tellus.
              </p>
            </div>
          </div>
          <div className="partnerWrap">
            <div>
              <img src={partner2} alt="partner" />
            </div>
            <div>
              <h4>Liceria & Co.</h4>
              <p>
                Lorem ipsum dolor sit amet, consect adiping elit. Ut elit
                tellus.
              </p>
            </div>
          </div>
          <div className="partnerWrap">
            <div>
              <img src={partner3} alt="partner" />
            </div>
            <div>
              <h4>Hanover and Tyke</h4>
              <p>
                Lorem ipsum dolor sit amet, consect adiping elit. Ut elit
                tellus.
              </p>
            </div>
          </div>
          <div className="partnerWrap">
            <div>
              <img src={partner4} alt="partner" />
            </div>
            <div>
              <h4>Thynk Unlimited</h4>
              <p>
                Lorem ipsum dolor sit amet, consect adiping elit. Ut elit
                tellus.
              </p>
            </div>
          </div>
        </PartnersWrap>
        <Spacer size="s" />
      </Container>
    </ContentContainer>
  );
};

export default OurPartnersSection;
