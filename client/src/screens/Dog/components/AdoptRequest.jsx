import React from "react";
import styled from "styled-components";
import dogAdopt from "../../../assets/dogAdopt.png";
import { Container } from "../../../components/Container";
import PurpleButton from "../../../components/Buttons/PuprleButton";
import ArticleIcon from "@mui/icons-material/Article";
import { Spacer } from "../../../components/Spacer";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import SlideUp from "../../../components/SlideUp";

const RequestContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const RequestWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.padding.small};
  & img {
    height: auto;
    width: 50%;
  }
  @media (max-width: 750px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
    & img {
      width: 90%;
    }
    & .text {
      display: flex;
      flex-direction: column;
      & button {
        justify-content: center;
      }
    }
  }
`;

const AdoptRequest = ({ id }) => {
  const navigate = useNavigate();
  return (
    <RequestContainer>
      <Container>
        <Spacer size="s" />
        <SlideUp viewOffset={50}>
          <RequestWrap>
            <img src={dogAdopt} alt="dog" />
            <div className="text">
              <h2>Request an adoption online</h2>
              <p>
                If there is a dog you fell in love with, don't hesitate to
                contact us or apply for adoption.
              </p>
              <PurpleButton
                icon={<ArticleIcon />}
                iconBefore={true}
                title="Apply to adoption"
                onClick={() => navigate(`/adoption/${id}`)}
              />
            </div>
          </RequestWrap>
        </SlideUp>

        <Spacer size="s" />
      </Container>
    </RequestContainer>
  );
};

AdoptRequest.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AdoptRequest;
