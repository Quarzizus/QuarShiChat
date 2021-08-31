import React, { useState, useContext } from "react";
import { getDatabase, ref, update, push, child } from "firebase/database";
import ChatContext from "../context/ChatContext";
import { getAuth } from "firebase/auth";
import "../styles/components/Input.scss";

const Input = () => {
  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;
  const [message, setMessage] = useState("");
  const { chatSelect } = useContext(ChatContext);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const submitMessage = (e) => {
    const messageData = {
      user: user.email,
      content: message,
    };
    const key = push(
      child(ref(db), "/channels/" + chatSelect + "/messages/")
    ).key;
    const updates = {
      ["/channels/" + chatSelect + "/messages/" + key]: messageData,
    };
    if (e.key === "Enter") {
      update(ref(db), updates);
      setMessage("");
    }
  };

  return (
    <article className="Input">
      <input
        type="text"
        placeholder="Escribe algo"
        onKeyPress={submitMessage}
        onChange={handleChange}
        value={message}
      />
    </article>
  );
};

export default Input;
