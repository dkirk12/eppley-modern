import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const ApplicationsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/applications-background.png"
        title="Applications"
        subtitle="Where our instruments are used and why accurate measurements matter"
      />
      <main>
        <section>
          <h2>Climate &amp; Meteorology</h2>
          <p>
            The balance between incoming solar radiation and outgoing terrestrial radiation drives Earth’s climate,
            controls weather patterns and influences atmospheric circulation and ocean currents. Detecting long‑term
            changes in this radiation budget requires stable, accurate measurements of both shortwave and longwave
            irradiance. Eppley instruments are deployed worldwide – on plains, in rain forests, deserts, mountains,
            polar regions and equatorial zones, and on aircraft, balloons, ships and buoys – to provide the
            high‑quality data needed by climatologists and meteorologists.
          </p>
        </section>
        <section>
          <h2>Solar Power</h2>
          <p>
            As renewable energy grows, precise radiation measurements help developers and operators optimise
            solar installations. For photovoltaic (PV) plants, a standard or global precision pyranometer is
            mounted in the plane of array to measure total plane‑of‑array irradiance. For concentrating solar
            power (CSP) systems, a normal incidence pyrheliometer on a tracker measures direct normal irradiance.
            Comprehensive solar monitoring stations measure global, diffuse, direct and reflected (albedo)
            components to enable accurate site assessment, prediction and performance testing of PV and CSP
            plants.
          </p>
        </section>
        <section>
          <h2>Reference Cells &amp; Material Testing</h2>
          <p>
            Our Standard Precision Pyranometer (SPP) is used as a transfer standard for calibrating photovoltaic
            reference cells with traceability to the World Radiation Reference. Eppley instruments also support
            material testing such as assessing the degradation of coatings, paints, plastics and packaging, and
            evaluating the performance of heating and cooling systems. Measurements may be conducted outdoors
            or in solar simulators across the ultraviolet, shortwave and infrared spectrum.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApplicationsPage;