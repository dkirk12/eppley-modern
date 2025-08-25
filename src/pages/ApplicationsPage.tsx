import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';
import ApplicationCard from '../components/ApplicationCard.tsx';

const features = [
  { title: 'Climate & Meteorology', desc: 'Accurate irradiance data for climate research worldwide.' },
  { title: 'Solar Power', desc: 'Precise radiation measurements for PV and CSP systems.' },
  { title: 'Reference Cells & Testing', desc: 'Calibrate photovoltaic cells and evaluate material performance.' },
];

const ApplicationsPage: React.FC = () => (
  <>
    <Header />
    <Hero title="Applications" subtitle="Where our instruments are used and why accuracy matters" kicker="Use Cases" compact />
    <main id="main">
      <section className="section container">
        <div className="grid">
          {features.map((f,i)=>(<ApplicationCard key={i} title={f.title} desc={f.desc}/>))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ApplicationsPage;
