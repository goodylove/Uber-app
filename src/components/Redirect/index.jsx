import { useLocation, useNavigate, Outlet } from "react-router-dom";

import React, { useEffect } from "react";

export const Redirect = ({ path, redirectTo }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== path) return;
    navigate(redirectTo);
  }, [pathname, path]);
  return <Outlet />;
};
