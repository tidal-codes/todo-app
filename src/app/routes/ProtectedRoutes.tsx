import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/context/AuthProvider";
import { useEffect } from "react";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({
  redirectPath = "/auth/login",
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  useEffect(() => {
    console.log("loading", loading);
    console.log("user", user);
  }, [user, loading]);
  const navigate = useNavigate();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    navigate(redirectPath);
  }

  return <Outlet />;
};

export default ProtectedRoute;
