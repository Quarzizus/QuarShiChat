import React from "react";
import Form from "../components/Form";
import planeta1 from "../images/marte.svg";
import planeta2 from "../images/saturno.svg";
import planeta3 from "../images/urano.svg";
import "../styles/routes/Login.scss";

const Login = () => {
  return (
    <section className="Login">
      <picture className="Login_picture">
        <img className="marte" src={planeta1} alt="marte" />
        <img className="saturno" src={planeta2} alt="saturno" />
        <img className="urano" src={planeta3} alt="urano" />
      </picture>
      <section className="Form_container">
        <Form />
      </section>
    </section>
  );
};

export default Login;
