import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { HiMenu } from "react-icons/hi";
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Popover,
} from "@mui/material";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const MenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const [openDogList, setOpenDogList] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const ref = useRef(null);

  const navigate = useNavigate();

  const id = 1;
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickMenuItem = (navigateTo) => {
    handleClose();
    navigate(navigateTo);
  };

  const handleClickCollapseDogList = () => {
    setOpenDogList((prev) => !prev);
  };
  const handleClickCollapsePages = () => {
    setOpenPages((prev) => !prev);
  };

  return (
    <div ref={ref}>
      {open ? (
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            zIndex: "999",
            backgroundColor: "#eeeffc",
            borderRadius: "5px",
            color: "#322258",
            ":hover": {
              backgroundColor: "#eeeffc",
              color: "#322258",
            },
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <IoClose />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{
            backgroundColor: "#eeeffc",
            borderRadius: "5px",
            color: "#322258",
            ":hover": {
              backgroundColor: "#eeeffc",
              color: "#322258",
            },
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <HiMenu />
        </IconButton>
      )}

      <Popover
        hideBackdrop
        id={id}
        open={open}
        anchorEl={ref.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ListItemButton onClick={() => handleClickMenuItem("/")}>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton onClick={() => handleClickMenuItem("/doglist")}>
          <ListItemText primary="Dog List" />
        </ListItemButton>

        <ListItemButton onClick={() => handleClickMenuItem("/")}>
          <ListItemText primary="How It Works" />
        </ListItemButton>

        <ListItemButton onClick={handleClickCollapsePages}>
          <ListItemText primary="Pages" />
          {openPages ? <BsChevronUp /> : <BsChevronDown />}
        </ListItemButton>
        <Collapse in={openPages} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ paddingLeft: "1rem" }}>
            <ListItemButton onClick={() => handleClickMenuItem("/donation")}>
              <ListItemText primary="Donation" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="About us" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </List>
        </Collapse>
      </Popover>
    </div>
  );
};

export default MenuDropdown;
