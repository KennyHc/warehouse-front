import React, { useState } from 'react';
import { Package } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Stock } from '../types';
import { FormInput } from './ui/FormInput';
import { Button } from './ui/Button';

export function StockManagement() {
  const [stock, setStock] = useState<Stock>({
    product_id: 0,
    quantity: 0,
    warehouse_id: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Stock update:', stock);
    toast.success('Stock updated successfully!');
    setStock({
      product_id: 0,
      quantity: 0,
      warehouse_id: 1,
    });
  };

  const handleChange = (field: keyof Stock, value: string) => {
    setStock((prev) => ({
      ...prev,
      [field]: parseInt(value) || 0,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput
        id="productId"
        label="Product ID"
        type="number"
        value={stock.product_id}
        onChange={(value) => handleChange('product_id', value)}
        required
        min={1}
      />

      <FormInput
        id="quantity"
        label="Quantity to Add"
        type="number"
        value={stock.quantity}
        onChange={(value) => handleChange('quantity', value)}
        required
        min={1}
      />

      <FormInput
        id="warehouseId"
        label="Warehouse ID"
        type="number"
        value={stock.warehouse_id}
        onChange={(value) => handleChange('warehouse_id', value)}
        required
        min={1}
      />

      <Button type="submit" icon={Package}>
        Update Stock
      </Button>
    </form>
  );
}