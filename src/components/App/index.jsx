import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { ROUTER } from "./router";
import "../../App.css";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={ROUTER} />
    </>
  );
}
export default App;
