import { useLocation, useNavigate, Outlet } from "react-router-dom";

import React from "react";

export const Redirect = ({ path, redirectTo }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pathname !== path) return;
    navigate(redirectTo);
  }, [pathname, path]);
  return <Outlet />;
};
