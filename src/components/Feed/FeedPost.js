import React from "react";
import "../../styles/feed.css";
import { Avatar } from "@material-ui/core";
import FeedInputOption from "./FeedInputOption";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from "@material-ui/icons";

const FeedPost = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <FeedInputOption Icon={ThumbUpOutlined} title={"Like"} color={"gray"} />
        <FeedInputOption Icon={ChatOutlined} title={"Comment"} color={"gray"} />
        <FeedInputOption Icon={ShareOutlined} title={"Share"} color={"gray"} />
        <FeedInputOption Icon={SendOutlined} title={"Send"} color={"gray"} />
      </div>
    </div>
  );
};

export default FeedPost;
