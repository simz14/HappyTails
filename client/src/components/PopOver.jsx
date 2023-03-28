import React from "react";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styled from "styled-components";

const PopOverWrapper = styled.div`
  display: flex;
  align-items: center;
  & .arrowIcon {
    width: 0.5rem;
  }
  & .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {
    background-color: red;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${(props) => props.theme.colors.darkestPurple};
    font-size: ${(props) => props.theme.typography.size.small};
    font-weight: ${(props) => props.theme.typography.weight.medium};
    padding: ${(props) => props.theme.spacing.padding.small};
    border-radius: ${(props) => props.theme.radius.xSmall};
    cursor: pointer;
    font-family: "Inter", sans-serif;
    text-transform: none;
    letter-spacing: none;
    line-height: none;
    margin: 0 10px;
  }
`;

const PopOver = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <PopOverWrapper>
      <StyledButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<BsChevronDown className="arrowIcon" />}
      >
        {title}
      </StyledButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items.map((item) => {
          return (
            <MenuItem
              key={item.title}
              component={Link}
              href={item.href}
              onClick={handleClose}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </PopOverWrapper>
  );
};

export default PopOver;
