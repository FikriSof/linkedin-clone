import React from "react";
import "../../styles/feed.css";

const FeedInputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default FeedInputOption;
