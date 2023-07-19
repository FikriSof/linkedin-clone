import React from "react";
import Logo from "../../media/linkedin-logo.png";
import Avatar from "../../media/foto kikuy.jpg";
import "../../styles/header.css";
import HeaderSearch from "./HeaderSearch";
import HeaderOption from "./HeaderOption";
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="linkedin logo" />

        <HeaderSearch />
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={Avatar} title="me" />
      </div>
    </div>
  );
};

export default Header;
