import Button from "./../Button/index";
import { Icons } from "./../../constants/icons";
import { useState } from "react";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import { Link, useNavigate } from "react-router-dom";

const rides = [
  {
    name: "Toyato Camry",
    seater: "2-3",
    amount: 8000,
    id: 1,
  },
  {
    name: "Lexus R700",
    seater: "2-3",
    amount: 9000,
    id: 2,
  },
  {
    name: "Mercedes W90",
    seater: "2-3",
    amount: 19000,
    id: 3,
  },
];
function ChooseRides() {
  const [selectedItem, setSelectedItem] = useState();
  const [isSelected, setSelected] = useState(false);
  const navigate = useNavigate();

  const getSelectedRide = (id) => {
    const selected = rides.find((ride) => ride.id === id);
    setSelectedItem(selected);
    setSelected(true);
  };
  return (
    <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 ">
      <div className=" flex justify-between   items-center  px-3  border-b-2 bg-">
        <span>Choose your ride </span>
        <span className=" cursor-pointer">{Icons.fontIcon()} </span>
      </div>
      <div className="flex justify-center  w-full">
        <ul className="flex w-full flex-col items-center justify-center gap-3">
          {rides?.map((ride) => {
            return (
              <li
                className={`flex justify-between  px-3  py-2 items-center text-[13px] w-full cursor-pointer  hover:bg-gray-300  hover:text-white ${
                  selectedItem?.id === ride?.id ? "bg-purple text-white" : ""
                }`}
                key={ride.id}
                onClick={() => getSelectedRide(ride.id)}
              >
                <div className="flex-col flex">
                  <p className="font-bold text-[14px] ">{ride.name}</p>
                  <p className="pl-2">{`${ride.seater} person`}</p>
                </div>
                <div>${ride.amount}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" flex  justify-center  p-5    shadow-3xl flex-col ">
        <div className="flex justify-between px-2">
          <select
            name=""
            id=""
            className="outline-none border-none text-[13px]"
          >
            <option value="cash">cash</option>
            <option value="Transfer">Transfer</option>
            <option value="Debit card">Debit card</option>
          </select>

          <Button className="bg-gray-200 rounded-full p-[5px]">
            <span className="text-[10px] flex items-center gap-1">
              {Icons.PromoCode()}
              PromoCode
            </span>
          </Button>
        </div>
        {isSelected && (
          <Link to={CLIENT_ROUTHS.promopage} state={selectedItem}>
            <div className="flex justify-center w-full">
              <Button className="bg-black text-white justify-between px-3 flex rounded-full items-center  w-[81%] mt-5">
                <span className="text-[14px]">{`Book this car  `}</span>
                <span className="flex items-center justify-center mt-1">
                  ${selectedItem.amount}
                  {Icons.BackIcon()}
                </span>
              </Button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ChooseRides;
