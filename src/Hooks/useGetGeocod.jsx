import { useEffect, useState } from "react";

import { toast } from "react-hot-toast";

function useGetGeocod() {
  const [newPickUp, setNewPickUp] = useState(null);
  const [newDrop, setNewDrop] = useState(null);
  const myKey = process.env.REACT_APP_TOM_TOM_KEY;
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const getGeocordinateLoction = async (value) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=${myKey}`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0]?.position;
        console.log(data);
        setNewPickUp(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getGeocordinateDest = async (value) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=${myKey}`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0]?.position;
        console.log(data);

        setNewDrop(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // get distance function
  // const calculateDistance = async (lon0, lat0, lon1, lat1) => {
  //   try {
  //     if (newPickUp && newDrop) {
  //       console.log("ok");
  //       const res =
  //         await fetch(`https://api.tomtom.com/routing/1/calculateRoute/${lon0},${lat0}:${lon1},${lat1}/json?alternativeType=anyRoute&routeRepresentation=summaryOnly&vehicleCommercial=true&key=${myKey}

  // `);
  //       const data = await res.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleClick = async (e) => {
    e.preventDefault();

    let pickUp = e.target[0].value;
    let dropOff = e.target[1].value;

    if (!e.target[0].value && !e.target[1].value) {
      toast.error("enter location");
      return;
    }

    try {
      const pickUpLoaction = await getGeocordinateLoction(pickUp);
      const dropOffLOcation = await getGeocordinateDest(dropOff);
      // console.log(newPickUp.lon, newPickUp.lat, newDrop.lon, newDrop.lat);
      // setTimeout(() => {
      //   calculateDistance(newPickUp.lon, newPickUp.lat, newDrop.lon, newDrop.lat);
      // }, 2000);

      e.target[0].value = "";
      e.target[1].value = "";
      setLoader(true);
    } catch (error) {
      console.log("Erorr", error);
    }
  };

  return { handleClick, newDrop, newPickUp, loader };
}

export default useGetGeocod;
