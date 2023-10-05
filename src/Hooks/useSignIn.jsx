import { signInWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useState } from "react";

import { auth } from "../firebase/index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CLIENT_ROUTHS } from "../constants/routes";
import { sendPasswordResetEmail } from "firebase/auth";
import useAuth from "./useAuth";

export const useSignIn = () => {
  const [getData, setGetData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const { handleSignIn, funForgettonPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const forgottenPassword = async function (getData) {
    await funForgettonPassword(getData.email);
  };
  const loginFunc = async function (e) {
    e.preventDefault();
    await handleSignIn(getData.email, getData.password);

    navigate(CLIENT_ROUTHS.home);
    setSuccess(true);
  };

  return { getData, handleChange, success, loginFunc, forgottenPassword };
};
