import { toast } from "react-hot-toast";
import Button from "../../components/Button";
import { Icons } from "../../constants/icons";
import { useState } from "react";

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
const promoNums = ["1234", "2345", "3453", "2123", "2345"];

function PromoPage() {
  const [disable, setDisable] = useState(true);
  const renderPromoCode = () => {
    const randomCode = Math.floor(Math.random() * promoNums.length);
    if (disable) {
      toast.success(`your promo code is ${promoNums[randomCode]}`);
    } else {
    }
    setDisable(false);
  };

  const enterPromoCode = (e) => {
    e.preventDefault();
    const code = e.target[0].value;
    const getCode = promoNums.some((promo) => promo === code);
    e.target[0].value = "";
    if (!getCode) {
      toast.error("wrong promo code");
      return;
    }
  };
  return (
    <main className="h-screen bg-purple">
      <div className="flex   gap-20 items-center p-6 ">
        <span>{Icons.cancel()}</span>
        <span className="text-[17px] text-white">Voucher</span>
      </div>
      <form
        className="flex  items-center justify-center mt-3  m-auto gap-3  rounded-full outline-none border-none bg-white w-[80%]"
        onSubmit={enterPromoCode}
      >
        <input
          type="text"
          placeholder="Have a promo code? enter it here"
          className="p-3 bg-none rounded-full text-[15px] outline-none border-none"
        />
        <Button className="text-white bg-purple p-2 rounded-md">Enter</Button>
      </form>
      <p className="text-white mt-2 text-[14px]  text-center ">
        don't have promo code ?
        <span className="underline" onClick={renderPromoCode}>
          Apply
        </span>
      </p>
      <div className="bg-white rounded-t-xl  flex-1  items-center  fixed bottom-0 w-full z-50 h-[70%] ">
        <div className=" flex justify-between   items-center  px-3  border-b-2 bg-">
          <span className="font-bold">Voucher available </span>
          <span>{Icons.fontIcon()} </span>
        </div>
        <div className="flex justify-center  w-full">
          <ul className="flex w-full flex-col items-center justify-center gap-3 mt-4">
            {promoDetails.map((item) => (
              <li
                className="border-b-2 w-full justify-center flex flex-col px-5"
                key={item.id}
              >
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
