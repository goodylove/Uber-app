import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function Map({ pickup }) {
  // const [map, setMap] = useState({});
  // 3.406448;
  // 6.465422;
  console.log(pickup);
  const mapEelement = useRef();
  // let center = [-0.112869, 51.504];
  // -7.4081 23.10687
  // 45.42042 - 75.69243;/
  const [longitude, setLongitude] = useState(3.406448);
  const [latitude, setLatitude] = useState(6.465422);
  // console.log(...pickup);

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
      let [lon, lat] = pickup?.slice();
      // let lat = pickup[1];
      setLongitude(lon);
      setLatitude(lat);
      console.log(lon, lat);
      // addToMap(map, [lon, lat]);
    }
    // if (dropoff) {
    //   let lon = dropoff[0];
    //   let lat = dropoff[1];
    //   setLongitude(lon);
    //   setLatitude(lat);
    //   addToMap(map, [lon, lat]);
    // }

    // return () => map.remove();
  }, [pickup]);

  // const addToMap = (map, cordinate) => {
  //   new tt.Marker({
  //     draggable: true,
  //   })
  //     .setLngLat(cordinate)
  //     .addTo(map);
  //   // map.fitBounds([cordinate], {
  //   //   padding: 30,
  //   // });
  // };
  return (
    <div className="relative h-[50%] overflow-hidden w-full items-center justify-center">
      <div ref={mapEelement} className="h-[600px] w-full p-5 "></div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
