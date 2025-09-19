import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Cabinet from './pages/Cabinet';
import Soins from './pages/Soins';
import Parcours from './pages/Parcours';
import Honoraires from './pages/Honoraires';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cabinet />} />
          <Route path="soins" element={<Soins />} />
          <Route path="parcours" element={<Parcours />} />
          <Route path="honoraires" element={<Honoraires />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);