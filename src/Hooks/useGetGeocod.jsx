// import { useCallback, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { CLIENT_ROUTHS } from "./../constants/routes";

// function useGetGeocod() {
//   const navigate = useNavigate();
//   const [locationGeocod, setLocationGeocode] = useState(null);
//   const [destinationGeocod, setDestinationGeocod] = useState(null);

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

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let locationValue = e.target[0].value;
//     let destinationValue = e.target[1].value;

//     if (locationValue === "" && destinationValue === "") {
//       toast.error("Please  fill out the inputs");
//     }
//     update(locationValue, destinationValue);
//     locationValue = "";
//     destinationValue = "";
//     navigate(CLIENT_ROUTHS.chooseride);
//   };
//   const update = useCallback((a, b) => {
//     getGeocordinateLoction(a);
//     getGeocordinateDest(b);
//   });

//   return {
//     locationGeocod,
//     destinationGeocod,
//     handleSubmit,
//   };
// }

// export default useGetGeocod;
