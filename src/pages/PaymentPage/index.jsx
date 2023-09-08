import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import { Icons } from "./../../constants/icons";
import { useEffect } from "react";
import { CLIENT_ROUTHS } from "../../constants/routes";

const paymentDetails = [
  {
    title: "Cash",

    discount: "Get $1 discount",
    icons: Icons.cashIcon(),
    id: "2",
  },
  {
    title: "Credit Card",

    discount: "Get $1 discount",
    icons: Icons.CreditCardIcon(),
    id: "3",
  },
  {
    title: "Paypal",

    discount: "Get $1 discount",
    icons: Icons.PayPal(),
    id: "4",
  },
];

function PaymentPage() {
  const { state } = useLocation();

  paymentDetails.forEach((item) => (item.balance = state?.amount));

  return (
    <main className="h-screen bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
        <span className="text-[17px] text-white my-4">Payment Method</span>
      </div>

      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[80%] mt-3 ">
        <div className=" flex justify-between   items-center  px-3   border-b-2 bg-">
          <span className="font-bold">Choose Payment Method </span>
          <span>{Icons.fontIcon()} </span>
        </div>
        <div className="flex justify-center  w-full">
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

                <div>{Icons.payIcon()}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Link to={CLIENT_ROUTHS.cancelbooking}>
            <Button className="bg-black text-white m-auto p-3 rounded-full">
              View Booking Details
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PaymentPage;
