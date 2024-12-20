import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { AddProductForm } from '../components/AddProductForm';

export function AddProductPage() {
  return (
    <PageLayout title="Add New Product">
      <AddProductForm />
    </PageLayout>
  );
}