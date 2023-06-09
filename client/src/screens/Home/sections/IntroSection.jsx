import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";
import PurpleButton from "../../../components/Buttons/PuprleButton";
import happyWomenImg from "../../../assets/womenHappyDog.png";
import OptionsSection from "./OptionsSections";
import { Spacer } from "../../../components/Spacer";
import { useNavigate } from "react-router";
import SlideUp from "../../../components/SlideUp";

const BcgImage = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-image: url(${happyWomenImg});
  background-position: 52vw -170px;
  background-repeat: no-repeat;
  @media (max-width: 1030px) {
    background-position: 50% 50%;
    background-size: 509px auto;
  }
  @media (max-width: 750px) {
    background-position: 0% 25%;
    background-size: contain;
  }
`;
const HomeWrapper = styled.div`
  position: relative;
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0em 0em 23em 0em;
  background-color: ${(props) => props.theme.colors.lightPink};
  & .introText {
    max-width: 2000px;
    padding: 0 15%;
    z-index: 99;
    & .quote {
      font-family: ${(props) => props.theme.typography.family.basic};
      font-size: ${(props) => props.theme.typography.size.xLarge};
      margin-bottom: 3rem;
      color: ${(props) => props.theme.colors.lightGrey};
    }
    & .content {
      width: 50%;
    }
  }
  @media (max-width: 1030px) {
    padding: 0em 0em 40em 0em;
    & .introText {
      & .content {
        width: 100%;
        display: grid;
        justify-items: center;
        text-align: center;
      }
      & .quote {
        font-size: ${(props) => props.theme.typography.size.large};
      }
    }
  }
  @media (max-width: 750px) {
    padding: 0em 0em 40em 0em;
    & .introText {
      & .content {
        width: 100%;
        display: grid;
        text-align: center;
        justify-items: normal;
      }
      & button {
        justify-content: center;
      }
    }
  }
`;

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <IntroWrapper>
        <div className="introText">
          <Spacer size="s" />
          <SlideUp>
            <div className="content">
              <h1>Adoption is a loving option</h1>
              <p className="quote">
                Adopting a dog is a journey of growth, love, and patience. It's
                not always easy, but the reward of a loyal companion who will
                always be there for you is priceless.
              </p>
              <PurpleButton
                icon={<FaArrowCircleRight />}
                iconAfter={true}
                title={"Contact Us"}
                onClick={() => navigate("/contactus")}
              />
            </div>
          </SlideUp>
        </div>
        <BcgImage></BcgImage>
      </IntroWrapper>
      <OptionsSection />
    </HomeWrapper>
  );
};

export default IntroSection;
