import { useContext, useState } from "react";
import { context } from "../../components/Context/index";
import Map from "../../components/map/index";
import { Icons } from "../../constants/icons";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import Button from "./../../components/Button/index";
import { Link } from "react-router-dom";
import CarImg from "../../assets/Ellipse 10.png";
// import { Icons } from "./../../constants/icons";

const reasons = [
  {
    question: "I don’t need this journey.",
    id: 1,
  },
  {
    question: "I want to change the details of the journey.",
    id: 2,
  },
  {
    question: "The driver took too long to be appointed.",
    id: 3,
  },
  {
    question: "Other",
    id: 4,
  },
];

function CancelBooking() {
  const [click, setClick] = useState(0);

  const handleSelect = (id) => {
    setClick(id);
  };
  return (
    <main className="h-screen bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
        <span className="text-[17px] text-white my-4">Cancel Booking</span>
      </div>
      <div className="flex justify-center  relative">
        <img src={CarImg} alt="" width={100} height={100} />
        <span className="absolute   right-44">{Icons.cancelbook()}</span>
      </div>

      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[58%]   ">
        <div className=" flex justify-between   items-center  px-3   border-b-2  py-6">
          <span className="font-bold text-center">
            Why do you want to cancel ?
          </span>
        </div>
        <div className="mt-4">
          <ul>
            {reasons.map((text) => {
              return (
                <li key={text.id} className="flex  gap-5 p-2 cursor-pointer">
                  <span onClick={() => handleSelect(text.id)}>
                    {click === text.id
                      ? Icons.payIconActive()
                      : Icons.payIcon()}
                  </span>
                  <span>{text.question}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <Link to={CLIENT_ROUTHS.home}>
              <Button className="bg-black text-white p-2 rounded-3xl w-40">
                Send
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CancelBooking;
