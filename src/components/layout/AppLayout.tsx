import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}