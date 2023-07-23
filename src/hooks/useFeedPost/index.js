import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/user/userSlice";

export const useFeedPost = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
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
