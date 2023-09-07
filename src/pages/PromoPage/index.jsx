import { toast } from "react-hot-toast";
import Button from "../../components/Button";
import { Icons } from "../../constants/icons";
import { useMemo, useState } from "react";

const promoDetails = [
  {
    title: "$1,00 Discount",
    text: "You just need to pay $8,00",

    id: "1",
    promo: "1234",
  },
  {
    title: "10% Cashback Guaranteed",
    text: "You just need to pay $8,00",

    id: "2",
    promo: "2345",
  },
  {
    title: "$1,00 Discount",
    text: "You just need to pay $8,00",

    id: "3",
    promo: "3453",
  },
  {
    title: "$1,00 Discount",
    text: "You just need to pay $8,00",

    id: "4",
    promo: "2123",
  },
  {
    title: "$1,00 Discount",
    text: "You just need to pay $8,00",

    id: "5",
    promo: "2345",
  },
];

function PromoPage() {
  const [disable, setDisable] = useState(true);
  const [discount, setDiscount] = useState([]);
  const promoNums = ["1234", "2345", "3453", "2123", "2345"];

  const renderPromoCode = () => {
    const randomCode = Math.floor(Math.random() * promoNums.length);
    if (disable) {
      toast.success(`your promo code is ${promoNums[randomCode]}`);
    } else {
    }
    setDisable(false);
  };

  const vaildDate = useMemo(() => {
    const today = new Date();
    const date = today.getDate();
    const year = today.getFullYear();

    const month = new Date().toLocaleString("en-US", { month: "long" });

    promoDetails.forEach(
      (item) => (item.validProm = `valid until ${month} ${date}, ${year}`)
    );
  }, [today]);

  const enterPromoCode = (e) => {
    e.preventDefault();
    vaildDate();
    const code = e.target[0].value;
    const getCode = promoNums.find((promo) => promo === code);
    e.target[0].value = "";
    if (!getCode) {
      toast.error("wrong promo code");
      return;
    }
    const getDetails = [];
    const getpromoCodeFromPromoDetails = promoDetails.find(
      (item) => item.promo === getCode
    );
    getDetails.push(getpromoCodeFromPromoDetails);
    setDiscount(getDetails);
    console.log(discount);
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
        <Button className="text-white bg-purple p-2 rounded-full">Enter</Button>
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

        {discount.length === 0 && (
          <div className="w-full flex justify-center items-center mt-40">
            <p className="text-[18px] ">Apply for your promo code </p>
          </div>
        )}
        {discount.length > 0 && (
          <div className="flex justify-center  w-full">
            <ul className="flex w-full flex-col items-center justify-center gap-3 mt-4">
              {discount.map((item) => (
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
        )}
      </div>
    </main>
  );
}

export default PromoPage;
