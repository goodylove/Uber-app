import { Icons } from "../../constants/icons";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/index";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import DriverImg from "../../assets/user-3.jpg";
import { useSignUp } from "../../Hooks/useSignUp";
import { useState } from "react";

function Trip() {
  const [rate, setRate] = useState(0);
  const [hoverOnRate, setHoverOnRate] = useState();
  const [currentValue, setCurrentValue] = useState(0);

  const star = Array(5).fill(0);

  const handleClick = (value) => setCurrentValue(value);

  const handleMouseEnter = (value) => setHoverOnRate(value);
  const handleMouseLeave = () => setHoverOnRate();
  return (
    <main className="bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
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
            <span
              onClick={() => handleClick(i + 1)}
              onMouseOver={() => handleMouseEnter(i + 1)}
              onMouseLeave={handleMouseLeave}
            >
              {currentValue || hoverOnRate > i ? Icons.starBig() : Icons.rate()}
            </span>
          ))}
        </div>

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
        </div>
      </div>
    </main>
  );
}

export default Trip;
