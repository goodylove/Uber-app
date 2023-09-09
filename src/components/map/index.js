import * as tt from "@tomtom-international/web-sdk-maps";
import mapServices from "@tomtom-international/web-sdk-services";

import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./../../components/Button/index";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

function Map({ pickup, dropoff }) {
  const mapEelement = useRef();

  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  const [longitude1, setLongitude1] = useState(3.3884);
  const [latitude1, setLatitude1] = useState(6.45114);
  const location = [];
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [secconds, setSecconds] = useState();
  const [storeEstimateTime, seStoreEstimateTime] = useState();

  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_KEY,
      container: mapEelement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },

      zoom: 4,
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

      location.push(
        { lon: pickup.lon, lat: pickup.lat, from: "From" },
        { lon: dropoff.lon, lat: dropoff.lat, from: "To" }
      );
      addToMap(map, location);
      getTravelDistance(storeEstimateTime ?? "");
      try {
        const service = mapServices.services
          .calculateRoute({
            key: process.env.REACT_APP_TOM_TOM_KEY,
            locations: location,
          })
          .then(function (response) {
            let geojson = response.toGeoJson();

            seStoreEstimateTime(
              geojson.features[0].properties.summary.travelTimeInSeconds
            );
            map.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: geojson,
              },
              paint: {
                "line-color": "purple",
                "line-width": 4,
              },
            });
            const bounds = new tt.LngLatBounds(location);
            geojson.features[0].geometry.coordinates.forEach(function (point) {
              bounds.extend(tt.LngLat.convert(point));
            });
            map.fitBounds(bounds, { padding: 10 });
          });
      } catch (error) {}
    }
    return () => map.remove();
  }, [pickup, dropoff, longitude, latitude, longitude1, latitude1]);

  const addToMap = useCallback(
    (map, location) => {
      location.forEach(function (position) {
        const marker = new tt.Marker({ draggable: true })
          .setLngLat(position)
          .addTo(map);

        const popup = new tt.Popup({
          anchor: "left",
        }).setText(position.from);

        marker.setPopup(popup).togglePopup();
      });
    },
    [pickup, dropoff]
  );

  const getTravelDistance = useCallback(
    function (milliseconds) {
      const hour = Math.floor(milliseconds / 3600);
      const remaingSecondsAfterHours = milliseconds % 3600;
      const min = Math.floor(remaingSecondsAfterHours / 60);
      const seconds = remaingSecondsAfterHours % 60;

      setHours(hour);
      setMinutes(min);
      setSecconds(seconds);
      console.log(milliseconds);
    },
    [pickup, dropoff]
  );

  return (
    <div className=" flex-1  w-full items-center justify-center">
      <div className="w-[100%]  h-[500px] flex justify-center items-center relative">
        <div ref={mapEelement} className=" w-full   h-full" />
        {storeEstimateTime && (
          <div className="bg-white rounded-md text-[13px] p-8  absolute left-4 top-[50px]">
            <img src="" />
            <p>
              Your journey will take {hours < 1 ? "" : `${hours}hr`} {minutes}
              min and {secconds}sec
            </p>
          </div>
        )}
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
