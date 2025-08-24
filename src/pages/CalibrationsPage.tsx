import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const CalibrationsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/radiation-background.png"
        title="Calibrations"
        subtitle="Traceable calibrations for solar and terrestrial radiometers"
      />
      <main>
        <section>
          <h2>Our Approach</h2>
          <p>
            Eppley calibrations follow international procedures and are traceable to world standards. Different
            instruments require different calibration techniques: pyrheliometers are compared on the roof of
            our research building following ISO 9059 and Technical Procedure TP04 with traceability to the
            World Radiation Reference (WRR); pyranometers are compared in an integrating hemisphere per
            ISO 9847 and TP01 with WRR traceability; pyrgeometers are compared in our black‑body calibration
            system (TP05) with traceability to the International Practical Temperature Scale and the World
            Infrared Standard Group; and total ultraviolet radiometers are calibrated on the roof platform
            following TP03 with traceability to NIST standards.
          </p>
        </section>
        <section>
          <h2>Recommended Calibration Cycle</h2>
          <p>
            Accurate radiometer performance requires periodic recalibration. We recommend a five‑year
            calibration cycle for most instruments, though annual recalibration is encouraged for applications
            requiring the highest accuracy or where instruments experience harsh environmental conditions.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CalibrationsPage;