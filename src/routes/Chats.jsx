import React from "react";
import Contact from "../containers/Contact";
import Chat from "../containers/Chat";
import ChatState from "../context/ChatState";
import "../styles/routes/Chats.scss";

const Chats = () => {
  return (
    <ChatState>
      <section className="Chats">
        <Contact />
        <Chat />
      </section>
    </ChatState>
  );
};

export default Chats;
