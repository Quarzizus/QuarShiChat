import React, { useState, useEffect, useContext } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Channel from "../components/Channel";
import Search from "../components/Search";
import "../styles/containers/Contact.scss";
import AddChannel from "../components/AddChannel";
import ChatContext from "../context/ChatContext";

const Contact = () => {
  const db = getDatabase();
  const [channels, setChannels] = useState(null);
  const { open } = useContext(ChatContext);

  const getChannels = async () => {
    try {
      onValue(ref(db, "channels/"), (snapshot) => {
        setChannels(snapshot.val());
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <section className={`Contact ${open ? "Contact_active" : null}`}>
      <Search />
      <h2>Channels</h2>
      <div className="Channels">
        {channels
          ? Object.values(channels).map((channel, i) => (
              <Channel key={i} name={channel.name} />
            ))
          : null}
      </div>
      <AddChannel />
    </section>
  );
};

export default Contact;
