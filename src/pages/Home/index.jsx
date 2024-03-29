import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";
import Map from "../../components/map";
import useGetGeocod from "./../../Hooks/useGetGeocod";
import { Icons } from "../../constants/icons";

import Loader from "./../../components/Loader/index";
import "../../App.css";
import ChooseRides from "./../../components/ChooseRide/index";
import useAuth from "../../Hooks/useAuth";

export default function Home() {
  const { handleClick, newDrop, newPickUp, loader, reverse } = useGetGeocod();

  const { currentUser, loading, handleSignOut } = useAuth();

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      {loading && (
        <main className="h-screen  relative flex xl:flex-row flex-col w-full   justify-center">
          <nav className=" flex w-full px-9 justify-between absolute  z-50 top-2">
            <div>{Icons.bar()}</div>
            <div className="relative">
              <img
                src={currentUser?.photoURL}
                alt="user-profile"
                className="rounded-full w-10 h-10  object-cover cursor-pointer"
                onClick={handleSignOut}
                onMouseOver={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
              />
              {mouseOver && (
                <span className="w-fit p-2 flex items-center  rounded-md bg-purple  text-white  absolute  text-[10px] left-0">
                  signout
                </span>
              )}
            </div>
          </nav>
          <Map pickup={newPickUp} dropoff={newDrop} />

          <>
            {reverse && (
              <div className="bg-black rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50  ">
                <form
                  action=""
                  className=" flex  flex-col p-4 h-full  w-full justify-center "
                  onSubmit={handleClick}
                >
                  <p className="m-3 text-white text-center text-2xl">
                    Where are you going?
                  </p>
                  <input
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    className="my-3 py-3 px-3 rounded-md outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Enter Destination"
                    className="my-3 py-3 rounded-md outline-none px-3"
                    name="destination"
                  />
                  <Button
                    className="bg-purple text-white py-3 rounded-md my-3"
                    type="submit"
                  >
                    {loader ? <Loader /> : "Next"}
                  </Button>
                  {/* <Loader /> */}
                </form>
              </div>
            )}

            {!reverse && <ChooseRides />}
          </>
        </main>
      )}
    </>
  );
}
