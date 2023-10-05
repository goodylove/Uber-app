import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { CLIENT_ROUTHS } from "../constants/routes";
import useAuth from "./useAuth";

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
        navigate(CLIENT_ROUTHS.signin);
      }
    }
  }, [isAuthPage, currentUser]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect, currentUser]);
}

export default usePageWrapper;
