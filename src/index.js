import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { FirebaseAppProvider } from "reactfire";
const firebaseConfig = {
  apiKey: "AIzaSyCmNGk9fezLCG5WDRCIY2E487ila7FZ9Eo",
  authDomain: "quarshichat.firebaseapp.com",
  projectId: "quarshichat",
  storageBucket: "quarshichat.appspot.com",
  messagingSenderId: "186546216026",
  appId: "1:186546216026:web:58cfa55b3a6e1efacacc63",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("App")
);
