import { useContext } from "react";
import { context } from "../../components/Context/index";
import Map from "../../components/map/index";
import { Icons } from "../../constants/icons";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import Button from "./../../components/Button/index";
import { Link } from "react-router-dom";
import CarImg from "../../assets/Ellipse 10.png";
// import { Icons } from "./../../constants/icons";

function CancelBooking() {
  return (
    <main className="h-screen bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        {/* <span>{Icons.cancel()}</span> */}
        <span className="text-[17px] text-white my-4">Cancel Booking</span>
      </div>
      <div className="flex justify-center ">
        {/* <span>{Icons.cancelbook()}</span> */}
        <img src={CarImg} alt="" />
      </div>

      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[47%]  ">
        <div className=" flex justify-between   items-center  px-3   border-b-2 bg-">
          <span className="font-bold">Why do you want to cancel </span>
          {/* <span>{Icons.fontIcon()} </span> */}
        </div>
      </div>
    </main>
  );
}

export default CancelBooking;
