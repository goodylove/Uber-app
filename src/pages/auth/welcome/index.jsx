import React, { useEffect, useState } from "react";
import { Icons } from "../../../constants/icons";
import { CLIENT_ROUTHS } from "../../../constants/routes";
import { Link } from "react-router-dom";
import Button from "./../../../components/Button/index";

export default function Welcome() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpin(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="bg-purple h-screen flex items-center justify-center ">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <span className={`  ${spin ? "animate-none" : ""} `}>
          {Icons.Logo()}
        </span>
        <h3 className="text-white font-bold font-poppins">Welcome To LYA</h3>
        <p className="text-[30px] text-white ">Find a best Taxi ride</p>
        <Button className="bg-black font-poppins mt-5 p-3 w-fit rounded-md">
          <Link to={CLIENT_ROUTHS.signin} className="text-white">
            Get Started
          </Link>
        </Button>
      </div>
    </main>
  );
}
