function useGetGeocod() {
  const [locationValue, setLocationValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");

  const [locationGeocod, setLocationGeocode] = useState();
  const [destinationGeocod, setDestinationGeocod] = useState();

  const getGeocordinateLoction = async (value) => {
    const res = await fetch(
      `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
    );
    const data = await res.json();
    if (!data) return;
    setLocationGeocode(data.results[0].position);
  };

  const getGeocordinateDestination = async (value) => {
    const res = await fetch(
      `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
    );
    const data = await res.json();

    if (!data) return;

    setDestinationGeocod(data.results[0].position);
  };
  useEffect(() => {
    getGeocordinateLoction(locationValue);
    getGeocordinateDestination(destinationValue);
  }, [locationGeocod, destinationGeocod]);

  return {
    locationValue,
    destinationValue,
    setLocationValue,
    setDestinationValue,
    locationGeocod,
    destinationGeocod,
  };
}

export default useGetGeocod;
