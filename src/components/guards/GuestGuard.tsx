import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
interface Props { children: React.ReactNode; redirectTo?: string; }
const GuestGuard: React.FC<Props> = ({ children, redirectTo = '/' }) => {
  const { currentUser } = useAuth();
  if (currentUser) return <Navigate to={redirectTo} />;
  return <>{children}</>;
};
export default GuestGuard;
