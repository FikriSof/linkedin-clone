import React from "react";
import "../../styles/sidebar.css";
import { Avatar } from "@material-ui/core";
import Background from "../../media/lukisan.jpg";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Background} alt="Background" />
        <Avatar className="sidebar__avatar" />
        <h2>Muhammad Fikri Sofyan</h2>
        <h4>kiky.fikri31@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,789</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,456</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("programming")}
      </div>
    </div>
  );
};

export default Sidebar;
