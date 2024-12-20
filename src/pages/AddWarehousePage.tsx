import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { AddWarehouseForm } from '../components/warehouse/AddWarehouseForm';

export function AddWarehousePage() {
  return (
    <PageLayout title="Add New Warehouse">
      <AddWarehouseForm />
    </PageLayout>
  );
}