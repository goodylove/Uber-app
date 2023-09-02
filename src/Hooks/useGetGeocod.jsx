import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTHS } from "./../constants/routes";

function useGetGeocod() {
  const [locationValue, setLocationValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");

  const [locationGeocod, setLocationGeocode] = useState();
  const [destinationGeocod, setDestinationGeocod] = useState();
  const navigate = useNavigate();

  const getGeoCordinates = async (value, callback) => {
    const res = await fetch(
      `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
    );
    const data = await res.json();
    console.log(data.result);
    if (data) {
      callback(data?.result[0]?.position);
    }
  };

  //   const getGeocordinateDestination = async (value) => {
  //     const res = await fetch(
  //       `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
  //     );
  //     const data = await res.json();

  //     if (data) {
  //       setDestinationGeocod(data?.result[0]?.position);
  //     }
  //   };
  //   useEffect(() => {

  //   }, [locationGeocod, destinationGeocod]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationValue === "" && destinationValue === "") {
      return toast.error("enter your  location  and your  destination");
    } else {
      if (locationValue === locationGeocod) {
        getGeoCordinates(locationValue, setLocationValue);
        console.log("same");
      }
      if (destinationValue === destinationGeocod) {
        getGeoCordinates(destinationValue, setDestinationValue);
        console.log("same ");
      }
      toast.success("successfully");
      navigate(CLIENT_ROUTHS.chooseride);
    }
  };
  return {
    locationValue,
    destinationValue,
    setLocationValue,
    setDestinationValue,
    locationGeocod,
    destinationGeocod,
    handleSubmit,
  };
}

export default useGetGeocod;
