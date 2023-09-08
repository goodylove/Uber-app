import { useNavigate } from "react-router-dom";
import Car from "../../assets/Ellipse 10.png";
import Button from "./../../components/Button/index";
import { CLIENT_ROUTHS } from "../../constants/routes";

function Success() {
  const navigate = useNavigate();
  return (
    <main className="bg-purple h-screen flex justify-center flex-col items-center">
      <img src={Car} alt="" />
      <p className="text-white">THANK YOU FOR CHOOSING OUR RIDE</p>
      <span className="text-white">Enjoy your trip</span>
      <Button
        className=" bg-black text-white rounded-full p-3 mt-5"
        onClick={() => navigate(CLIENT_ROUTHS.welcome)}
      >
        Back Home
      </Button>
    </main>
  );
}

export default Success;
