import React, { useEffect } from "react";
import Avatar from "./Avatar.jsx";
import "../styles/components/Message.scss";

const Message = ({ data, user, name, chat }) => {
  useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, []);
  return (
    <article className={`Message ${user == name ? "Message_own" : null} `}>
      <Avatar name={data.name} />
      <p>{data.message}</p>
    </article>
  );
};

export default Message;
