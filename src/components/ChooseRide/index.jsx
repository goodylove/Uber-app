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
    name: "mercedes W90",
    seater: "2-3",
    amount: 19000,
    id: 3,
  },
];

function ChooseRides() {
  return (
    <div className="bg-black text-white rounded-t-2xl  flex-1  items-center  ">
      <div className=" flex justify-between   items-center p-5">
        <span>Choose your ride </span>
        <span>{Icons.BackIcon()} </span>
      </div>
      <div className="flex justify-center  w-full">
        <ul>
          {rides.map((ride, id) => {
            return (
              <li className="flex gap-10  items-center text-[13px]" key={id} t>
                <div className="flex-col flex">
                  <p>{ride.name}</p>
                  <p>{`${ride.seater}person`}</p>
                </div>
                <div>{ride.amount}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ChooseRides;
