import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import type { LoginCredentials } from '../../types/auth';

interface LoginFormProps {
  onLogin: (credentials: LoginCredentials) => Promise<boolean>;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await onLogin(credentials);
      if (success) {
        navigate('/products');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof LoginCredentials, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Card className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          value={credentials.email}
          onChange={(value) => handleChange('email', value)}
          required
          autoComplete="email"
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          value={credentials.password}
          onChange={(value) => handleChange('password', value)}
          required
          autoComplete="current-password"
        />

        <Button
          type="submit"
          icon={LogIn}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Card>
  );
}