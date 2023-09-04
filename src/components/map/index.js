import * as tt from "@tomtom-international/web-sdk-maps";

import { useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function Map({ pickup, dropoff }) {
  console.log(pickup);
  const mapEelement = useRef();

  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  // const [longitude1, setLongitude1] = useState(-0.112869);
  // const [latitude1, setLatitude1] = useState(51.504);
  // const cent = [
  //   {
  //     lat: +latitude,
  //     lon: +longitude,
  //   },
  //   // {
  //   //   lat: +latitude1,
  //   //   lon: +longitude1,
  //   // },
  // ];
  const location = [];
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

    // if (pickup) {
    //   let [lat, lon] = pickup?.slice();
    //   // let lat = pickup[1];
    //   setLongitude(lon);
    //   setLatitude(lat);
    //   console.log(lat, lon);
    //   addToMap(map, [lon, lat]);
    // }
    // if (dropoff) {
    //   let [lat, lon] = pickup?.slice();
    //   addToMap(map, [lon, lat]);
    //   setLongitude(lon);
    //   setLatitude(lat);

    //   console.log(lat, lon);
    // }

    if (pickup) {
      location.push(pickup, dropoff);

      setLongitude(pickup.lon);
      setLatitude(pickup.lat);
      addToMap(map);
    }
    if (dropoff) {
      location.push(dropoff);
      // let [lat, lon] = dropoff?.slice();
      // setLongitude1(dropoff.lon);
      // setLatitude1(dropoff.lat);
      addToMap(map);
    }
    addToMap(map);

    // addToMap(map, { lat: latitude, lon: longitude });
    // return () => map.remove();
  }, [pickup, dropoff]);

  const addToMap = (map) => {
    location.forEach((point) => {
      console.log(point);
      new tt.Marker({
        draggable: true,
      })
        .setLngLat(point)
        .addTo(map);
    });

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
