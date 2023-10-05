import { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import { toast } from "react-hot-toast";

import { auth } from "../firebase";

import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./../firebase/index";
import { context } from "../components/Context";
import useAuth from "./useAuth";

function useGetGeocod() {
  const [newPickUp, setNewPickUp] = useState(null);
  const [newDrop, setNewDrop] = useState(null);
  const myKey = process.env.REACT_APP_TOM_TOM_KEY;
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [reverse, setReverse] = useState(true);

  const { currentUser } = useAuth();

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

    if (e.target[0].value === "" && e.target[1].value === "") {
      toast.error("enter location");
      return;
    }

    try {
      const pickUpLoaction = await getGeocordinateLoction(pickUp);
      const dropOffLOcation = await getGeocordinateDest(dropOff);

      setLoader(true);
      setReverse(false);

      // if (currentUser) {
      //   console.log(currentUser);
      //   const res = await getDoc(doc(db, "user", currentUser.uid));
      //   if (!res.exists()) {
      //     await setDoc(doc(db, "user", currentUser.uid), {
      //       name: currentUser.displayName,
      //       location: {
      //         pickup: pickUp,
      //         dropoff: dropOff,
      //       },
      //       discount: "",
      //       price: "",
      //       code: "",
      //       data: serverTimestamp(),
      //     });
      //   }
      // } else {
      //   console.log("user not found");
      // }

      e.target[0].value = "";
      e.target[1].value = "";
    } catch (error) {
      console.log("Erorr", error);
      setLoader(false);
    }
  };

  return { handleClick, newDrop, newPickUp, loader };
}

export default useGetGeocod;
