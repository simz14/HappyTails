import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import { Container } from "../Container";
import PopOver from "../PopOver";
import PurpleButton from "../PuprleButton";
import MenuDropdown from "./MenuDropdown";
import { FaPaw } from "react-icons/fa";
import Logo from "../../assets/HappyTailsLogoOf.png";

const HeaderWrapper = styled.div`
  & nav {
    display: flex;
    min-height: 5rem;
    align-items: center;
    position: relative;
    width: 100%;
    justify-content: space-between;
  }

  & .logoImg {
    width: 4rem;
    height: 4rem;
  }
  & .navLinks {
    display: flex;
    margin: 0 1.5rem;
  }

  & .phoneConsultationsWrap {
    display: flex;
    gap: 1rem;
    & .freeConsultations {
      & p {
        color: ${(props) => props.theme.colors.darkestPurple};
        font-size: ${(props) => props.theme.typography.size.small};
        font-weight: ${(props) => props.theme.typography.weight.medium};
        margin: 0;
      }
      & .phoneNumber {
        color: ${(props) => props.theme.colors.darkestPurple};
        font-size: ${(props) => props.theme.typography.size.large};
        font-weight: ${(props) => props.theme.typography.weight.xThick};
        margin: 0;
      }
    }
  }
  & .lessThen1030 {
    display: none;
  }

  @media (max-width: 1030px) {
    & .navLinks {
      display: none;
    }
    & .lessThen1030 {
      display: flex;
      & svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
  @media (max-width: 510px) {
    & .phoneConsultationsWrap {
      display: none;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Container>
        <nav>
          <a href="/">
            <img className="logoImg" src={Logo} alt="logo" />
          </a>
          <div className="navLinks">
            <Button title={"Home"} onClick={() => navigate("/")} />{" "}
            <PopOver
              title={"Dog List"}
              items={[
                { title: "Dog List", href: "/doglist" },
                { title: "Dog Profile", href: "/dogprofile" },
              ]}
            />
            <Button title={"How It Works"} onClick={() => navigate("/")} />
            <Button title={"Volunteer"} onClick={() => navigate("/")} />
            <PopOver
              title={"Pages"}
              items={[
                { title: "Donation", href: "/donations" },
                { title: "About us", href: "/aboutus" },
                { title: "FAQ", href: "/faq" },
                { title: "Team", href: "/team" },
                { title: "Contact Us", href: "/contactus" },
              ]}
            />
          </div>
          <div className="phoneConsultationsWrap">
            <div className="freeConsultations">
              <p>Free consultation</p>
              <p className="phoneNumber">+123 456 789</p>
            </div>
            <PurpleButton
              icon={<FaPaw />}
              title={"Adopt Here"}
              onClick={() => navigate("/adoption")}
            />
          </div>
          <div className="lessThen1030">
            <MenuDropdown />
          </div>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
