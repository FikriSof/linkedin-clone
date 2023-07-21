import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

export const useFeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Muhammad Fikri Sofyan",
      description: "test post",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return {
    posts,
    setPosts,
    input,
    setInput,
    sendPost,
  };
};
