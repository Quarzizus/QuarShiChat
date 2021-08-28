import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Message from "../components/Message";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import "../styles/routes/Chat.scss";

const Chat = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  const [data, setData] = useState(null);

  useEffect(() => {
    const messagesRef = ref(db, "messages/");
    onValue(messagesRef, (snapshot) => {
      setData(snapshot);
    });
  }, []);
  return (
    <section className="Chat">
      <div className="Chat_container">
        {!user ? <h2>Cargando usuario</h2> : <h2>{user.email}</h2>}

        {data
          ? Object.entries(data.val()).map(([key, val]) => {
              return <Message data={val} key={key} />;
            })
          : null}
      </div>
      <Input />
    </section>
  );
};

export default Chat;
