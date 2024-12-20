import { useState, useEffect } from 'react';
import type { LoginCredentials, AuthState } from '../types/auth';

const AUTH_STORAGE_KEY = 'wms_auth';

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {
      isAuthenticated: false,
      user: null,
    };
  });

  useEffect(() => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState));
  }, [authState]);

  const login = async (credentials: LoginCredentials) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setAuthState({
      isAuthenticated: true,
      user: { email: credentials.email },
    });
    
    return true;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
}