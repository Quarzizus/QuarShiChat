import React, { useEffect, useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
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
  const { chatSelect, setOpen, open } = useContext(ChatContext);

  useEffect(() => {
    onValue(ref(db, "channels/" + chatSelect + "/messages"), (snapshot) => {
      setData(snapshot.val());
    });
  }, [chatSelect]);

  return (
    <section className="Chat">
      <div className="Chat_name">
        <h2>#{chatSelect}</h2>
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faChevronCircleDown} id="Chat_name-icon" />
        </button>
      </div>
      <div
        className="Chat_container"
        ref={chatRef}
        onClick={() => {
          open ? setOpen(!open) : null;
        }}
      >
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
