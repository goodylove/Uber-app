import Button from "./../Button/index";
import { Icons } from "./../../constants/icons";

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
  return (
    <div className="bg-slate-50 rounded-t-3xl  flex-1  items-center shadow-3xl  ">
      <div className=" flex justify-between   items-center  px-3 py-2 border-b-2 bg-white">
        <span>Choose your ride </span>
        <span>{Icons.fontIcon()} </span>
      </div>
      <div className="flex justify-center  w-full">
        <ul className="flex w-full flex-col items-center justify-center">
          {rides.map((ride, id) => {
            return (
              <li
                className="flex justify-between  px-3  py-2 items-center text-[13px] w-full cursor-pointer"
                key={id}
                t
              >
                <div className="flex-col flex">
                  <p className="font-bold text-[14px] ">{ride.name}</p>
                  <p className="pl-2">{`${ride.seater}person`}</p>
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
        <div className="flex justify-center w-full">
          <Button className="bg-black text-white justify-center gap-10 flex rounded-full items-center  w-[81%] mt-5">
            <span className="text-[14px]">Book this car $900</span>
            <span>{Icons.BackIcon()}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChooseRides;
