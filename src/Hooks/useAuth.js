import { useContext } from "react";
import { context } from "../components/Context";

function useAuth() {
  return useContext(context);
}

export default useAuth;
