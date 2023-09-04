import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function Map({ pickup, dropoff }) {
  // const [map, setMap] = useState({});
  // 3.406448;
  // 6.465422;
  console.log(pickup);
  const mapEelement = useRef();
  // let center = [-0.112869, 51.504];
  // -7.4081 23.10687
  // 45.42042 - 75.69243;/
  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  // console.log(...pickup);
  // 9.0765° N, 7.3986°
  // 7.491302;9.072264; abuja
  // 23.10687 - 7.4081; kanu
  // 8.53486 11.99997
  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },
      // style:
      //   "https://api.tomtom.com/style/1/style/20.4.5-*/?map=basic_night&poi=poi_main",
      zoom: 15,
    });
    // setMap(map);
    const locations = [
      {
        lat: "",
        lon: "",
      },
      {
        lat: "",
        lon: "",
      },
    ];
    if (pickup) {
      let [lat, lon] = pickup?.slice();
      // let lat = pickup[1];
      setLongitude(lon);
      setLatitude(lat);
      console.log(lat, lon);
      addToMap(map, [lon, lat]);
    }
    if (dropoff) {
      let [lat, lon] = pickup?.slice();
      addToMap(map, [lon, lat]);
      setLongitude(lon);
      setLatitude(lat);

      console.log(lat, lon);
    }
    // addToMap(map, { lat: latitude, lon: longitude });
    // return () => map.remove();
  }, [pickup, dropoff]);

  const addToMap = (map, cordinate) => {
    new tt.Marker({
      draggable: true,
    })
      .setLngLat(cordinate)
      .addTo(map);
    // map.fitBounds([cordinate], {
    //   padding: 30,
    // });
  };
  return (
    <div className="relative h-[50%]  flex  w-full items-center justify-center">
      <div className="w-[99%] flex justify-center items-center">
        <div ref={mapEelement} className="h-[600px] w-full p-5 " />
      </div>
    </div>
  );
}

export default Map;
// https://api.tomtom.com/search/2/geocode/lagos%20nigeria.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO
// var marker = new tt.Marker().setLngLat(HQ).addTo(map);
// var popup = new tt.Popup({
//   anchor: "top",
// }).setText("HeadQuarters");

// marker.setPopup(popup).togglePopup();
