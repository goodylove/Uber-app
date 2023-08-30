// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "!mapbox-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZ29vZG5lc3Nsb3ZlNTUiLCJhIjoiY2xsdzk1azg5MjZ6ZjNxcGUyMG1nbW82OCJ9.VvPRVc_mIzcZzxx3gN9inw";

// export default function useMapbox() {
//   const mapContainer = useRef(null);

//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(3);

//   useEffect(() => {
//     // if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [9.082, 8.6753],
//       zoom: zoom,
//     });
//   }, []);
//   return { mapContainer };
// }
