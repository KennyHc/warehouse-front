import React, { useState } from 'react';
import { ProductsTable } from '../components/ProductsTable';
import { Pagination } from '../components/ui/Pagination';

// Placeholder data
const MOCK_PRODUCTS = [
  { id: 1, name: 'Laptop XPS 15', category: 'Electronics', description: 'High-end laptop', low_stock_level: 5, created_at: '2024-03-15', updated_at: '2024-03-15' },
  { id: 2, name: 'Office Chair', category: 'Furniture', description: 'Ergonomic chair', low_stock_level: 15, created_at: '2024-03-15', updated_at: '2024-03-15' },
  { id: 3, name: 'Wireless Mouse', category: 'Electronics', description: 'Bluetooth mouse', low_stock_level: 8, created_at: '2024-03-15', updated_at: '2024-03-15' },
  { id: 4, name: 'Desk Lamp', category: 'Lighting', description: 'LED desk lamp', low_stock_level: 12, created_at: '2024-03-15', updated_at: '2024-03-15' },
  { id: 5, name: 'Notebook', category: 'Stationery', description: 'A5 notebook', low_stock_level: 3, created_at: '2024-03-15', updated_at: '2024-03-15' },
];

const ITEMS_PER_PAGE = 5;

export function ProductsListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(MOCK_PRODUCTS.length / ITEMS_PER_PAGE);

  const paginatedProducts = MOCK_PRODUCTS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <ProductsTable products={paginatedProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}