import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";

function Map() {
  const [map, setMap] = useState({});
  const mapEelement = useRef();
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

    const addToMap = () => {
      new tt.Marker().setLngLat(center).addTo(map);
    };
    addToMap();
  }, []);
  return (
    <div className="relative h-[45%] overflow-hidden w-full items-center justify-center">
      <div ref={mapEelement} className="h-full w-full"></div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
