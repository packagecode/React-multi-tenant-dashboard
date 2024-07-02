import useAuthService from "@/hooks/useAuthService";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const { isAuthenticated } = useAuthService();
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;