import { createBrowserRouter } from "react-router-dom";
import Home from "./../../pages/Home/index";
import { CLIENT_ROUTHS } from "./../../constants/routes";
import { Redirect } from "../Redirect";

import Welcome from "../../pages/auth/welcome";
import PageWrapper from "../PageWrapper";
import SignIn from "./../../pages/auth/Signin/index";
import SignUp from "./../../pages/auth/Signup/index";
import ChooseRide from "../../pages/ChooseRide";

export const ROUTER = createBrowserRouter([
  {
    path: CLIENT_ROUTHS.home,
    children: [
      {
        path: CLIENT_ROUTHS.home,
        element: (
          <PageWrapper>
            <Home />
          </PageWrapper>
        ),
      },
      {
        path: CLIENT_ROUTHS.chooseride,
        element: (
          <PageWrapper>
            <ChooseRide />
          </PageWrapper>
        ),
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

        element: (
          <PageWrapper>
            <Welcome />
          </PageWrapper>
        ),
      },
      {
        path: CLIENT_ROUTHS.signup,
        element: (
          <PageWrapper>
            <SignUp />
          </PageWrapper>
        ),
      },
      {
        path: CLIENT_ROUTHS.signin,
        element: (
          <PageWrapper>
            <SignIn />
          </PageWrapper>
        ),
      },
    ],
  },
]);
