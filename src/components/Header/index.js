import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../../media/linkedin-logo.png";
import { logout } from "../../redux/features/user/userSlice";
import { auth } from "../../utils/firebase";
import HeaderOption from "./HeaderOption";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="linkedin logo" />

        <HeaderSearch />
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title={"Home"} />
        <HeaderOption Icon={SupervisorAccount} title={"My Network"} />
        <HeaderOption Icon={BusinessCenter} title={"Jobs"} />
        <HeaderOption Icon={Chat} title={"Messaging"} />
        <HeaderOption Icon={Notifications} title={"Notifications"} />
        <HeaderOption avatar={true} title={"me"} onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
