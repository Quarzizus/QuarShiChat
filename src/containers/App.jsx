import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../routes/Login";
import Chats from "../routes/Chats";
import "../styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/chat" component={Chats} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
