import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CarsPage from './components/CarsPage';
import FilmsPage from './components/FilmsPage';
import IndexPage from './components/IndexPage';
import './style.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route exact path="/cars" element={<CarsPage />} />
        <Route exact path="/films" element={<FilmsPage />} />
      </Routes>
    </Router>
  );
}
