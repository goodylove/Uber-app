import React, { createContext, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsub();
  }, []);

  console.log(currentUser);

  return (
    <context.Provider value={{ currentUser }}>{children}</context.Provider>
  );
};

export default ContextProvider;
