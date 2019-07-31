import React, { useState, useContext } from "react";
import merge from "lodash.merge";

import UserDetailsContext from "./userDetailsContext";

const UserDetailsProvider = ({ children }) => {
  const setUserDetails = ({ name, dateOfBirth, email }) => {
    updateUserDetails(prevState => {
      const newState = { ...prevState };
      return merge(newState, {
        name,
        dateOfBirth,
        email
      });
    });
  };
  const userState = {
    name: "",
    dateOfBirth: "",
    email: ""
  };
  const [userDetails, updateUserDetails] = useState(userState);
  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
