import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';
import Timeline, { TimelineItem } from '../components/Timeline.tsx';

const items: TimelineItem[] = [
  {year:'1917', text:'Established by Captain Marion Eppley in Newport, RI to manufacture Weston Standard Cells.'},
  {year:'1930s–40s', text:'Expanded into thermal radiation instruments, DC bridges, thermopiles, and irradiance tools.'},
  {year:'1950s–70s', text:'Adopted widely by meteorological communities; improved radiometer response and stability.'},
  {year:'1980s', text:'Satellite missions; AHF Cavity Radiometer System established as a primary standard.'},
  {year:'Today', text:'Leading supplier of precision radiometers and traceable calibrations for climate research.'}
];

const HistoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        title="More Than a Century of Innovation"
        subtitle="From standard cells to worldwide radiometry standards."
        kicker="Heritage"
        compact
      />
      <main id="main">
        <section className="section container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 320px', gap:'24px'}}>
            <div>
              <h2>Milestones</h2>
              <Timeline items={items} />
            </div>
            <aside className="card">
              <img src="/assets/marion-eppley.jpg" alt="Captain Marion Eppley" />
              <p className="muted">Captain Marion Eppley, founder.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HistoryPage;
