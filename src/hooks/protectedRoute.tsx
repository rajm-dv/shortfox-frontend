import type { JSX } from "react";
import { Navigate } from "react-router-dom";

import useAuthStore from "../store/auth";

const ProtectedRouter = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, token } = useAuthStore();

  if (token && !isAuthenticated) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRouter;
