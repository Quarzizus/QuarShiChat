import React, { useEffect, useState, useRef } from "react";
import Input from "../components/Input";
import Message from "../components/Message";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import "../styles/routes/Chat.scss";

const Chat = () => {
  const auth = getAuth();
  const db = getDatabase();
  const chatRef = useRef();
  const user = auth.currentUser;
  const [data, setData] = useState(null);

  useEffect(() => {
    const messagesRef = ref(db, "messages/");
    onValue(messagesRef, (snapshot) => {
      setData(snapshot);
    });
  }, []);
  return (
    <section className="Chat">
      <div className="Chat_container" ref={chatRef}>
        {!user ? <h2>Cargando usuario</h2> : <h2>{user.email}</h2>}
        {data
          ? Object.entries(data.val()).map(([key, val]) => {
              return (
                <Message
                  data={val}
                  key={key}
                  user={user.email}
                  name={val.name}
                  chat={chatRef}
                />
              );
            })
          : null}
      </div>
      <Input />
    </section>
  );
};

export default Chat;
