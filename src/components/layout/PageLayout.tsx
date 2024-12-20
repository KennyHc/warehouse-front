import React from 'react';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="page-container">
      <h1 className="page-title">{title}</h1>
      <div className="form-card">
        {children}
      </div>
    </div>
  );
}