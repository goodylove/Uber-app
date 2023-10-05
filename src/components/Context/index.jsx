import React, { createContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../firebase";
import toast from "react-hot-toast";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(true);
        setCurrentUser(user);
      }
    });

    return () => unsub();
  }, []);

  const handleSubmitForm = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error: " + error);
      toast.error("Error");
    }
  };

  // console.log(currentUser);

  return (
    <context.Provider value={{ currentUser, loading, handleSubmitForm }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
