import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";

function Map({ pickup, dropoff }) {
  // const [map, setMap] = useState({});
  const mapEelement = useRef();
  let center = [-0.112869, 51.504];
  const [longitude, setLongitude] = useState(-0.12869);
  const [latitude, setLatitude] = useState(51.504);

  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },
      zoom: 14,
    });
    // setMap(map);
    if (pickup) {
      let lon = pickup[0];
      let lat = pickup[1];
      setLongitude(lon);
      setLatitude(lat);
      addToMap(map, [lon, lat]);
    }
    if (dropoff) {
      let lon = dropoff[0];
      let lat = dropoff[1];
      setLongitude(lon);
      setLatitude(lat);
      addToMap(map, [lon, lat]);
    }

    // return map.remove();
  }, [pickup, dropoff]);

  const addToMap = (map, cordinate) => {
    new tt.Marker().setLngLat(cordinate).addTo(map);
  };
  return (
    <div className="relative h-[45%] overflow-hidden w-full items-center justify-center">
      <div ref={mapEelement} className="h-full w-full"></div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
