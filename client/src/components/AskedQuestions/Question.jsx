import { Collapse, List, ListItemButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const QuestionWrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
  width: 100%;
  .MuiButtonBase-root {
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.padding.large};
  }
  .subText {
    padding: 0 0 0 1%;
  }
  span {
    color: ${({ theme }) => theme.colors.darkestPurple};
    font-family: ${({ theme }) => theme.typography.family.extra};
    font-size: ${({ theme }) => theme.typography.size.xLarge};
    font-weight: ${({ theme }) => theme.typography.weight.xThick};
  }
  svg {
    color: ${({ theme }) => theme.colors.brightYellow};
  }
`;

const Question = ({ subText, title }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <QuestionWrap>
      <ListItemButton onClick={handleClick}>
        <span>{title}</span>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className="subText">
            <p>{subText}</p>
          </ListItemButton>
        </List>
      </Collapse>
    </QuestionWrap>
  );
};

Question.propTypes = {
  subText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Question;
