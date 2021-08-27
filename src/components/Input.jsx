import React, { useRef } from "react";
import { getDatabase, ref, update, push, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import "../styles/components/Input.scss";

const Input = () => {
  const db = getDatabase();
  const inputRef = useRef();
  const auth = getAuth();
  const user = auth.currentUser;

  const submitMessage = (e) => {
    let input = inputRef.current.value;
    const messageData = {
      name: user.email,
      message: input,
    };
    const key = push(child(ref(db), "messages")).key;
    const updates = {
      ["/messages/" + key]: messageData,
    };
    e.key === "Enter" ? update(ref(db), updates) : null;
  };
  return (
    <article className="Input">
      <input
        type="text"
        placeholder="Escribe algo"
        ref={inputRef}
        onKeyPress={submitMessage}
      />
    </article>
  );
};

export default Input;
