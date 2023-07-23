import React from "react";
import "../../styles/sidebar.css";

const SidebarTopic = ({ topic }) => {
  return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
};

export default SidebarTopic;
