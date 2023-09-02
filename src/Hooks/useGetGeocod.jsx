import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function useGetGeocod() {
  const [locationValue, setLocationValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");

  const [locationGeocod, setLocationGeocode] = useState(null);
  const [destinationGeocod, setDestinationGeocod] = useState(null);

  const getGeocordinateLoction = async (value, callback) => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
      );
      const data = await res.json();
      if (data) {
        const result = data?.results[0].position;
        const outPut = Object.values(result);
        callback(outPut);
        console.log(locationGeocod, destinationGeocod);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (locationValue === "" && destinationValue === "") {
      toast.error("Please  fill out the inputs");
    }
    calFun();
  };

  const calFun = useCallback(async () => {
    await getGeocordinateLoction(locationValue, setLocationGeocode);
    await getGeocordinateLoction(destinationValue, setDestinationGeocod);
    console.log(locationGeocod, destinationGeocod);
  }, [locationValue, destinationValue]);

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
