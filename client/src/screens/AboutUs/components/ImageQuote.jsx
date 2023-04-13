import styled from "styled-components";
import donation6 from "../../../assets/donation/donation6.jpg";
import { Container } from "../../../components/Container";
import { Spacer } from "../../../components/Spacer";
import { FaQuoteLeft } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: white;
  border: 1.5rem solid white;
  border-radius: ${({ theme }) => theme.radius.xLarge};
  position: relative;

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.large};
  }
  span {
    color: ${({ theme }) => theme.colors.mediumPurple};
    font-size: 20px;
    font-weight: 600;
  }
  .content {
    position: relative;
    bottom: 8rem;
    text-align: center;
  }
  .imgWrapper {
    position: relative;
  }
  .quotes {
    background-color: ${({ theme }) => theme.colors.brightYellow};
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: white;
    border: 0.5rem solid white;
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
  }
  @media (max-width: 750px) {
    .quotes {
      width: 3rem;
      height: 3rem;
      font-size: 20px;
    }
  }
`;

const ImageQuote = () => {
  return (
    <Container>
      <Wrapper>
        <div className="content">
          <div className="imgWrapper">
            <img src={donation6} alt="dog"></img>
            <div className="quotes">
              <FaQuoteLeft />
            </div>
          </div>

          <Spacer size="s" />
          <h2>“Dogs are not our whole life, but they make our lives whole.”</h2>
          <span>Catherine, Los Angeles</span>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ImageQuote;
