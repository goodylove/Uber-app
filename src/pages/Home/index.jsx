import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";
import Map from "../../components/map";
import useGetGeocod from "./../../Hooks/useGetGeocod";
import { Icons } from "../../constants/icons";
import { context } from "../../components/Context";
export default function Home() {
  const { currentUser } = useContext(context);
  const {
    locationValue,
    destinationValue,
    setLocationValue,
    setDestinationValue,
    locationGeocod,
    destinationGeocod,
    handleSubmit,
  } = useGetGeocod();
  // console.log(currentUser?.photoURL);
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
      <Map location={locationGeocod} destination={destinationGeocod} />
      <div className="bg-black rounded-t-3xl h-[55%] flex justify-center  items-center">
        <form
          action=""
          className="flex flex-col p-4 h-full mt-6 w-full"
          onSubmit={handleSubmit}
        >
          <p className="m-3 text-white text-center text-2xl">
            Where are you going?
          </p>
          <input
            type="text"
            placeholder="Enter location"
            className="my-3 py-3 px-3 rounded-md outline-none"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination"
            className="my-3 py-3 rounded-md outline-none px-3"
            value={destinationValue}
            onChange={(e) => setDestinationValue(e.target.value)}
          />
          <Button
            className="bg-purple text-white py-3 rounded-md my-3"
            type="submit"
          >
            Next
          </Button>
        </form>
      </div>
      {/* <div className=" flex-1"></div> */}
    </main>
  );
}
// npm i @tomtom-international/web-sdk-maps
