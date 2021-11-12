import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import app from "../firebase"

export const AuthContext = React.createContext();

export default function Auth({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
