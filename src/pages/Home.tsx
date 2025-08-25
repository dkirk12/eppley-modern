import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        title="Setting the Standard for Solar & Atmospheric Radiation"
        subtitle="A century of precision instruments, calibration, and scientific collaboration."
        kicker="Since 1917"
        compact
      />
      <main id="main">
        <section className="section container">
          <h2>Our Heritage</h2>
          <p className="lead">Founded in Newport, Rhode Island in 1917 by Captain Marion Eppley, the laboratory
          began with Weston Standard Cells and expanded into thermal radiation instrumentation and irradiance measurement.</p>
        </section>

        {/* Repurpose previous images as small highlight tiles instead of full-bleed heroes */}
        <section className="section section--alt">
          <div className="container">
            <h2>Highlights</h2>
            <div className="grid">
              <figure className="card">
                <img src="/assets/home-banner.jpg" alt="Historic Eppley instruments" />
                <figcaption className="muted">Historic instruments and field deployments.</figcaption>
              </figure>
              <figure className="card">
                <img src="/assets/history-background.png" alt="Eppley history archives" />
                <figcaption className="muted">From standard cells to global radiometry standards.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section container" style={{textAlign:'center'}}>
          <h2>Explore Our Instruments</h2>
          <a className="btn btn--primary" href="#/instruments">Browse Instruments</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
