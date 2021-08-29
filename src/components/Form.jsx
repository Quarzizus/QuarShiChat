import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import "../styles/components/Form.scss";

const Form = () => {
  const auth = getAuth();
  const history = useHistory();
  const db = getDatabase();
  const [error, setError] = useState(null);
  const [datauser, setDatauser] = useState({
    email: null,
    password: null,
  });

  const setUserDb = (id) => {
    const chats = {
      chats: "welcome",
    };
    const updates = {
      ["/users/" + id]: chats,
    };
    update(ref(db), updates);
  };
  const handleChange = ({ target }) => {
    setDatauser({
      ...datauser,
      [target.name]: target.value,
    });
  };
  const registerWithEmail = async () => {
    try {
      const provider = await createUserWithEmailAndPassword(
        auth,
        datauser.email,
        datauser.password
      );
      history.push("/chat");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const loginWithEmail = async () => {
    try {
      const provider = await signInWithEmailAndPassword(
        auth,
        datauser.email,
        datauser.password
      );
      history.push("/chat");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const popup = await signInWithPopup(auth, provider);
      setUserDb(popup.user.uid);
      console.log(popup.user.uid);
      // history.push("/chat");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <form className="Form">
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <h4>{error}</h4>
      <button type="button" onClick={registerWithEmail}>
        Register
      </button>
      <button type="button" onClick={loginWithEmail}>
        Sign in
      </button>
      <button type="button" className="button-google" onClick={loginWithGoogle}>
        Google
      </button>
    </form>
  );
};

export default Form;
