import React from "react";
import Contact from "./Contact";
import Chat from "../routes/Chat";
import "../styles/containers/Chats.scss";

const Chats = () => {
  return (
    <section className="Chats">
      <Contact />
      <Chat />
    </section>
  );
};

export default Chats;
