import React, { useState, useContext } from "react";
import LoadingContext from "./loadingContext";
import { authenticate } from "./auth";
import UserDetailsContext from "./userDetailsContext";

const Login = () => {
  // const { showLoading, hideLoading } = useContext(LoadingContext);
  const { setUserDetails } = useContext(UserDetailsContext);

  const [email] = useState("email@email.com");
  const [password] = useState("password");

  const authenticateUser = () => {
    // showLoading();
    authenticateUser(email, password).then(userDetails => {
      const { name, dateOfBirth, email } = userDetails;
      // hideLoading;
    });
  };
  return <button onClick={authenticateUser}>Login</button>;
};

export default Login;
