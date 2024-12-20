import React from 'react';
import { NavLink } from 'react-router-dom';
import { Package, LogOut, Building2 } from 'lucide-react';
import { useAuthContext } from '../contexts/AuthContext';
import { Button } from './ui/Button';

export function Navbar() {
  const { logout, user } = useAuthContext();

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="nav-brand">
              <Package className="h-8 w-8 text-indigo-600" />
              <span className="nav-brand-text">WMS</span>
            </div>
            <div className="nav-links">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/products/add"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                Add Product
              </NavLink>
              <NavLink
                to="/stock"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                Stock Management
              </NavLink>
              <NavLink
                to="/warehouses/add"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                Add Warehouse
              </NavLink>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <Button
              variant="secondary"
              size="sm"
              icon={LogOut}
              onClick={logout}
            >
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}