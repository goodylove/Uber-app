import React, { createContext, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return () => unsub();
  }, [currentUser]);

  // console.log(currentUser);

  return (
    <context.Provider value={{ currentUser, loading }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
