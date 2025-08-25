
import React from 'react';
import './Timeline.css';

export interface TimelineItem { year: string; text: string; }

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
  <div className="timeline">
    {items.map((it, i) => (
      <div key={i} className="row">
        <div className="year">{it.year}</div>
        <div className="text">{it.text}</div>
      </div>
    ))}
  </div>
);

export default Timeline;
