
import React from 'react';
import './SpectrumBar.css';

const SpectrumBar: React.FC = () => (
  <div className="spectrum">
    <div className="bar" aria-hidden="true"></div>
    <div className="ticks">
      <span>0.20 μm</span>
      <span>0.39 μm</span>
      <span>0.78 μm</span>
      <span>4.00 μm</span>
    </div>
  </div>
);

export default SpectrumBar;
