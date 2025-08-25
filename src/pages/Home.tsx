import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import instruments from '../data/instruments';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Instrument Catalogue</h1>
          <div className="instrument-grid">
            {instruments.map(inst => (
              <div key={inst.id} className="instrument-card">
                <h2>{inst.name}</h2>
                <p>{inst.description}</p>
                <Link to={`/instruments/${inst.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
