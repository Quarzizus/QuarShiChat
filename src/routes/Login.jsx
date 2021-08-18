import React from "react";
import Form from "../components/Form";
import "../styles/routes/Login.scss";

const Login = () => {
  return (
    <section className="Login">
      <picture className="Login_picture"></picture>
      <section className="Form_container">
        <Form />
      </section>
    </section>
  );
};

export default Login;
