import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Logo from "../../assets/HappyTailsLogoOf.png";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { InputAdornment, TextField } from "@mui/material";
import PurpleButton from "../PuprleButton";

const FooterWrapper = styled.div`
  position: relative;
  background-color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  & .sectionsWrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1030px) {
      justify-content: flex-start;
    }
    @media (max-width: 750px) {
      flex-direction: column;
    }
    & img {
      height: 8rem;
      width: 8rem;
    }
    & h3 {
      font-family: ${(props) => props.theme.typography.family.extra};
      color: ${(props) => props.theme.colors.darkestPurple};
      font-size: ${(props) => props.theme.typography.size.small};
    }
    & ul {
      list-style-type: none;
      padding: 0;
    }

    & a {
      font-size: ${(props) => props.theme.typography.size.xSmall};
      line-height: 1.5em;
      text-decoration: none;
    }
    & span {
      color: ${(props) => props.theme.colors.lightGrey};
      transition: 0.3s ease;
      &:hover {
        transition: 0.3s ease;
        color: ${(props) => props.theme.colors.mediumPurple};
      }
    }

    & .logoLinks {
      display: flex;
      flex-direction: column;
      width: 26%;

      & ul {
        padding-right: 2rem;
        gap: 1rem;
        display: grid;
      }
      a {
        display: flex;
        align-items: center;

        & span,
        svg {
          transition: 0.3s ease;
        }
        &:hover {
          & span,
          svg {
            transition: 0.3s ease;
            color: ${(props) => props.theme.colors.mediumPurple};
          }
        }
      }
      & svg {
        color: ${(props) => props.theme.colors.darkestPurple};
        width: 1.5rem;
        height: 1.5rem;
      }

      @media (max-width: 1030px) {
        width: 40%;
      }
    }
    & .subscription {
      width: 26%;

      & .MuiInputBase-root,
      .MuiButtonBase-root {
        padding: 0;
        border-radius: 10px;
        margin-bottom: 16px;
      }
      & .iconsWrapper {
        display: flex;
        gap: 0.5rem;

        & a {
          display: flex;
          background-color: ${(props) => props.theme.colors.darkestPurple};
          border-radius: 34px;
          width: 1rem;
          height: 1rem;
          align-items: center;
          padding: 0.5rem;
          justify-content: center;
          transition: 0.3s ease;
          & svg {
            transition: 0.3s ease;
            color: white;
          }
          &:hover {
            background-color: ${(props) => props.theme.colors.lightPurple};
            transition: 0.3s ease;
            & svg {
              transition: 0.3s ease;
              color: ${(props) => props.theme.colors.darkestPurple};
            }
          }
        }
      }
      @media (max-width: 750px) {
        width: 100%;
        & .MuiFormControl-root {
          width: 100%;
        }
      }
    }

    & .section {
      width: 16%;
    }

    @media (max-width: 1030px) {
      & .first,
      .second,
      .thirt {
        width: 30%;
      }
    }
  }
`;
const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <FooterWrapper>
      <Container>
        <ContentWrapper>
          <div className="sectionsWrapper">
            <div className="logoLinks">
              <img src={Logo} alt="logo" />
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <HiLocationMarker />
                    </span>

                    <span>8880 Santa Monica Blvd Suite Hollywood, CA</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <HiPhone />
                    </span>

                    <span>+123 456 789</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <HiMail />
                    </span>
                    <span>help@support.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="section first">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="#">
                    <span>How it works</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Donation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Dog list</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Volunteer</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="section second">
              <h3>Our Organization</h3>
              <ul>
                <li>
                  <a href="#">
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Our Team</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>FAQ's</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="section thirt">
              <h3>Information</h3>
              <ul>
                <li>
                  <a href="#">
                    <span>Sitemap</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Privacy policy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Terms of services</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Cookies</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="subscription">
              <h3>Subscribe to our newsletter</h3>
              <TextField
                className="textField"
                hiddenLabel
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PurpleButton
                        inputButton={true}
                        iconBefore={true}
                        icon={<RiSendPlaneFill />}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <div className="iconsWrapper">
                <a href="">
                  <TfiFacebook />
                </a>
                <a href="">
                  <TfiTwitterAlt />
                </a>
                <a href="">
                  <BsInstagram />
                </a>
                <a href="">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
