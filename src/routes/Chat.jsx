import React from "react";
import Input from "../components/Input";
import { getAuth } from "firebase/auth";
import "../styles/routes/Chat.scss";

const Chat = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <section className="Chat">
      <h2>{user.email}</h2>
      <Input />
    </section>
  );
};

export default Chat;
