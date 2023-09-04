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
  const [newPickUp, setNewPickUp] = useState(null);
  const [newDrop, setNewDrop] = useState(null);

  const getGeocordinateLoction = async (value) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0]?.position;
        const outPut = Object?.values(result);
        console.log(data);
        setNewPickUp(outPut);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getGeocordinateDest = async (value) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0]?.position;
        const outPut = Object?.values(result);
        setNewDrop(outPut);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await getGeocordinateLoction(pickUp);
    await getGeocordinateLoction(dropOff);
  };
  console.log(newPickUp);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setloading(false);
  //     func();
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [pick]);

  return (
    <main className="h-screen relative ">
      <nav className=" flex w-full p-3 justify-between absolute  z-50 top-0">
        <div>{Icons.bar()}</div>
        <img
          src={currentUser?.photoURL}
          alt="user-profile"
          className="rounded-full w-10 h-10"
        />
      </nav>
      <Map pickup={newPickUp} dropoff={newDrop} />
      <div className="bg-black rounded-t-3xl h-[50%] flex justify-center  items-center ">
        <form
          action=""
          className="flex flex-col p-4 h-full mt-6 w-full"
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
          <Button
            className="bg-purple text-white py-3 rounded-md my-3"
            type="submit"
          >
            next
          </Button>
        </form>
      </div>
      {/* <div className=" flex-1"></div> */}
    </main>
  );
}
// npm i @tomtom-international/web-sdk-maps
{
  /* <Link
  to={pickUp === "" && dropOff === "" ? "" : CLIENT_ROUTHS.home}
  state={{ pickup: pickUp, dropoff: dropOff }}
>
  Next
</Link>; */
}
