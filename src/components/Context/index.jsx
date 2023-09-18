import React, { createContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(true);
      } else {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  // console.log(currentUser);

  return (
    <context.Provider value={{ currentUser, loading }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
