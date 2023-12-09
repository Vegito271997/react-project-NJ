import { createContext } from "react";

const UserContext = createContext({
  loggedInInfo: "Default",
});

export default UserContext;
