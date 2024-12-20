import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/LoginPage';
import { AddProductPage } from './pages/AddProductPage';
import { StockManagementPage } from './pages/StockManagementPage';
import { ProductsListPage } from './pages/ProductsListPage';
import { AddWarehousePage } from './pages/AddWarehousePage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsListPage />} />
              <Route path="/products/add" element={<AddProductPage />} />
              <Route path="/stock" element={<StockManagementPage />} />
              <Route path="/warehouses/add" element={<AddWarehousePage />} />
            </Route>
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;