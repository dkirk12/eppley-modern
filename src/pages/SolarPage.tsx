import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const SolarPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/radiation-header.png"
        title="Introduction to Solar Radiation"
        subtitle="Understanding the components of the Sun’s energy and how they are measured"
      />
      <main>
        <section>
          <h2>Spectral Ranges</h2>
          <p>
            Solar radiation is composed of visible and near‑visible ultraviolet and near‑infrared light with
            wavelengths from about 0.20 µm to 4.00 µm. Terrestrial radiation, emitted by the atmosphere and
            Earth’s surface, lies in the infrared region from about 4 µm to 100 µm. Approximately 99 percent of
            solar (short‑wave) radiation reaching Earth’s surface is between 0.3 µm and 3.0 µm, while
            terrestrial (long‑wave) radiation is between 3.5 µm and 50 µm.
          </p>
          <table>
            <thead>
              <tr>
                <th>Spectral band</th>
                <th>Wavelength range</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ultraviolet (UV)</td><td>0.20 – 0.39 µm</td></tr>
              <tr><td>Visible</td><td>0.39 – 0.78 µm</td></tr>
              <tr><td>Near‑infrared (NIR)</td><td>0.78 – 4.0 µm</td></tr>
              <tr><td>Infrared (IR)</td><td>4.0 – 100 µm</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Solar Irradiance Components</h2>
          <p>
            Outside Earth’s atmosphere the solar constant is approximately 1370 W/m². At the surface, on a
            clear day, the direct beam irradiance is around 1000 W/m². Solar energy arrives as direct normal
            irradiance (DNI) and diffuse horizontal irradiance (DHI); their sum equals global horizontal
            irradiance (GHI). DNI is measured by a normal incidence pyrheliometer aligned with the sun; DHI can
            be obtained by shading a pyranometer; GHI is measured by a pyranometer oriented horizontally. When
            a pyranometer is positioned parallel to a PV array it measures plane‑of‑array irradiance. Two
            pyranometers facing up and down can be used to determine albedo for bifacial modules. The sum of
            global, diffuse, direct and reflected measurements gives the net radiation.
          </p>
        </section>
        <section>
          <h2>Ultraviolet Measurements</h2>
          <p>
            Ultraviolet radiation is measured using the Total Ultraviolet Radiometer (TUVR). This instrument uses
            a rugged selenium photovoltaic cell with a Teflon diffuser and a narrow band‑pass filter to limit
            its spectral response to approximately 0.295 – 0.385 µm. The radiometer includes a quartz window and
            is supplied with a calibration certificate traceable to NIST.
          </p>
        </section>
        <section>
          <h2>Shortwave Measurements</h2>
          <p>
            Shortwave radiation consists of direct, diffuse and global components. The Normal Incidence
            Pyrheliometer (sNIP) measures direct normal irradiance and is mounted on an automatic solar
            tracker. Diffuse radiation can be obtained by shading a pyranometer with a shade disk kit. Global
            radiation is measured using pyranometers such as the Standard Precision (SPP), Global Precision
            (GPP) and Black &amp; White (8‑48). The SPP is the preferred secondary standard, the GPP is intended
            for lower‑cost PV and CSP monitoring, and the 8‑48 is primarily used for diffuse measurements.
          </p>
        </section>
        <section>
          <h2>Longwave &amp; Other Measurements</h2>
          <p>
            Longwave infrared radiation is measured by the Precision Infrared Radiometer (PIR), also known as a
            pyrgeometer. Two pyranometers oriented upward and downward can be used to measure albedo, an
            important parameter for bifacial PV systems. Sunshine duration is defined by the World
            Meteorological Organization as the number of seconds per day that direct normal irradiance exceeds
            120 W/m².
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SolarPage;