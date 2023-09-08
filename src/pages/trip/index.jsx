import { Icons } from "../../constants/icons";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/index";
import { CLIENT_ROUTHS } from "./../../constants/routes";

function Trip() {
  return (
    <main className="bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
        <span className="text-[17px] text-white my-4">Payment Method</span>
      </div>

      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[90%] mt-3 ">
        <div className=" flex justify-between   items-center  px-3 py-3   border-b-2 bg-">
          <span className="font-bold">Choose Payment Method </span>
          <span>{Icons.fontIcon()} </span>
        </div>
        {/* <div className="flex justify-center  w-full my-6">
          <ul className="flex w-full flex-col items-center justify-center gap-3 mt-4">
            {paymentDetails.map((item) => (
              <li
                className="border-b-2 w-full gap-40  items-center flex   px-5"
                key={item.id}
              >
                <div className=" flex gap-5 py-1 items-center">
                  <span className="bg-purple w-8 h-8 rounded-full flex items-center justify-center">
                    {item.icons}
                  </span>
                  <div className="my-3">
                    <p className="font-bold">{item.title}</p>
                    <span className="text-[13px]">
                      {" "}
                      Balance: ${item.balance}
                    </span>
                  </div>
                </div>

                <div onClick={() => setSelect(item.id)}>
                  {select === item.id ? Icons.payIconActive() : Icons.payIcon()}
                </div>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex justify-between p-3  gap-10  items-center mt-4">
          <Link to={CLIENT_ROUTHS.home}>
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