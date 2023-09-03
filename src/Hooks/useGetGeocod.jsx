// import { useCallback, useEffect, useState } from "react";

// function useGetGeocod() {
//   const [pick,setPick]= useState()
//   const getGeocordinateLoction = async (value) => {
//     try {
//       const res = await fetch(
//         `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
//       );
//       const data = await res.json();
//       if (data) {
//         const result = data?.results[0]?.position;
//         const outPut = Object?.values(result);
//         setLocationGeocode(outPut);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const getGeocordinateDest = async (value) => {
//     try {
//       const res = await fetch(
//         `https://api.tomtom.com/search/2/geocode/${value}.json?key=42sj3JewKtwZSgwb8lSmGKThXJsp0ZxO`
//       );
//       const data = await res.json();
//       if (data) {
//         const result = data?.results[0]?.position;
//         const outPut = Object?.values(result);
//         setDestinationGeocod(outPut);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return {};
// }

// export default useGetGeocod;
