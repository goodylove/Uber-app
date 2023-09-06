import Button from "../../components/Button";
import { Icons } from "./../../constants/icons";

const paymentDetails = [
  {
    title: "BePay",
    balance: "$8,00",
    discount: "Get $1 discount",
    icons: `${Icons.CreditCardIcon()}`,
    id: "1",
  },
  {
    title: "BePay",
    balance: "$8,00",
    discount: "Get $1 discount",
    icons: `${Icons.CreditCardIcon()}`,
    id: "1",
  },
  {
    title: "BePay",
    balance: "$8,00",
    discount: "Get $1 discount",
    icons: `${Icons.CreditCardIcon()}`,
    id: "1",
  },
];

function PaymentPage() {
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
              <li className="border-b-2 w-full justify-center flex flex-col px-5">
                <div className="my-3">
                  <p className="font-bold">{item.title}</p>
                  <span className="text-[13px]">{item.text}</span>
                </div>
                <div className=" flex gap-5 py-1">
                  <span className="flex items-center gap-2 text-[13px]">
                    {Icons.Time()}
                  </span>
                  {item.icons()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default PaymentPage;
