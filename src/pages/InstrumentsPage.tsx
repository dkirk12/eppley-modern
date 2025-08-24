import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';
import { Link } from 'react-router-dom';

const InstrumentsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/radiation-background.png"
        title="Our Instruments"
        subtitle="Precision radiometers for measuring solar and terrestrial energy"
      />
      <main>
        <section>
          <h2>Instrument Catalogue</h2>
          <p>
            The following instruments represent our current product line. Click each instrument for a data sheet
            and detailed specifications. If you require a configuration not listed here, please contact us for
            assistance.
          </p>
          <ul>
            <li><Link to="/instruments/smt">Automatic Solar Tracker (SMT)</Link></li>
            <li><Link to="/instruments/black-white">Black &amp; White Pyranometer (8‑48)</Link></li>
            <li><Link to="/instruments/gpp">Global Precision Pyranometer (GPP)</Link></li>
            <li><Link to="/instruments/spp">Standard Precision Pyranometer (SPP)</Link></li>
            <li><Link to="/instruments/snipt">Normal Incidence Pyrheliometer (sNIP)</Link></li>
            <li><Link to="/instruments/pir">Precision Infrared Radiometer (PIR)</Link></li>
            <li><Link to="/instruments/tuvr">Total Ultraviolet Radiometer (TUVR)</Link></li>
            <li><Link to="/instruments/sdk">Shade Disk Kit (SDK)</Link></li>
            <li><Link to="/instruments/ven">Ventilator (VEN)</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InstrumentsPage;