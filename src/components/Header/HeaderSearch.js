import React from "react";
import "../../styles/header.css";
import { Search } from "@material-ui/icons";

const HeaderSearch = () => {
  return (
    <div className="header__search">
      <Search />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default HeaderSearch;
