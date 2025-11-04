import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePurchase?: string; // courseId nếu cần mua khóa học
}

const ProtectedRoute = ({ children, requirePurchase }: ProtectedRouteProps) => {
  const { currentUser, userData } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (requirePurchase && userData) {
    const hasPurchased = userData.purchasedCourses.includes(requirePurchase);
    if (!hasPurchased) {
      return <Navigate to="/courses" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
