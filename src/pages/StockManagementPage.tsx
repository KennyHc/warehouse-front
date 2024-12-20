import React from 'react';
import { StockManagement } from '../components/StockManagement';

export function StockManagementPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Stock Management</h1>
      <div className="form-card">
        <StockManagement />
      </div>
    </div>
  );
}