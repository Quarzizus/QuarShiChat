import React, { useState, useRef, useContext } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import ChatContext from "../context/ChatContext";
import "../styles/components/Search.scss";

const Search = () => {
  const { setChatSelect } = useContext(ChatContext);
  const db = getDatabase();
  const auth = getAuth();
  // const user = auth.currentUser;
  const [channels, setChannels] = useState("");
  const inputRef = useRef();
  const optionsRef = useRef();

  const getChannels = async () => {
    try {
      const response = await get(child(ref(db), "channels/"));
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
  const filterChannels = async () => {
    const input = inputRef.current;
    const data = await getChannels();
    setChannels(
      Object.values(data.val()).filter((channel) =>
        channel.name.includes(input.value)
      )
    );
  };
  const searchActive = () => {
    const options = optionsRef.current;
    const input = inputRef.current;
    options.classList.toggle("None");
    input.classList.toggle("Active");
    input.focus();
    input.value = "";
  };

  return (
    <section className="Search">
      <div className="Search_container">
        <input
          type="text"
          ref={inputRef}
          onChange={filterChannels}
          className="Input"
        />
        <button onClick={searchActive}>Q</button>
      </div>
      <ul className="Options" ref={optionsRef}>
        {channels
          ? Object.entries(channels).map(([key, value]) => (
              <li
                key={key}
                onClick={() => {
                  setChatSelect(value.name);
                  setChannels("");
                  searchActive();
                }}
              >
                {value.name}
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default Search;
