import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import happyWomenImg from "../../assets/womenHappyDog.png";
import PurpleButton from "../../components/PuprleButton";

const BcgImage = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-image: url(${happyWomenImg});
  background-position: 52vw -170px;
  background-repeat: no-repeat;
`;
const HomeWrapper = styled.div`
  position: relative;
`;

const IntroWrapper = styled.div`
  left: 0;
  padding: 0em 0em 23em 0em;
  background-color: ${(props) => props.theme.colors.lightPink};
  & .introText {
    max-width: 600px;
    & h1 {
      font-family: ${(props) => props.theme.typography.family.extra};
      font-size: 67px;
      color: ${(props) => props.theme.colors.darkestPurple};
    }
    & .qoute {
      font-family: ${(props) => props.theme.typography.family.basic};
      font-size: ${(props) => props.theme.typography.size.xLarge};
      margin-bottom: 3rem;
    }
  }
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <IntroWrapper>
          <div className="introText">
            <h1>Adoption is a loving option</h1>
            <p className="qoute">
              Adopting a dog is a journey of growth, love, and patience. It's
              not always easy, but the reward of a loyal companion who will
              always be there for you is priceless.
            </p>
            <PurpleButton title={"Contact Us"} />
          </div>
          <BcgImage></BcgImage>
        </IntroWrapper>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
