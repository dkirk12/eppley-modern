import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';
import SpectrumBar from '../components/SpectrumBar.tsx';

const SolarPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        title="Introduction to Solar Radiation"
        subtitle="Understanding the components of the Sun’s energy and how they are measured"
        kicker="Spectrum"
        compact
      />
      <main id="main">
        <section className="section container">
          <h2>Spectral Ranges</h2>
          <SpectrumBar />
          <p>Solar radiation is composed of ultraviolet (0.20–0.39 μm), visible (0.39–0.78 μm), and near‑infrared (0.78–4.0 μm). Terrestrial infrared spans 4–100 μm. About 99% of solar radiation reaching Earth’s surface lies between 0.3 and 3.0 μm.</p>
        </section>
        <section className="section section--alt">
          <div className="container">
            <h2>Solar Irradiance Components</h2>
            <p>Energy arrives as direct normal irradiance (DNI) and diffuse horizontal irradiance (DHI); their sum equals global horizontal irradiance (GHI). DNI is measured by a normal incidence pyrheliometer; DHI/GHI are measured by pyranometers.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SolarPage;
