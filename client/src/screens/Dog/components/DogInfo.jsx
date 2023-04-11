import React from "react";
import styled from "styled-components";
import PurpleButton from "../../../components/PuprleButton";
import ArticleIcon from "@mui/icons-material/Article";
import SwiperComp from "../../../components/Swiper";
import dachshund1 from "../../../assets/dachshund1/dachshund1.webp";
import dachshund2 from "../../../assets/dachshund1/dachshund2.jpg";
import dachshund3 from "../../../assets/dachshund1/dachshund3.jpg";

const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.small};
  border-width: 1px 1px 1px 1px;
  border-color: ${({ theme }) => theme.colors.lightYellow};
  box-shadow: 0px 20px 30px 0px rgba(204, 142, 9, 0.06);
  text-align: start;
  padding: ${({ theme }) => theme.spacing.padding.large};
  gap: 5rem;
`;

const Info = styled.div`
  flex-direction: column;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  & .facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  & .column {
    display: flex;
    flex-direction: column;
  }
  & .row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & h4 {
    width: 35%;
  }
  & p {
    margin: 5px;
  }
`;

const DogInfo = ({ dog }) => {
  return (
    <InfoWrap>
      <SwiperComp
        swiperName="swiper1"
        images={[dachshund1, dachshund2, dachshund3]}
      />
      <Info>
        <h3>Facts about me</h3>
        <div className="facts">
          <div className="column">
            <div className="row">
              <h4>Breed:</h4>
              <p>{dog?.breed}</p>
            </div>
            <div className="row">
              <h4>Color:</h4>
              <p>{dog?.color}</p>
            </div>
            <div className="row">
              <h4>Age:</h4>
              <p>{dog?.age}</p>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <h4>Sex:</h4>
              <p>{dog?.sex}</p>
            </div>
            <div className="row">
              <h4>Size:</h4>
              <p>{dog?.size}</p>
            </div>
            <div className="row">
              <h4>Pet ID:</h4>
              <p>{dog?.petId}</p>
            </div>
          </div>
        </div>
        <PurpleButton
          icon={<ArticleIcon />}
          iconBefore={true}
          title="Apply to adoption"
        />
      </Info>
    </InfoWrap>
  );
};

export default DogInfo;