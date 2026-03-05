import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
interface Props { children: React.ReactNode; allowedRoles: string[]; fallbackPath?: string; }
const RoleGuard: React.FC<Props> = ({ children, allowedRoles, fallbackPath = '/' }) => {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to='/login' />;
  const userRole = (currentUser as { role?: string }).role || 'student';
  if (!allowedRoles.includes(userRole)) return <Navigate to={fallbackPath} />;
  return <>{children}</>;
};
export default RoleGuard;
