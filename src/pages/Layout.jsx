import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <nav className="flex space-x-6 text-blue-700 font-semibold mb-6">
        <Link to="/soins">Soins</Link>
        <Link to="/parcours">Parcours patient</Link>
        <Link to="/honoraires">Honoraires</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;