import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import styled from "styled-components";

const ConditionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
  & svg {
    color: ${({ theme }) => theme.colors.mediumPurple};
  }
`;

const Condition = ({ check, title }) => {
  return (
    <ConditionWrap>
      {check ? <CheckCircleIcon /> : <CancelIcon />}
      <h4>{title}</h4>
    </ConditionWrap>
  );
};

export default Condition;
