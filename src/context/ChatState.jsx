import React, { useState } from "react";
import ChatContext from "./ChatContext";

const ChatState = ({ children }) => {
  const [chatSelect, setChatSelect] = useState("");
  return (
    <ChatContext.Provider value={{ chatSelect, setChatSelect }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatState;
