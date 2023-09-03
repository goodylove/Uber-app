import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";
import Map from "../../components/map";
import useGetGeocod from "./../../Hooks/useGetGeocod";
import { Icons } from "../../constants/icons";

import { context } from "../../components/Context";
import { CLIENT_ROUTHS } from "../../constants/routes";

export default function Home() {
  const { currentUser } = useContext(context);
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");

  return (
    <main className="h-screen relative">
      <nav className=" flex w-full p-3 justify-between absolute  z-50 top-0">
        <div>{Icons.bar()}</div>
        <img
          src={currentUser?.photoURL}
          alt="user-profile"
          className="rounded-full w-10 h-10"
        />
      </nav>
      <Map />
      <div className="bg-black rounded-t-3xl h-[55%] flex justify-center  items-center">
        <div action="" className="flex flex-col p-4 h-full mt-6 w-full">
          <p className="m-3 text-white text-center text-2xl">
            Where are you going?
          </p>
          <input
            type="text"
            placeholder="Enter location"
            name="location"
            className="my-3 py-3 px-3 rounded-md outline-none"
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination"
            className="my-3 py-3 rounded-md outline-none px-3"
            name="destination"
            value={dropOff}
            onChange={(e) => setDropOff(e.target.value)}
          />
          <Link
            to={pickUp === "" && dropOff === "" ? "" : CLIENT_ROUTHS.chooseride}
            state={{ pickup: pickUp, dropoff: dropOff }}
          >
            <Button
              className="bg-purple text-white py-3 rounded-md my-3"
              type="submit"
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className=" flex-1"></div> */}
    </main>
  );
}
// npm i @tomtom-international/web-sdk-maps
