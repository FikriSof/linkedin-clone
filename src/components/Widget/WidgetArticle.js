import { FiberManualRecord } from "@material-ui/icons";
import React from "react";

const WidgetArticle = ({ heading, subtitle }) => {
  return (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetArticle;
