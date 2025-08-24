import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import ApplicationsPage from './pages/ApplicationsPage';
import CalibrationsPage from './pages/CalibrationsPage';
import SolarPage from './pages/SolarPage';
import ContactPage from './pages/ContactPage';
import InstrumentsPage from './pages/InstrumentsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/calibrations" element={<CalibrationsPage />} />
        <Route path="/solar" element={<SolarPage />} />
        <Route path="/instruments" element={<InstrumentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;