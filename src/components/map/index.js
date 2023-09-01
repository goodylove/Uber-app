import * as tt from "@tomtom-international/web-sdk-maps";
import Button from "./../../components/Button/index";
import { useEffect, useRef, useState } from "react";

function Map() {
  const longitude = 6.5244;
  const latitude = 3.3792;
  const [map, setMap] = useState({});
  const mapEelement = useRef();
  let center = [longitude, latitude];

  useEffect(() => {
    const map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
      center: center,
      zoom: 2,
    });
    // setMap(map);

    const addToMap = () => {
      let marker = new tt.Marker().setLngLat(center).addTo(map);
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
