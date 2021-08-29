import React, { useState, useRef } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import "../styles/components/Search.scss";

const Search = () => {
  const db = getDatabase();
  const [users, setUsers] = useState("");
  const inputRef = useRef();
  const optionsRef = useRef();

  const getUsers = async () => {
    try {
      const response = await get(child(ref(db), "users/"));
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterUsers = async () => {
    const input = inputRef.current;
    const data = await getUsers();
    setUsers(
      Object.values(data.val()).filter((value) =>
        value.name.includes(input.value)
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
          onChange={filterUsers}
          className="Input"
        />
        <button onClick={searchActive}>Q</button>
      </div>
      <ul className="Options" ref={optionsRef}>
        {users
          ? Object.values(users).map((u, i) => (
              <li
                key={i}
                onClick={() => {
                  setUsers("");
                  searchActive();
                  console.log(users[i]);
                }}
              >
                {u.name}
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default Search;
