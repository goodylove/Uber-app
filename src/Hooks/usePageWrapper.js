import React, { useCallback, useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { CLIENT_ROUTHS } from "../constants/routes";
import { context } from "./../components/Context/index";

function usePageWrapper() {
  const { currentUser } = React.useContext(context);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuthPage = useMemo(() => pathname.includes("auth"), [pathname]);

  const handleRedirect = useCallback(() => {
    if (!isAuthPage && !currentUser) {
      navigate(CLIENT_ROUTHS.welcome);
    } else {
      if (isAuthPage && currentUser) {
        navigate(CLIENT_ROUTHS.home);
      }
    }
  }, [isAuthPage, currentUser]);

  React.useEffect(() => {
    handleRedirect();
  }, [handleRedirect]);
}

export default usePageWrapper;
