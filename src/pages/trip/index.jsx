import { Icons } from "../../constants/icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "./../../components/Button/index";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import DriverImg from "../../assets/user-3.jpg";
import { useSignUp } from "../../Hooks/useSignUp";
import { useState } from "react";
import usePageWrapper from "./../../Hooks/usePageWrapper";

function Trip() {
  const [rate, setRate] = useState(0);
  const [hoverOnRate, setHoverOnRate] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const navigate = useNavigate();

  const star = Array(5).fill(0);

  const handleClick = (value) => setCurrentValue(value);

  const handleMouseEnter = (value) => setHoverOnRate(value);
  const handleMouseLeave = () => setHoverOnRate();
  return (
    <main className="bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span onClick={() => navigate(CLIENT_ROUTHS.home)}>
          {Icons.cancel()}
        </span>
        <span className="text-[17px] text-white my-4">Rate Your Trip</span>
      </div>

      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[87%] mt-3 ">
        <div className=" flex justify-between   items-center  px-5 py-3   bg-">
          <div className="flex items-center gap-3">
            <img src={DriverImg} alt="" className="rounded-full w-10 h-10" />
            <div>
              <span className="  font-bold"> Ben Stokes</span>
              <span className="flex text-[14px] gap-2">{Icons.star()}4.5</span>
            </div>
          </div>
          <span>{Icons.SmsIcon()}</span>
        </div>

        <p className="text-center mt-2 font-bold">How Is Your Trip ?</p>
        <div className="flex justify-center mt-3">
          {star.map((_, i) => (
            <span key={i} onClick={() => handleClick(i + 1)}>
              {i + 1 <= currentValue ? Icons.starBig() : Icons.rate()}
            </span>
          ))}
        </div>

        <div className="flex justify-center rounded-xl  my-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="write your feedback"
            className="border-2 rounded-xl p-1 outline-none  "
          ></textarea>
        </div>

        <div className=" w-full">
          <h3 className="px-4 my-3 font-bold">Trip Detail</h3>
          <div className="bg-gray-200 w-full px-4 py-1">
            <div className="flex gap-3  mt-5">
              <div className="flex flex-col  justify-center items-center">
                <span className="border">{Icons.payIconActive()}</span>
                <span>{Icons.line()}</span>
                <span>{Icons.Destination()}</span>
              </div>

              <div className="flex flex-col gap-4  ">
                <span>pick up</span>
                <span className="mt-3">drop off</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full px-3">
          <h2 className="px-4 my-3 font-bold">Payment Details</h2>
          <div className="px-4">
            <div className="flex justify-between">
              <span>Trip Expenses</span>
              <span>$8000</span>
            </div>
            <div className="flex justify-between">
              <span>Trip Discount</span>
              <span>$7000</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>$2003</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Button
            className="bg-black text-white rounded-full  w-40 p-3 "
            onClick={() => navigate(CLIENT_ROUTHS.success)}
          >
            Submit
          </Button>
        </div>
        {/* 
        <div className="flex justify-between p-3  gap-10  items-center mt-4">
          <Link to={CLIENT_ROUTHS.trip}>
            <Button className="bg-black text-white m-auto p-3 rounded-xl">
              Continue
            </Button>
          </Link>
          <Link to={CLIENT_ROUTHS.cancelbooking}>
            <Button className="bg-black text-white m-auto p-3 rounded-xl">
              Cancel Booking
            </Button>
          </Link>
        </div> */}
      </div>
    </main>
  );
}

export default Trip;
