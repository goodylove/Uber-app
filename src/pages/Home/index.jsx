import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";
import Map from "../../components/map";
// import useGetGeocod from "./../../Hooks/useGetGeocod";

export default function Home() {
  // const {
  //   locationValue,
  //   destinationValue,
  //   setLocationValue,
  //   setDestinationValue,
  //   locationGeocod,
  //   destinationGeocod,
  // } = useGetGeocod();
  return (
    <main className="h-screen">
      <Map />
      <div className="bg-black rounded-t-3xl h-[55%] flex justify-center  items-center">
        <form action="" className="flex flex-col p-4 h-full mt-6 w-full">
          <p className="m-3 text-white text-center text-2xl">
            Where are you going?
          </p>
          <input
            type="text"
            placeholder="Enter location"
            className="my-3 py-3 px-3 rounded-md outline-none"
            // value={locationValue}
            // onChange={(e) => setLocationValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination"
            className="my-3 py-3 rounded-md outline-none px-3"
            // value={destinationValue}
            // onChange={(e) => setDestinationValue(e.target.value)}
          />
          <Button className="bg-purple text-white py-3 rounded-md my-3">
            Next
          </Button>
        </form>
      </div>
      {/* <div className=" flex-1"></div> */}
    </main>
  );
}
// npm i @tomtom-international/web-sdk-maps
// location={locationGeocod} destination={destinationGeocod}
