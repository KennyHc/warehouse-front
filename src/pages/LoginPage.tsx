import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { AuthLayout } from '../components/layout/AuthLayout';
import { useAuthContext } from '../contexts/AuthContext';

export function LoginPage() {
  const { login, isAuthenticated } = useAuthContext();
  const location = useLocation();
  const from = (location.state?.from?.pathname as string) || '/products';

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return (
    <AuthLayout>
      <LoginForm onLogin={login} />
    </AuthLayout>
  );
}