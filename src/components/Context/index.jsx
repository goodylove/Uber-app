import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import * as tt from "@tomtom-international/web-sdk-maps";

import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import { toast } from "react-hot-toast";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  // const navigate = useNavigate();
  const [locationGeocod, setLocationGeocode] = useState(null);
  const [destinationGeocod, setDestinationGeocod] = useState(null);
  const mapEelement = useRef();

  const getGeocordinateLoction = async (value) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0]?.position;
        const outPut = Object?.values(result);
        setLocationGeocode(outPut);
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
        setDestinationGeocod(outPut);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let locationValue = e.target[0].value;
    let destinationValue = e.target[1].value;

    if (locationValue === "" && destinationValue === "") {
      toast.error("Please  fill out the inputs");
    }
    update(locationValue, destinationValue);
    locationValue = "";
    destinationValue = "";
    // navigate(CLIENT_ROUTHS.chooseride);
  };
  const update = useCallback(
    (a, b) => {
      getGeocordinateLoction(a);
      getGeocordinateDest(b);
    },
    [locationGeocod, destinationGeocod]
  );

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsub();
  }, []);

  // console.log(currentUser);

  let center = [-0.112869, 51.504];
  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: center,
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },
      zoom: 14,
    });
    // setMap(map);
    if (locationGeocod) {
      addToMap(map, locationGeocod);
    }
    if (destinationGeocod) {
      addToMap(map, destinationGeocod);
    }

    map.remove();
  }, []);

  const addToMap = (map, cordinate) => {
    new tt.Marker().setLngLat(cordinate).addTo(map);
  };

  return (
    <context.Provider value={{ currentUser, handleSubmit, mapEelement }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
