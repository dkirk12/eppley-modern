import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const CalibrationsPage: React.FC = () => (
  <>
    <Header />
    <Hero title="Calibrations" subtitle="Traceable calibrations for solar and terrestrial radiometers" kicker="Standards" compact />
    <main id="main">
      <section className="section container">
        <h2>Our Approach</h2>
        <p className="lead">Eppley calibrations follow international procedures and are traceable to world standards (WRR, NIST). Instruments are compared using ISO procedures and technical procedures TP01–TP05.</p>
      </section>
      <section className="section section--alt">
        <div className="container">
          <h2>Recommended Calibration Cycle</h2>
          <p>We recommend a five‑year cycle for most instruments; annual recalibration is encouraged for highest‑accuracy applications or harsh environments.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CalibrationsPage;
