import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as tt from "@tomtom-international/web-sdk-maps";

export default function Home() {
  const [map, setMap] = useState({});
  const mapEelement = useRef(null);

  useEffect(() => {
    let map = tt.map({
      key: "42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO",
      container: mapEelement.current,
    });

    setMap(map);
    console.log(mapEelement.current);
    console.log(map);
  }, []);
  return (
    <main className=" ">
      {/* <div className=" flex-1"></div> */}
      <div ref={mapEelement}></div>
    </main>
  );
}
// npm i @tomtom-international/web-sdk-maps
