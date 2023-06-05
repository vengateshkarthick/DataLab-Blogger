import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { AuthenticationContext } from "../AuthenticationProvider";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const { isAuthenticated, setAuthentication } = useContext(
    AuthenticationContext
  );

  const handleUserName = (e) => {
    const {
      target: { value },
    } = e;
    setUserName(value);
    e.stopPropagation();
  };

  const handlePassword = (e) => {
    const {
      target: { value },
    } = e;
    setPassWord(value);
    e.stopPropagation();
  };
  const type = isAuthenticated ? "success" : "error";
  const message = {
    success: "Successfully logged in",
    error: "Email or password doesn't match",
  };
  const getAlert = () => {
    return toast[type](message[type], {
      position: "top-right",
      autoClose: "2000",
      theme: "light",
    });
  };
  const onSubmit = (e) => {
    if (userName === "admin@datalabs.com" && passWord === "admin") {
      setAuthentication(true);
    }
    e.preventDefault();
    getAlert();
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="border border-1 d-flex p-1 justify-content-center align-items-center">
        <form className="w-100">
          <div className="m-1 p-2">
            <label className="form-label d-flex" id="userNameInput">
              Enter your email
            </label>
            <Input
              placeholder="Enter your emailid"
              onChange={handleUserName}
              id="userNameInput"
            />
          </div>
          <div className="m-1 p-2">
            <label className="form-label d-flex" id="userPasswordInput">
              Enter your password
            </label>
            <Input
              placeholder="Enter your password"
              onChange={handlePassword}
              id="userpasswordInput"
              type="password"
            />
          </div>
          <div className="m-1 p-2">
            <Button type="primary w-100" onClick={onSubmit}>
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
