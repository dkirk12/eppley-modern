import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';
import { instruments } from '../data/instruments.ts';

const InstrumentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const instrument = instruments.find(i => i.slug === slug);

  if (!instrument) {
    return (
      <>
        <Header />
        <main className="section container">
          <h2>Instrument Not Found</h2>
          <p>The requested instrument does not exist.</p>
          <Link to="/instruments" className="btn btn--secondary">← Back to Instruments</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Hero title={instrument.title} subtitle="Details & resources" kicker="Instrument" compact />
      <main id="main">
        <section className="section container">
          <p className="lead">{instrument.description}</p>
          {instrument.image && (
            <figure className="card" style={{maxWidth:'640px'}}>
              <img src={instrument.image} alt={instrument.title} />
              <figcaption className="muted">Product image</figcaption>
            </figure>
          )}
          {instrument.pdf && <p><a href={instrument.pdf} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Download Data Sheet (PDF)</a></p>}
          <p><Link to="/instruments" className="btn btn--primary">← Back to Instruments</Link></p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InstrumentDetail;
