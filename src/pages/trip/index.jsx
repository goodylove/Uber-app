import { Icons } from "../../constants/icons";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/index";
import { CLIENT_ROUTHS } from "./../../constants/routes";

function Trip() {
  return (
    <main className="bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
        <span className="text-[17px] text-white my-4">Rate Your Trip</span>
      </div>

      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[87%] mt-3 ">
        <div className=" flex justify-between   items-center  px-3 py-3   border-b-2 bg-">
          <div>
            <img src="" alt="" />
            <span>Ben Stokes</span>
          </div>
          <span>{Icons.SmsIcon()}</span>
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
