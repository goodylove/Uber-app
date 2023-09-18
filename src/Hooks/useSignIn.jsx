import { signInWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useState } from "react";

import { auth } from "../firebase/index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CLIENT_ROUTHS } from "../constants/routes";
import { sendPasswordResetEmail } from "firebase/auth";

export const useSignIn = () => {
  const [getData, setGetData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const funForgettonPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, getData.email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, getData.email, getData.password);
      toast.success("successfully signed in");
      navigate(CLIENT_ROUTHS.home);
    } catch (error) {
      setError(true);
      toast.error("please try  signing in");
    }
  };
  return { handleSignIn, getData, handleChange, funForgettonPassword };
};
