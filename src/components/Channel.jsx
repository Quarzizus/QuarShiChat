import React, { useContext } from "react";
import ChatContext from "../context/ChatContext";
import "../styles/components/Channel.scss";

const Channel = ({ name }) => {
  const { setChatSelect } = useContext(ChatContext);
  return (
    <article className="Channel" onClick={() => setChatSelect(name)}>
      <h3>#{name}</h3>
    </article>
  );
};

export default Channel;
