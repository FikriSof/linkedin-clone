import React from "react";
import "../../styles/sidebar.css";

const SidebarStats = ({ statNumberPeople, statNumberPost }) => {
  return (
    <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">{statNumberPeople}</p>
      </div>
      <div className="sidebar__stat">
        <p>Views on post</p>
        <p className="sidebar__statNumber">{statNumberPost}</p>
      </div>
    </div>
  );
};

export default SidebarStats;
