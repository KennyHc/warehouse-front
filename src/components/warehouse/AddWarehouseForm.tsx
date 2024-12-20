import React from 'react';
import { Building2 } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Warehouse } from '../../types';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';
import { useForm } from '../../hooks/useForm';

export function AddWarehouseForm() {
  const { formData: warehouse, handleChange, resetForm } = useForm<Omit<Warehouse, 'id'>>({
    name: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Warehouse data:', warehouse);
    toast.success('Warehouse added successfully!');
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput
        id="name"
        label="Warehouse Name"
        value={warehouse.name}
        onChange={(value) => handleChange('name', value)}
        required
      />

      <FormInput
        id="location"
        label="Location"
        value={warehouse.location}
        onChange={(value) => handleChange('location', value)}
        required
      />

      <Button type="submit" icon={Building2}>
        Add Warehouse
      </Button>
    </form>
  );
}