import React, { useState } from "react";
import ChatContext from "./ChatContext";

const ChatState = ({ children }) => {
  const [chatSelect, setChatSelect] = useState("general");
  const [open, setOpen] = useState(false);
  return (
    <ChatContext.Provider value={{ chatSelect, setChatSelect, open, setOpen }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatState;
