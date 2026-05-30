import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Spinner } from "./Spinner";

export function ProtectedRoute({ children, requireAuth = false }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <Spinner fullScreen />;
    if (requireAuth && user?.isGuest) { return <Navigate to="/login" state={{ from: location }} replace />; }
    return children;
}