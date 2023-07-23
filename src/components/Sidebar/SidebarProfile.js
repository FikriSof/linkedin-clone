import React from "react";
import "../../styles/sidebar.css";
import { Avatar } from "@material-ui/core";

const SidebarProfile = ({ name, title, background, avatarImg, initial }) => {
  return (
    <div className="sidebar__top">
      <img src={background} alt="Background" />
      <Avatar className="sidebar__avatar" src={avatarImg}>
        {initial}
      </Avatar>
      <h2>{name}</h2>
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarProfile;
