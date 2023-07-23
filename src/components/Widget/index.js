import React from "react";
import "../../styles/widget.css";
import { Info } from "@material-ui/icons";
import WidgetArticle from "./WidgetArticle";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      <WidgetArticle heading={"Article 1"} subtitle={"Top news -  999 readers"} />
      <WidgetArticle heading={"Article 2"} subtitle={"Cars & Auto - 300 readers"} />
      <WidgetArticle heading={"Article 3"} subtitle={"Crypto -  8000 readers"} />
      <WidgetArticle heading={"Article 4"} subtitle={"Code -  123 readers"} />
      <WidgetArticle heading={"Article 5"} subtitle={"Reactjs -  101 readers"} />
      <WidgetArticle heading={"Article 6"} subtitle={"Redux -  222 readers"} />
    </div>
  );
};

export default Widget;
