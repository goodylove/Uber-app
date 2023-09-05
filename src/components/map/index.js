import * as tt from "@tomtom-international/web-sdk-maps";
import mapServices from "@tomtom-international/web-sdk-services";

import { useEffect, useMemo, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function Map({ pickup, dropoff }) {
  const mapEelement = useRef();

  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  const [longitude1, setLongitude1] = useState(3.3884);
  const [latitude1, setLatitude1] = useState(6.45114);
  const location = [];

  // get distance function
  //   const calculateDistance = async () => {
  //     try {
  //       const res =
  //         await fetch(`https://api.tomtom.com/routing/1/calculateRoute/${longitude},${latitude}:${longitude1},${latitude1}/json?routeRepresentation=summaryOnly&instructionsType=text&key=${process.env.REACT_APP_TOM_TOM_KEY}

  // `);
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const callbackFun = useMemo(async () => {
  //     await calculateDistance();
  //   }, [pickup, dropoff]);

  console.log(location);
  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_KEY,
      container: mapEelement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },

      zoom: 8,
    });
    map.addControl(new tt.FullscreenControl());

    map.addControl(new tt.NavigationControl());

    if (!pickup && !dropoff) {
      new tt.Marker({ draggable: true })
        .setLngLat([longitude, latitude])
        .addTo(map);
    } else if (pickup && dropoff) {
      setLongitude(pickup.lon);
      setLatitude(pickup.lat);
      setLongitude1(dropoff.lon);
      setLatitude1(dropoff.lat);
      // callbackFun();

      // setTimeout(() => {
      //   calculateDistance(pickup.lon, pickup.lat, dropoff.lon, dropoff.lat);
      // }, 2000);

      location.push(
        { lon: pickup.lon, lat: pickup.lat, from: "pickup" },
        { lon: dropoff.lon, lat: dropoff.lat, from: "dropoff" }
      );

      location.forEach(function (position) {
        const marker = new tt.Marker({ draggable: true })
          .setLngLat(position)
          .addTo(map);

        const popup = new tt.Popup({
          anchor: "left",
        }).setText(position.from);

        marker.setPopup(popup).togglePopup();
      });
    }
  }, [pickup, dropoff, longitude, latitude, longitude1, latitude1]);

  return (
    <div className=" flex-1  w-full items-center justify-center">
      <div className="w-[99%]  h-[400px] flex justify-center items-center">
        <div ref={mapEelement} className=" w-full p-5  h-full" />
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
