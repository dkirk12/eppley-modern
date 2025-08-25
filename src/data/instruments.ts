export interface Instrument {
  id: string;
  name: string;
  description: string;
  datasheet: string;
}

export const instruments: Instrument[] = [
  {
    id: 'smt',
    name: 'Automatic Solar Tracker (SMT)',
    description: 'Keeps sensors aligned with the sun for consistent measurements.',
    datasheet: 'https://example.com/datasheets/smt.pdf'
  },
  {
    id: 'black-white',
    name: 'Black & White Pyranometer (8-48)',
    description: 'Classic thermopile pyranometer for total solar radiation.',
    datasheet: 'https://example.com/datasheets/black-white.pdf'
  },
  {
    id: 'gpp',
    name: 'Global Precision Pyranometer (GPP)',
    description: 'High-accuracy instrument for global solar irradiance.',
    datasheet: 'https://example.com/datasheets/gpp.pdf'
  },
  {
    id: 'spp',
    name: 'Standard Precision Pyranometer (SPP)',
    description: 'Reliable sensor for routine solar measurements.',
    datasheet: 'https://example.com/datasheets/spp.pdf'
  },
  {
    id: 'snipt',
    name: 'Normal Incidence Pyrheliometer (sNIP)',
    description: 'Measures direct beam solar radiation with high precision.',
    datasheet: 'https://example.com/datasheets/snipt.pdf'
  },
  {
    id: 'pir',
    name: 'Precision Infrared Radiometer (PIR)',
    description: 'Thermal infrared radiometer for longwave measurements.',
    datasheet: 'https://example.com/datasheets/pir.pdf'
  },
  {
    id: 'tuvr',
    name: 'Total Ultraviolet Radiometer (TUVR)',
    description: 'Captures UV radiation across the full spectrum.',
    datasheet: 'https://example.com/datasheets/tuvr.pdf'
  },
  {
    id: 'sdk',
    name: 'Shade Disk Kit (SDK)',
    description: 'Accessory kit for diffuse radiation measurements.',
    datasheet: 'https://example.com/datasheets/sdk.pdf'
  },
  {
    id: 'ven',
    name: 'Ventilator (VEN)',
    description: 'Maintains airflow across sensors to reduce heating effects.',
    datasheet: 'https://example.com/datasheets/ven.pdf'
  }
];

export default instruments;
