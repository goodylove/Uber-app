import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "../../App.css";
import { ROUTER } from "./router";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={ROUTER} />
    </>
  );
}
export default App;
