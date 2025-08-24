import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const HistoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/history-background.png"
        title="Our History"
        subtitle="More than a century of innovation in solar radiation measurement"
      />
      <main>
        <section>
          <h2>Founding and Early Years (1917–1940s)</h2>
          <p>
            The Eppley Laboratory was established in 1917 in Newport, Rhode Island by Captain&nbsp;Marion&nbsp;Eppley
            to manufacture Weston Standard Cells for Leeds&nbsp;&amp;&nbsp;Northrup. In the years following the First
            World War the company’s standard cell division grew rapidly and Eppley added related products such as
            thermal radiation instruments, direct‑current bridges and thermopiles. By the 1930s and 1940s the
            laboratory began supplying instruments for measuring solar and atmospheric irradiance.
          </p>
        </section>
        <section>
          <h2>Growth and Innovation (1950s–1970s)</h2>
          <p>
            Eppley instruments were widely adopted by the meteorological community in the decades after the Second
            World War. During the 1960s the iconic 180° “lightbulb” pyranometer became a standard tool for
            measuring global irradiance. By the late 1960s and early 1970s the company introduced improved solar
            radiometers based on wire‑wound thermopiles, leading to significant improvements in response time
            and stability.
          </p>
        </section>
        <section>
          <h2>Satellite Era and Primary Standards (1980s)</h2>
          <p>
            In the 1980s Eppley participated in several satellite missions aimed at refining the value of the
            solar constant and understanding long‑term solar variability. Engineers at Eppley developed the AHF
            Cavity Radiometer System during this period, which became a primary standard for solar irradiance.
            These efforts helped establish accurate reference values for the World Radiation Reference and
            supported international climate research.
          </p>
        </section>
        <section>
          <h2>Present Day</h2>
          <p>
            Although the standard cell division was discontinued in the early 1990s, Eppley remains a leading
            manufacturer of precision solar radiometers. We supply national meteorological authorities and agencies
            such as NOAA, the U.S. Department of Energy and NREL, as well as research institutes and universities
            worldwide. Our instruments and calibration services are traceable to the World Radiation Reference and
            we participate regularly in international and national comparisons to maintain the highest levels of
            accuracy.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HistoryPage;