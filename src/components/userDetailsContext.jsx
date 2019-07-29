import { createContext } from "react";

const UserDetailsContext = createContext({
  name: "",
  dateOfBirth: "",
  email: "",
  setUserDetails: userDetails => {}
});

export default UserDetailsContext;
