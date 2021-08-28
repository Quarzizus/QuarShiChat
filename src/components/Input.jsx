import React, { useState } from "react";
import { getDatabase, ref, update, push, child, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import "../styles/components/Input.scss";

const Input = () => {
  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const submitMessage = (e) => {
    const messageData = {
      name: user.email,
      message: message,
    };
    const key = push(child(ref(db), "messages")).key;
    const updates = {
      ["/messages/" + key]: messageData,
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
