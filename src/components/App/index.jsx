import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { ROUTER } from "./router";
import "../../App.css";
import { useEffect, useState } from "react";
import Loader from "./../Loader/index";

function App() {
  const [device, setDevice] = useState(false);

  const getWindowDemsion = function () {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [loading, setLoading] = useState(getWindowDemsion());

  useEffect(() => {
    setLoading(false);
    function handleResize() {
      setDevice(getWindowDemsion());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading)
    return (
      <div className="text-[40px] h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={ROUTER} />
    </>
  );
}
export default App;
