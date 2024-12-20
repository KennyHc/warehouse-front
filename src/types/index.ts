export interface Product {
  id?: number;
  name: string;
  category: string;
  description?: string;
  low_stock_level: number;
}

export interface Stock {
  id?: number;
  product_id: number;
  quantity: number;
  warehouse_id: number;
  low?: number;
}

export interface Warehouse {
  id?: number;
  name: string;
  location: string;
}