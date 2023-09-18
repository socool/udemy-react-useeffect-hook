import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isLooggedOut: false,
});

export default AuthContext;
