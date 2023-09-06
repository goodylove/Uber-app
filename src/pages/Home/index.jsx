import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";
import Map from "../../components/map";
import useGetGeocod from "./../../Hooks/useGetGeocod";
import { Icons } from "../../constants/icons";

import { context } from "../../components/Context";
import { toast } from "react-hot-toast";
import Loader from "./../../components/Loader/index";
import ChooseRides from "./../../components/ChooseRide/index";

export default function Home() {
  const { currentUser } = useContext(context);

  const { handleClick, newDrop, newPickUp, loader } = useGetGeocod();

  const [reverse, setReverse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReverse(!loader);
    }, 1000);

    return () => clearTimeout(timer);
  }, [reverse, loader]);

  return (
    <main className="h-screen  relative flex flex-col w-full ">
      <nav className=" flex w-full px-3 justify-between absolute  z-50 top-0">
        <div>{Icons.bar()}</div>
        <img
          src={currentUser?.photoURL}
          alt="user-profile"
          className="rounded-full w-10 h-10"
        />
      </nav>
      <Map pickup={newPickUp} dropoff={newDrop} />

      {reverse && (
        <div className="bg-black rounded-t-xl  flex-1  items-center h-full ">
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
