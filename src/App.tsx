import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';
import HistoryPage from './pages/HistoryPage.tsx';
import ApplicationsPage from './pages/ApplicationsPage.tsx';
import CalibrationsPage from './pages/CalibrationsPage.tsx';
import SolarPage from './pages/SolarPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import InstrumentsPage from './pages/InstrumentsPage.tsx';

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