import React, { useState } from "react";
import { useNavigate } from "react-router";
import { HiMenu } from "react-icons/hi";
import { IconButton, Menu } from "@mui/material";
import Button from "./Button";
import PopOver from "./PopOver";

const MenuDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <HiMenu />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Button title={"Home"} onClick={() => navigate("/")} />

        <PopOver
          title={"Dog List"}
          items={[
            { title: "Dog List", href: "/doglist" },
            { title: "Dog Profile", href: "/dogprofile" },
          ]}
        />
        <Button title={"How It Works"} onClick={() => navigate("/")} />
        <PopOver
          title={"Pages"}
          items={[
            { title: "Donation", href: "/donations" },
            { title: "About us", href: "/aboutus" },
            { title: "FAQ", href: "/faq" },
            { title: "Team", href: "/team" },
            { title: "Contact Us", href: "/contactus" },
          ]}
        />
        <Button title={"Volunteer"} onClick={() => navigate("/")} />
      </Menu>
    </>
  );
};

export default MenuDropdown;
