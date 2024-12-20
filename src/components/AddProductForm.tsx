import React from 'react';
import { PackagePlus } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Product } from '../types';
import { FormInput } from './ui/FormInput';
import { Button } from './ui/Button';
import { useForm } from '../hooks/useForm';

export function AddProductForm() {
  const { formData: product, handleChange, resetForm } = useForm<Omit<Product, 'id'>>({
    name: '',
    category: '',
    description: '',
    low_stock_level: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', product);
    toast.success('Product added successfully!');
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput
        id="name"
        label="Product Name"
        value={product.name}
        onChange={(value) => handleChange('name', value)}
        required
      />

      <FormInput
        id="category"
        label="Category"
        value={product.category}
        onChange={(value) => handleChange('category', value)}
        required
      />

      <FormInput
        id="description"
        label="Description"
        type="textarea"
        value={product.description || ''}
        onChange={(value) => handleChange('description', value)}
      />

      <FormInput
        id="lowStock"
        label="Low Stock Level"
        type="number"
        value={product.low_stock_level}
        onChange={(value) => handleChange('low_stock_level', value)}
        required
        min={0}
      />

      <Button type="submit" icon={PackagePlus}>
        Add Product
      </Button>
    </form>
  );
}