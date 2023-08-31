import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";

export default function Home() {
  // 6.5244° N, 3.3792°
  const longitude = 6.5244;
  const latitude = 3.3792;
  const [map, setMap] = useState({});
  const mapEelement = useRef();
  let center = [longitude, latitude];

  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: center,
      zoom: 2,
    });
    // setMap(map);
    map.on("load", () => {
      new tt.Marker().setLngLat(center).addTo(map);
    });
  }, []);

  return (
    <main className="h-screen">
      <div className="relative h-[45%] overflow-hidden w-full items-center justify-center">
        <div ref={mapEelement} className="h-full w-full"></div>
      </div>
      <div className="bg-black rounded-t-3xl h-[55%] flex justify-center  items-center">
        <form action="" className="flex flex-col p-4 h-full mt-6 w-full">
          <p className="m-3 text-white text-center text-2xl">
            Where are you going?
          </p>
          <input
            type="text"
            placeholder="Enter location"
            className="my-3 py-3 px-3 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Enter Destination"
            className="my-3 py-3 rounded-md outline-none px-3"
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
