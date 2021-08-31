import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { getDatabase, ref, update } from "firebase/database";
import "../styles/components/AddChannel.scss";

const AddChannel = () => {
  const db = getDatabase();
  const [addChannelData, setAddChannelData] = useState("");
  const validationAddChat = /^\w/;
  const handleAdd = (e) => {
    setAddChannelData(e.target.value);
    const channelData = {
      messages: {
        0: {
          user: "Architect",
          content: "Welcome at the nothing",
        },
      },
      name: addChannelData,
    };
    const updates = {
      ["channels/" + addChannelData]: channelData,
    };
    if (
      (e.key === "Enter" || !e.target.classList.contains("addInput")) &&
      validationAddChat.test(e.target.value)
    ) {
      setAddChannelData("");
      update(ref(db), updates);
    }
  };

  return (
    <section className="AddChannel">
      <FontAwesomeIcon
        icon={faPlusSquare}
        className="AddChannel_icon-add"
        onClick={handleAdd}
        id="Icon"
      />
      <input
        type="text"
        placeholder="Add Channel"
        onChange={handleAdd}
        onKeyPress={handleAdd}
        value={addChannelData}
        className="addInput"
      />
    </section>
  );
};

export default AddChannel;
