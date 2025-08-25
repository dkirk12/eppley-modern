import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import instruments from '../data/instruments';

const InstrumentPage: React.FC = () => {
  const { id } = useParams();
  const instrument = instruments.find(i => i.id === id);

  if (!instrument) {
    return (
      <>
        <Header />
        <main>
          <p>Instrument not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>{instrument.name}</h1>
          <p>{instrument.description}</p>
          <p>
            <a href={instrument.datasheet} target="_blank" rel="noopener noreferrer">
              Download Datasheet
            </a>
          </p>
          <p>
            <Link to="/">Back to catalogue</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InstrumentPage;
