import { useContext } from "react";
import { context } from "./../../components/Context/index";

function BookingDetails() {
  const { currentUser } = useContext(context);
  return (
    <main className="h-screen  relative flex flex-col w-full ">
      <nav className=" flex w-full px-3 justify-between absolute  z-50 top-0">
        <div>{Icons.bar()}</div>
        <img
          src={currentUser?.photoURL}
          alt="user-profile"
          className="rounded-full w-10 h-10"
        />
      </nav>
      <Map />

      <ChooseRides />
    </main>
  );
}

export default BookingDetails;
