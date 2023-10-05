import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { ROUTER } from "./router";
import "../../App.css";

function App() {
  return (
    <>
      {window.innerWidth < 768 ? (
        <>
          <Toaster position="top-right" />
          <RouterProvider router={ROUTER} />{" "}
        </>
      ) : (
        "not avaliable in desktop device"
      )}
    </>
  );
}
export default App;
