import React, { useMemo, useState } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';
import { instruments as allInstruments } from '../data/instruments.ts';
import InstrumentCard from '../components/InstrumentCard.tsx';
import InstrumentsFilterBar from '../components/InstrumentsFilterBar.tsx';

const InstrumentsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [sort, setSort] = useState('A-Z');

  const types = useMemo(() => Array.from(new Set(allInstruments.map(i => i.type).filter(Boolean))) as string[], []);

  const instruments = useMemo(() => {
    let items = allInstruments.slice();
    if (type !== 'All') items = items.filter(i => i.type === type);
    if (query) items = items.filter(i => (i.title + ' ' + (i.description||'') + ' ' + (i.tags||[]).join(' ')).toLowerCase().includes(query.toLowerCase()));
    items.sort((a,b) => sort === 'A-Z' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    return items;
  }, [query, type, sort]);

  return (
    <>
      <Header />
      <Hero title="Our Instruments" subtitle="Precision radiometers for measuring solar and terrestrial energy" kicker="Catalogue" compact />
      <main id="main">
        <section className="section container">
          <InstrumentsFilterBar
            allTypes={types}
            onChange={(q, t, s)=>{ setQuery(q); setType(t); setSort(s); }}
          />
          <div className="grid">
            {instruments.map(inst => <InstrumentCard key={inst.slug} {...inst} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InstrumentsPage;
