
import React, { useMemo, useState } from 'react';
import './InstrumentsFilterBar.css';

interface Props {
  allTypes: string[];
  onChange: (q: string, type: string, sort: string) => void;
}

const InstrumentsFilterBar: React.FC<Props> = ({ allTypes, onChange }) => {
  const [q, setQ] = useState('');
  const [type, setType] = useState('All');
  const [sort, setSort] = useState('A-Z');

  const types = useMemo(() => ['All', ...allTypes], [allTypes]);

  return (
    <div className="filterbar container">
      <input
        type="search"
        placeholder="Search instruments…"
        value={q}
        onChange={(e) => { setQ(e.target.value); onChange(e.target.value, type, sort); }}
        aria-label="Search instruments"
      />
      <select value={type} onChange={(e)=>{ setType(e.target.value); onChange(q, e.target.value, sort); }} aria-label="Filter by type">
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <select value={sort} onChange={(e)=>{ setSort(e.target.value); onChange(q, type, e.target.value); }} aria-label="Sort instruments">
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
    </div>
  );
};

export default InstrumentsFilterBar;
