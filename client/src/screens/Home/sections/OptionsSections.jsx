import { Container } from "../../../components/Container";
import React from "react";
import styled from "styled-components";
import adoptDog from "../../../assets/adoptDog.png";
import rehomeDog from "../../../assets/rehomeDog.png";
import donation from "../../../assets/donation.png";
import { useNavigate } from "react-router";

const OptionsWrapper = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.radius.small};
  border: 1px solid ${(props) => props.theme.colors.lightYellow};
  box-shadow: rgba(204, 142, 10, 0.12) 0px 10px 30px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  bottom: 8rem;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    bottom: 15rem;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  cursor: pointer;
  & img {
    width: 25%;
  }
  & span {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`;

const OptionsSection = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <OptionsWrapper>
        <Option
          onClick={() => {
            navigate("/doglist");
          }}
        >
          <img src={adoptDog} alt="adopt" />
          <h3>Want to adopt a dog?</h3>
          <span>
            Here you will find the most adorable dog to give a wonderful new
            home.
          </span>
        </Option>
        <Option
          onClick={() => {
            navigate("/rehome");
          }}
        >
          <img src={rehomeDog} alt="rehome" />
          <h3>Need to rehome a dog?</h3>
          <span>We can help with finding the best home for you dog.</span>
        </Option>
        <Option
          onClick={() => {
            navigate("/donate");
          }}
        >
          <img src={donation} alt="donation" />
          <h3>Make a donation.</h3>
          <span>
            Help us save our four-legged friends all around the world.
          </span>
        </Option>
      </OptionsWrapper>
    </Container>
  );
};

export default OptionsSection;
