import React from "react";
import "../styles/components/Message.scss";

const Message = ({ data }) => {
  return (
    <article className="Message">
      <h2>{data.name}</h2>
      <p>{data.message}</p>
    </article>
  );
};

export default Message;
