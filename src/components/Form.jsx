import React from "react";
import "../styles/components/Form.scss";

const Form = () => {
  return (
    <form className="Form" autocomplete="off">
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <h4>Sign in</h4>
      <button type="button">Login</button>
      <button type="button" className="button-google">
        Google
      </button>
      {/* <Link></Link> */}
    </form>
  );
};

export default Form;
