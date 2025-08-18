import React from "react";
import { Navigate } from "react-router-dom";
import { userService } from "../services/Api";

const ProtectedRoute = ({ children, requiredRole }) => {
  const user = userService.getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
