import React from "react";
import Gallery from "../../../assets/gallery.png";
import { Link } from "react-router-dom";
import { useSignUp } from "../../../Hooks/useSignUp";
import { Icons } from "../../../constants/icons";
import { CLIENT_ROUTHS } from "../../../constants/routes";
import Button from "./../../../components/Button/index";

export default function SignUp() {
  const { handleChange, handleSubmitForm, formData } = useSignUp();
  return (
    <main className="flex h-screen bg-purple items-center justify-center flex-col p-3">
      <div>{Icons.Logo()}</div>
      <form
        action=""
        className="flex flex-col gap-3 md:w-2/5 w-full  p-5 rounded-md shadow-lg justify-center"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-poppins text-[12px]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="border-2 rounded-md p-2 outline-none w-full"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-white font-poppins text-[12px]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2  outline-none w-full rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-white font-poppins text-[12px]"
          >
            password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-2 rounded-md  outline-none w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="file" className="flex gap-6">
            <img src={Gallery} alt="" width={20} height={20} />
            <input
              type="file"
              id="file"
              name="file"
              placeholder="add an avater"
              className=" "
              style={{ display: "none" }}
              accept="image/*"
            />
            <span className=" font-poppins text-[10px] text-white">
              Add An Avatar
            </span>
          </label>
        </div>
        <Button className=" font-poppins text-white bg-black rounded-md shadow-lg p-2">
          Sign Up
        </Button>
      </form>
      <span className="mt-3 text-white font-poppins">
        Already Have An Account?{" "}
        <Link to={CLIENT_ROUTHS.signin} className="underline">
          Sign In
        </Link>
      </span>
    </main>
  );
}
