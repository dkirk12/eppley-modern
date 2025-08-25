
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home.tsx';
import HistoryPage from './pages/HistoryPage.tsx';
import ApplicationsPage from './pages/ApplicationsPage.tsx';
import CalibrationsPage from './pages/CalibrationsPage.tsx';
import SolarPage from './pages/SolarPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import InstrumentsPage from './pages/InstrumentsPage.tsx';
import InstrumentDetail from './pages/InstrumentDetail.tsx';

const NotFound: React.FC = () => (
  <main className="section container">
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </main>
);

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
        <Route path="/instruments/:slug" element={<InstrumentDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
