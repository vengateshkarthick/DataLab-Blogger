import React from "react";
import "./styles.css";
import { UseAuthenticationComponent } from "./AuthenticationProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Login";

export default function App() {
  return (
    <UseAuthenticationComponent>
      <div className="App">
        <div className="container-fluid">
          <div
            className="row justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </UseAuthenticationComponent>
  );
}
