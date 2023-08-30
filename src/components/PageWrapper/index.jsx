import React from "react";

import usePageWrapper from "../../Hooks/usePageWrapper";

export default function PageWrapper({ children }) {
  usePageWrapper();
  return children;
}
