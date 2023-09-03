import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function Map({ pickup, dropoff }) {
  // const [map, setMap] = useState({});
  // 3.406448;
  // 6.465422;
  const mapEelement = useRef();
  // let center = [-0.112869, 51.504];
  const [longitude, setLongitude] = useState(3.406448);
  const [latitude, setLatitude] = useState(6.465422);
  // console.log(pickup, dropoff);

  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },
      zoom: 10,
    });
    // setMap(map);
    if (pickup) {
      let lon = pickup[0];
      let lat = pickup[1];
      console.log(lon, lat);
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

    // map.fitBounds([longitude, latitude], {
    //   padding: 30,
    // });
    return () => map.remove();
  }, [pickup, dropoff]);

  const addToMap = (map, cordinate) => {
    const element = document.createElement("div");
    element.className = "marker";
    new tt.Marker({
      draggable: true,
      element: element,
    })
      .setLngLat(cordinate)
      .addTo(map);
  };
  return (
    <div className="relative h-[45%] overflow-hidden w-full items-center justify-center">
      <div ref={mapEelement} className="h-[600px] w-full p-5 "></div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
