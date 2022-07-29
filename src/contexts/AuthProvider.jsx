import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState({ loggedIn: false });
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const values = {};

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
