import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Buttons/Button";
import { Container } from "../Container";
import PopOver from "../PopOver";
import PurpleButton from "../Buttons/PuprleButton";
import MenuDropdown from "./MenuDropdown";
import { FaPaw } from "react-icons/fa";
import Logo from "../../assets/HappyTailsLogoOf.png";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;

  & nav {
    display: flex;
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
    & .lessThen1030 {
      display: flex;
      & svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    & .logoImg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Container>
        <nav>
          <a href="" onClick={() => navigate("/")}>
            <img className="logoImg" src={Logo} alt="logo" />
          </a>
          <div className="navLinks">
            <Button title={"Home"} onClick={() => navigate("/")} />
            <Button title={"Dog list"} onClick={() => navigate("/doglist")} />
            <Button
              title={"How It Works"}
              onClick={() => navigate("/howitworks")}
            />
            <PopOver
              title={"Pages"}
              items={[
                { title: "Donation", href: "/donation" },
                { title: "About us", href: "/aboutus" },
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
              iconBefore={true}
              title={"Adopt Here"}
              onClick={() => navigate("/doglist")}
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
