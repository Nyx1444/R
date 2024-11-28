// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HousesForSale from './pages/houses-for-sale';

import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/houses-for-sale" element={<HousesForSale />} />
      </Routes>
    </Router>
  );
};

export default App;
