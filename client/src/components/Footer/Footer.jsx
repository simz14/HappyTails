import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Logo from "../../assets/HappyTailsLogoOf.png";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const FooterWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  & .gridsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContentWrapper>
          <div className="gridsWrapper">
            <div>
              <img src={Logo} alt="logo" />
              <a href="#">
                <HiLocationMarker />
                <span>8880 Santa Monica Blvd Suite Hollywood, CA</span>
              </a>
              <a href="#">
                <HiPhone />
                <span>+123 456 789</span>
              </a>
              <a href="#">
                <HiMail />
                <span>help@support.com</span>
              </a>
            </div>
            <a href="#">
              <h3>Navigation</h3>
              <span>How it works</span>
              <span>Donation</span>
              <span>Dog list</span>
              <span>Volunteer</span>
            </a>
            <a href="#">
              <h3>Our Organization</h3>
              <span>About Us</span>
              <span>Our Team</span>
              <span>FAQ's</span>
              <span>Contact</span>
            </a>
            <a href="#">
              <h3>Information</h3>
              <span>Sitemap</span>
              <span>Privacy policy</span>
              <span>Terms of services</span>
              <span>Cookies</span>
            </a>
            <div>
              <h3>Subscribe to our newsletter</h3>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
