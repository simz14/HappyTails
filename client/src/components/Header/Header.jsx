import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/HappyTailsLogoOf.png";
import PopOver from "../PopOver";

const HeaderWrapper = styled.div`
  & nav {
    display: flex;
    justify-content: space-between;
    min-height: 5rem;
    align-items: center;
    position: relative;
  }

  & .logoImg {
    width: 4rem;
    height: 4rem;
  }
  & .navLinks {
    display: flex;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <nav>
        <a href="/">
          <img className="logoImg" src={Logo} alt="logo" />
        </a>

        <div className="navLinks">
          <PopOver
            title={"Dog List"}
            items={[
              { title: "Dog List", href: "/doglist" },
              { title: "Dog Profile", href: "/dogprofile" },
            ]}
          />
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/")}>How it works</button>
          <button onClick={() => navigate("/")}>Volunteer</button>
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
        <div>Free consultation</div>
        <button>Adopt here</button>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
