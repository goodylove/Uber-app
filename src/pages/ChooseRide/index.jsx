import { useContext } from "react";
import Map from "../../components/map";
import { Icons } from "../../constants/icons";
import Button from "./../../components/Button/index";
import { context } from "./../../components/Context/index";
import useGetGeocod from "../../Hooks/useGetGeocod";

function ChooseRide() {
  const { currentUser, locationGeocod, destinationGeocod } =
    useContext(context);
  // const { locationGeocod, destinationGeocod } = useGetGeocod();
  console.log(locationGeocod, destinationGeocod);

  return (
    <main className="h-screen relative">
      <nav className=" flex w-full p-3 justify-between absolute  z-50 top-0">
        <div>{Icons.bar()}</div>
        <img
          src={currentUser?.photoURL}
          alt="user-profile"
          className="rounded-full w-10 h-10"
        />
      </nav>
      <Map
        locationGeocod={locationGeocod}
        destinationGeocod={destinationGeocod}
      />
      <div className="bg-black rounded-t-3xl h-[55%] flex justify-center  items-center">
        <Button
          className="bg-purple text-white py-3 rounded-md my-3"
          type="submit"
        >
          Next
        </Button>
      </div>
    </main>
  );
}

export default ChooseRide;
