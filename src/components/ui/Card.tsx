import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white shadow-xl rounded-lg p-8 border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}