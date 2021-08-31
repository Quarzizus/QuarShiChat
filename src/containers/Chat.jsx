import React, { useEffect, useState, useRef, useContext } from "react";
import ChatContext from "../context/ChatContext";
import Input from "../components/Input";
import Message from "../components/Message";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import "../styles/containers/Chat.scss";

const Chat = () => {
  const auth = getAuth();
  const db = getDatabase();
  const chatRef = useRef();
  const user = auth.currentUser;
  const [data, setData] = useState(null);
  const { chatSelect } = useContext(ChatContext);

  useEffect(() => {
    onValue(ref(db, "channels/" + chatSelect + "/messages"), (snapshot) => {
      setData(snapshot.val());
    });
  }, [chatSelect]);

  return (
    <section className="Chat">
      <h2>#{chatSelect}</h2>
      <div className="Chat_container" ref={chatRef}>
        {data
          ? Object.entries(data).map(([key, value]) => (
              <Message
                data={value}
                user={user.email}
                channel={chatSelect}
                chat={chatRef}
                key={key}
              />
            ))
          : null}
      </div>
      <Input />
    </section>
  );
};

export default Chat;
