// import * as tt from "@tomtom-international/web-sdk-maps";

import { useContext, useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import useGetGeocod from "./../../Hooks/useGetGeocod";
import { context } from "./../Context/index";

function Map() {
  const { currentUser, handleSubmit, mapEelement } = useContext(context);
  console.log(mapEelement);
  console.log(currentUser);
  return (
    <div className="relative h-[45%] overflow-hidden w-full items-center justify-center">
      <div ref={mapEelement} className="h-full w-full"></div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
