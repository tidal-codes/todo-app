import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/context/AuthProvider";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({
  redirectPath = "/auth/login",
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
