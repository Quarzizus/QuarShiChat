import React, { useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import "../styles/components/Form.scss";

const Form = () => {
  const auth = firebase.auth();

  const [datauser, setDatauser] = useState({
    email: null,
    password: null,
  });
  const handleChange = ({ target }) => {
    setDatauser({
      ...datauser,
      [target.name]: target.value,
    });
  };

  const loginWithGoogle = async () => {
    const provider = await new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
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
      <h4>Sign in</h4>
      <button type="button">Login</button>
      <button type="button" className="button-google" onClick={loginWithGoogle}>
        Google
      </button>
      {/* <Link></Link> */}
    </form>
  );
};

export default Form;
