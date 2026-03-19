import type { JSX } from "react";
import useAuthStore from "../store/auth";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) {
    <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
