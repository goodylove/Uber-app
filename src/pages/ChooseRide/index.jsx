import { useContext, useEffect, useState } from "react";
import Map from "../../components/map";
import { Icons } from "../../constants/icons";
import Button from "./../../components/Button/index";
import { context } from "./../../components/Context/index";
import useGetGeocod from "../../Hooks/useGetGeocod";
import { useLocation } from "react-router-dom";

function ChooseRide() {
  const { currentUser } = useContext(context);
  const [loading, setloading] = useState(true);
  const loction = useLocation();
  const pick = loction.state?.pickup;
  const poff = loction.state?.dropoff;
  const [newPickUp, setNewPickUp] = useState(null);
  const [newDrop, setNewDrop] = useState(null);
  console.log(pick, poff, newDrop, newPickUp);

  const getGeocordinateLoction = async (value) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0]?.position;
        const outPut = Object?.values(result);
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
  const func = async () => {
    await getGeocordinateLoction(pick);
    await getGeocordinateDest(poff);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
      func();
    }, 2000);
    // return () => clearTimeout(timer);
  }, [pick, poff]);

  return (
    <>
      {loading && "loading"}
      <main className="h-screen relative">
        <nav className=" flex w-full p-3 justify-between absolute  z-50 top-0">
          <div>{Icons.bar()}</div>
          <img
            src={currentUser?.photoURL}
            alt="user-profile"
            className="rounded-full w-10 h-10"
          />
        </nav>
        <Map pickup={newPickUp} dropoff={newDrop} />
        <div className="bg-black rounded-t-3xl h-[55%] flex justify-center  items-center">
          <Button
            className="bg-purple text-white py-3 rounded-md my-3"
            type="submit"
          >
            Next
          </Button>
        </div>
      </main>
    </>
  );
}

export default ChooseRide;
