import React, { useEffect } from "react";
import Avatar from "./Avatar.jsx";
import "../styles/components/Message.scss";

const Message = ({ data, user, name, chat }) => {
  useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, []);
  return (
    <article className={`Message ${user == data.user ? "Message_own" : null} `}>
      <Avatar name={data.user} />
      {console.log(data.user, user)}
      <p>{data.content}</p>
    </article>
  );
};

export default Message;
