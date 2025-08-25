
export interface Instrument {
  slug: string;
  title: string;
  description: string;
  image?: string;
  pdf?: string;
  type?: string;
  tags?: string[];
}

export const instruments: Instrument[] = [
  { slug: 'smt', title: 'Automatic Solar Tracker (SMT)', description: 'Automated sun-tracking system for pyrheliometers and sensors.', type: 'Tracker', image: '/assets/smt.jpg' },
  { slug: 'gpp', title: 'Global Precision Pyranometer (GPP)', description: 'High-accuracy pyranometer for global solar irradiance measurements.', type: 'Pyranometer', image: '/assets/gpp.jpg' },
  { slug: 'spp', title: 'Standard Precision Pyranometer (SPP)', description: 'Secondary standard pyranometer used worldwide for reference.', type: 'Pyranometer' },
  { slug: 'snipt', title: 'Normal Incidence Pyrheliometer (sNIP)', description: 'Industry-standard pyrheliometer for direct beam irradiance (DNI).', type: 'Pyrheliometer' },
  { slug: 'pir', title: 'Precision Infrared Radiometer (PIR)', description: 'High precision pyrgeometer for longwave radiation.', type: 'Pyrgeometer' },
  { slug: 'tuvr', title: 'Total Ultraviolet Radiometer (TUVR)', description: 'Measures UV irradiance with a selenium PV detector.', type: 'Ultraviolet' },
  { slug: 'sdk', title: 'Shade Disk Kit (SDK)', description: 'Accessory for diffuse sky radiation measurements.', type: 'Accessory' },
  { slug: 'ven', title: 'Ventilator (VEN)', description: 'Keeps pyranometers free from dew, frost, and snow.', type: 'Accessory' },
];
