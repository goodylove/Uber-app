import React, { createContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        // setCurrentUser(user);
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
