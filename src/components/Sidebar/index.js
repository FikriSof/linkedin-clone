import React from "react";
import { useSelector } from "react-redux";
import Background from "../../media/lukisan.jpg";
import { selectUser } from "../../redux/features/user/userSlice";
import SidebarProfile from "./SidebarProfile";
import SidebarStats from "./SidebarStats";
import SidebarTopic from "./SidebarTopic";

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <SidebarProfile name={user.displayName} title={user.email} background={Background} avatarImg={user.photoUrl} initial={user.email[0]} />

      <SidebarStats statNumberPeople={"2,678"} statNumberPost={"1,345"} />

      <div className="sidebar__bottom">
        <p>Recent</p>
        <SidebarTopic topic={"reactjs"} />
        <SidebarTopic topic={"developer"} />
        <SidebarTopic topic={"programming"} />
        <SidebarTopic topic={"frontend engineer"} />
      </div>
    </div>
  );
};

export default Sidebar;
