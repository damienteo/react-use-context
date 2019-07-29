import React, { useState, useContext } from "react";
import LoadingContext from "./loadingContext";

const Login = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const authenticateUser = () => {
    showLoading();
    // authenticateUser(email, password).then(userDetails => {
    //   const {
    //     name,
    //     dateOfBirth,
    //     email,
    //     secretQuestion,
    //     secretAnswer
    //   } = userDetails;
    //   hideLoading;
    // });
  };
  return <button onClick={authenticateUser}>Login</button>;
};

export default Login;
