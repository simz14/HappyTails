import React from "react";
import { Container } from "../../../components/Container";
import { Spacer } from "../../../components/Spacer";
import styled from "styled-components";
import donation1 from "../../../assets/donation/donation1.jpg";
import donation5 from "../../../assets/donation/donation5.jpg";

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;

  .images {
    position: relative;
    .fullImg {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radius.large};
    }
    .smallImg {
      border-radius: ${({ theme }) => theme.radius.large};
      width: 45%;
      height: 200px;
      object-fit: cover;
      border: 8px solid white;
      position: absolute;
      top: -10%;
      right: -10%;
      @media (max-width: 1030px) {
        right: 0;
      }
    }
  }

  .step {
    display: flex;
    gap: 1rem;
    .num {
      padding: ${({ theme }) => theme.spacing.padding.large};
      border-radius: ${({ theme }) => theme.radius.small};
      display: flex;
      align-items: center;
      height: 2rem;
      width: 2rem;
      justify-content: center;
      h2 {
        color: white;
      }
    }
    .green {
      background-color: ${({ theme }) => theme.colors.green};
    }
    .yellow {
      background-color: ${({ theme }) => theme.colors.brightYellow};
    }
  }
  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`;

const StepsSection = () => {
  return (
    <Container>
      <Spacer size="s" />
      <ContentWrap>
        <div className="images">
          <img className="fullImg" src={donation1} alt="adoption" />
          <img className="smallImg" src={donation5} alt="adoption" />
        </div>
        <div className="steps">
          <div className="step">
            <div className="num yellow">
              <h2>01.</h2>
            </div>
            <div>
              <h3>Browse pet profiles</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et at purus in
                pellentesque donec sit.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="num green">
              <h2>02.</h2>
            </div>
            <div>
              <h3>Join & message with Guardians</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et at purus in
                pellentesque donec sit.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="num yellow">
              <h2>03.</h2>
            </div>
            <div>
              <h3>Join & message with Guardians</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et at purus in
                pellentesque donec sit.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="num green">
              <h2>04.</h2>
            </div>
            <div>
              <h3>Join & message with Guardians</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et at purus in
                pellentesque donec sit.
              </p>
            </div>
          </div>
        </div>
      </ContentWrap>
      <Spacer size="s" />
    </Container>
  );
};

export default StepsSection;
