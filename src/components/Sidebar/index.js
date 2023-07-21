import React from "react";
import SidebarProfile from "./SidebarProfile";
import SidebarStats from "./SidebarStats";
import Background from "../../media/lukisan.jpg";
import AvatarImg from "../../media/foto kikuy.jpg";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <SidebarProfile name={"Muhammad Fikri Sofyan"} title={"Frontend Developer"} background={Background} avatarImg={AvatarImg} />

      <SidebarStats statNumberPeople={"2,678"} statNumberPost={"1,345"} />

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("programming")}
        {recentItem("frontend engineer")}
      </div>
    </div>
  );
};

export default Sidebar;
