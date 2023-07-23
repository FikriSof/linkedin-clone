import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@material-ui/icons";
import React from "react";
import { useFeedPost } from "../../hooks/useFeedPost";
import "../../styles/feed.css";
import FeedInputOption from "./FeedInputOption";
import FeedPost from "./FeedPost";
import FlipMove from "react-flip-move";

const Feed = () => {
  const { posts, input, setInput, sendPost } = useFeedPost();

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start a post" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedInputOption Icon={Image} title={"Photo"} color={"#70B5F9"} />
          <FeedInputOption Icon={Subscriptions} title={"video"} color={"#E7A33E"} />
          <FeedInputOption Icon={EventNote} title={"Event"} color={"#C0CBCD"} />
          <FeedInputOption Icon={CalendarViewDay} title={"Write article"} color={"#7FC15E"} />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <FeedPost key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
