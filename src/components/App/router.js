import { createBrowserRouter } from "react-router-dom";
import Home from "./../../pages/Home/index";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import { Redirect } from "../Redirect";

import Welcome from "../../pages/auth/welcome";
import PageWrapper from "../PageWrapper";
import SignIn from "./../../pages/auth/Signin/index";
import SignUp from "./../../pages/auth/Signup/index";
// import ChooseRide from "../../pages/ChooseRide";
import PromoPage from "./../../pages/PromoPage/index";
import PaymentPage from "./../../pages/PaymentPage/index";
import CancelBooking from "../../pages/CancelBooking";
import Trip from "./../../pages/trip/index";
import Success from "./../../pages/success/index";

export const ROUTER = createBrowserRouter([
  {
    path: CLIENT_ROUTHS.home,
    children: [
      {
        path: CLIENT_ROUTHS.home,
        element: <Home />,
      },
      {
        path: CLIENT_ROUTHS.promopage,
        element: <PromoPage />,
      },
      {
        path: CLIENT_ROUTHS.paymentpage,
        element: <PaymentPage />,
      },
      {
        path: CLIENT_ROUTHS.cancelbooking,
        element: <CancelBooking />,
      },
      {
        path: CLIENT_ROUTHS.trip,
        element: <Trip />,
      },
      {
        path: CLIENT_ROUTHS.success,
        element: <Success />,
      },
    ],
  },
  {
    path: CLIENT_ROUTHS.auth,
    element: (
      <Redirect path={CLIENT_ROUTHS.auth} redirectTo={CLIENT_ROUTHS.welcome} />
    ),
    children: [
      {
        path: CLIENT_ROUTHS.welcome,

        element: <Welcome />,
      },
      {
        path: CLIENT_ROUTHS.signup,
        element: <SignUp />,
      },
      {
        path: CLIENT_ROUTHS.signin,
        element: <SignIn />,
      },
    ],
  },
]);
