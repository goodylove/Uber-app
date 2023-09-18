import React from "react";

import { Icons } from "../../../constants/icons";
import { useSignIn } from "../../../Hooks/useSignIn";
import { CLIENT_ROUTHS } from "../../../constants/routes";
import { Link } from "react-router-dom";
import Button from "./../../../components/Button/index";

export default function SignIn() {
  return (
    <main className="flex h-screen bg-purple items-center justify-center flex-col p-3">
      <div>{Icons.Logo()}</div>
      <form
        action=""
        onSubmit={handleSignIn}
        className="flex flex-col gap-3 md:w-2/5 w-full  p-5 rounded-md shadow-lg justify-center"
      >
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
            value={getData.email}
            onChange={handleChange}
            className="border-2  outline-none w-full rounded-md p-1"
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
            value={getData.password}
            onChange={handleChange}
            className="border-2 rounded-md p-1 outline-none w-full"
          />
        </div>

        <Button className=" font-poppins text-white bg-black rounded-md shadow-lg p-2">
          Login
        </Button>
      </form>
      <span className="mt-3 text-white font-poppins">
        Don't Have An Account?{" "}
        <Link to={CLIENT_ROUTHS.signup} className=" underline">
          Sign up
        </Link>
      </span>
      <div
        className="text-white my-4 underline    cursor-pointer"
        onClick={funForgettonPassword}
      >
        forgotten password?
      </div>
    </main>
  );
}
