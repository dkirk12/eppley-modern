import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const ContactPage: React.FC = () => (
  <>
    <Header />
    <Hero title="Get in Touch" subtitle="We’re here to help with your measurement needs" kicker="Contact" compact />
    <main id="main">
      <section className="section container">
        <h2>Contact</h2>
        <p>For product information, quotes or calibration services, please use the details below.</p>
        <p><strong>Address:</strong> 12 Sheffield Avenue, Newport, RI 02840 USA</p>
        <p><strong>Telephone:</strong> 401‑847‑1020<br/><strong>Email:</strong> <a href="mailto:info@eppleylab.com">info@eppleylab.com</a></p>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
