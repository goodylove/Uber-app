import React, { createContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
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
      setCurrentUser(res.user);
    } catch (error) {
      console.log("Error: " + error);
      toast.error("Error");
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(user.user);
      toast.success("successfully signed in");
    } catch (error) {
      toast.error("please try  signing in");
    }
  };

  const handleSignOut = () => {
    signOut(auth).then((res) => {
      setCurrentUser(null);
      console.log(res?.user);
    });
  };

  // console.log(currentUser);

  const funForgettonPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };
  return (
    <context.Provider
      value={{
        currentUser,
        loading,
        handleSubmitForm,
        handleSignIn,
        handleSignOut,
        funForgettonPassword,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
