import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";

function Map({ location, destination }) {
  // -0.112869
  // 51.504t
  const [updateLocation, setUpdateLocation] = useState([-0.112869, 51.504]);
  const longitude = 6.5244;
  const latitude = 3.3792;
  const [map, setMap] = useState({});
  const mapEelement = useRef();
  // let center = [-0.112869, 51.504];

  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: updateLocation,
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },
      zoom: 14,
    });
    // setMap(map);
    const bounds = [location, destination];

    // map.fitBounds(bounds, {
    //   padding: { top: 5, bottom: 5, left: 15, right: 5 },
    //   maxZoom: 12,
    // });

    if (location) {
      setUpdateLocation(location);
      addToMap(map, location);
    }

    if (destination) {
      setUpdateLocation(destination);
      addToMap(map, destination);
    }
  }, [location, destination]);

  const addToMap = (map, cordinates) => {
    new tt.Marker().setLngLat(cordinates).addTo(map);
  };
  return (
    <div className="relative h-[45%] overflow-hidden w-full items-center justify-center">
      <div ref={mapEelement} className="h-full w-full"></div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
