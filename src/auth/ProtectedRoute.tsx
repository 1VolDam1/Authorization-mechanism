import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles?: string[];
};

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, authChecked } = useAuth();
  if (!authChecked) {
    return <p>Проверка...</p>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}