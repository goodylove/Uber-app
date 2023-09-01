import React, { useState } from "react";

import { auth, storage } from "../firebase";
import toast from "react-hot-toast";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const useSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const [userImage, setUserImage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangeFile = (e) => {
    const files = e.target.files?.[0];
    if (!files) return;
    setUserImage(files);
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // console.log(res);

      const storageRef = ref(storage, `images/${userImage}`);

      const uploadTask = uploadBytesResumable(storageRef, userImage);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
          // toast.loading("loading...");
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user, {
              photoURL: downloadURL,
              displayName: res.user.displayName,
            });
          });
        }
      );
      setFormData({
        email: "",
        displayName: "",
        password: "",
      });
      toast.success("successful");
    } catch (error) {
      toast.error("Error");
    }
  };

  return { handleChange, handleChangeFile, handleSubmitForm, formData };
};
