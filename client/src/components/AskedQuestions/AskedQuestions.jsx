import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Spacer } from "../Spacer";
import { List } from "@mui/material";
import Question from "./Question";
import PropTypes from "prop-types";
import SlideUp from "../SlideUp";

const AskedQuestionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.bottomBorder {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
  }
  .intro {
    text-align: center;
  }
`;

const AskedQuestions = ({ hasBottomBorder }) => {
  return (
    <Container>
      <Spacer size="s" />
      <SlideUp viewOffset={100}>
        <AskedQuestionsWrap className={hasBottomBorder && "bottomBorder"}>
          <div className="intro">
            <h2>Frequently asked questions</h2>
            <p>Here are questions people often ask.</p>
          </div>

          <List sx={{ maxWidth: 450 }} component="nav">
            <Question
              subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              title="What is the adoption fee?"
            />
            <Question
              subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              title="What is the adoption process?"
            />
            <Question
              subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              title="When are we open for adoptions / visitors?"
            />
            <Question
              subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              title="Can i come play with the dogs?"
            />
            <Question
              subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              title="How many dogs do you have?"
            />
          </List>
          <Spacer size="s" />
        </AskedQuestionsWrap>
      </SlideUp>
    </Container>
  );
};

AskedQuestions.propTypes = {
  hasBottomBorder: PropTypes.bool,
};

export default AskedQuestions;
