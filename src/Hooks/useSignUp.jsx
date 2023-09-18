import React, { useState } from "react";

import { auth, storage } from "../firebase";
import toast from "react-hot-toast";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTHS } from "../constants/routes";

export const useSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  // const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const files = event.target.file.files?.[0];
      console.log(res);

      const storageRef = ref(storage, `images/${files.name}`);

      const uploadTask = uploadBytesResumable(storageRef, files);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user, {
              photoURL: downloadURL,
              displayName: res.user.displayName,
            });
          });
        }
      );
      // navigate(CLIENT_ROUTHS.signin);
      setFormData({
        email: "",
        displayName: "",
        password: "",
      });
      toast.success("successful");
    } catch (error) {
      console.log("Error: " + error);
      toast.error("Error");
    }
  };

  return { handleChanges, handleSubmitForm, formData };
};
