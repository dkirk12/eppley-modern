import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/home-banner.jpg"
        title="A Legacy in Precision Instruments"
        subtitle="Trusted solar and atmospheric radiation measurement since 1917"
      />
      <main>
        <section>
          <h2>Our Heritage</h2>
          <p>
            The Eppley Laboratory was founded in Newport, Rhode Island in 1917 by Captain&nbsp;Marion&nbsp;Eppley to
            manufacture Weston Standard Cells for Leeds &amp; Northrup. After the First World War the company
            expanded into thermal radiation instrumentation, DC bridges and thermopiles. By the 1930s and
            1940s Eppley was supplying instruments for solar and atmospheric irradiance. Today we continue
            this legacy as a world leader in precision solar radiometers.
          </p>
        </section>
        <section>
          <h2>Understanding Solar Radiation</h2>
          <p>
            Solar radiation comprises visible and near‑visible ultraviolet and near‑infrared light with wavelengths
            from roughly 0.2&nbsp;µm to 4&nbsp;µm. Terrestrial radiation is infrared energy emitted from the
            atmosphere and Earth’s surface and spans wavelengths from 4&nbsp;µm to 100&nbsp;µm. Approximately
            99&nbsp;percent of the Sun’s energy that reaches Earth’s surface lies between 0.3 and 3.0&nbsp;µm.
            Above the atmosphere the solar constant is about 1370&nbsp;W/m², while on a clear day direct beam
            radiation at the surface is around 1000&nbsp;W/m².
          </p>
        </section>
        <section>
          <h2>Explore Our Instruments</h2>
          <p>
            From pyranometers and pyrheliometers to pyrgeometers and ultraviolet radiometers, we offer a complete
            range of instruments for measuring solar and terrestrial radiation. Browse our instrument catalogue
            or contact us to discuss your measurement needs.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;