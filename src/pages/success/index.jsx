import Car from "../../assets/Ellipse 10.png";

function Success() {
  return (
    <main className="bg-purple h-screen flex justify-center flex-col items-center">
      <img src={Car} alt="" />
      <p>THANK YOU FOR CHOOSING OUR RIDE</p>
      <span>Enjoy your trip</span>
    </main>
  );
}

export default Success;
