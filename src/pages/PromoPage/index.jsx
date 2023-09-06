import Button from "../../components/Button";
import { Icons } from "../../constants/icons";

const promoDetails = [
  {
    title: "$1,00 Discount",
    text: "You just need to pay $8,00",
    valid: "valid until September 30, 2023",
    id: "1",
  },
  {
    title: "10% Cashback Guaranteed",
    text: "You just need to pay $8,00",
    valid: "valid until November 19, 2023",
    id: "2",
  },
  {
    title: "$1,00 Discount",
    text: "You just need to pay $8,00",
    valid: "valid until September 19, 2023",
    id: "3",
  },
];

function PromoPage() {
  return (
    <main className="h-screen bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
        <span className="text-[17px] text-white">Voucher</span>
      </div>
      <div className="flex justify-center mt-3 ">
        <input
          type="text"
          placeholder="Have a promo code? enter it here"
          className="p-3 rounded-full w-[80%] outline-none border-none"
        />
      </div>
      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[70%] ">
        <div className=" flex justify-between   items-center  px-3  border-b-2 bg-">
          <span className="font-bold">Voucher available </span>
          <span>{Icons.fontIcon()} </span>
        </div>
        <div className="flex justify-center  w-full">
          <ul className="flex w-full flex-col items-center justify-center gap-3 mt-4">
            {promoDetails.map((item) => (
              <li className="border-b-2 w-full justify-center flex flex-col px-5">
                <div className="my-3">
                  <p className="font-bold">{item.title}</p>
                  <span className="text-[13px]">{item.text}</span>
                </div>
                <div className=" flex gap-5 py-1">
                  <span className="flex items-center gap-2 text-[13px]">
                    {Icons.Time()}
                    {item.valid}
                  </span>
                  <Button className="bg-black text-white rounded-full p-[5px] text-[13px] w-[25%]">
                    use this
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default PromoPage;
