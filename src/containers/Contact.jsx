import React, { useState, useEffect } from "react";
import { getDatabase, get, ref, child, onValue } from "firebase/database";
import Channel from "../components/Channel";
import Search from "../components/Search";
import "../styles/containers/Contact.scss";
import AddChannel from "../components/AddChannel";

const Contact = () => {
  const db = getDatabase();
  const [channels, setChannels] = useState(null);

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
    <section className="Contact">
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
