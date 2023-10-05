import React, { useCallback, useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { CLIENT_ROUTHS } from "../constants/routes";
import useAuth from "./useAuth";
import { useEffect } from "react";

function usePageWrapper() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuthPage = useMemo(() => pathname.includes("auth"), [pathname]);

  const handleRedirect = useCallback(() => {
    if (!isAuthPage && !currentUser) {
      navigate(CLIENT_ROUTHS.welcome);
    } else {
      if (isAuthPage && currentUser) {
        console.log(currentUser);
        navigate(CLIENT_ROUTHS.home);
      }
    }
  }, [isAuthPage, currentUser]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect, currentUser]);
}

export default usePageWrapper;
