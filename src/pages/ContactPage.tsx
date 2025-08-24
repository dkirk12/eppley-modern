import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        image="/assets/contact.png"
        title="Contact Us"
        subtitle="We’re here to help with your measurement needs"
      />
      <main>
        <section>
          <h2>Get in Touch</h2>
          <p>
            For product information, quotes or calibration services, please contact us using the details below or
            complete the enquiry form. We aim to respond to all requests within one business day.
          </p>
          <p>
            <strong>Address:</strong><br />
            The Eppley Laboratory, Inc.<br />
            12 Sheffield Avenue, PO Box 419<br />
            Newport, RI 02840&nbsp;USA
          </p>
          <p>
            <strong>Telephone:</strong> 401‑847‑1020<br />
            <strong>Email:</strong> <a href="mailto:info@eppleylab.com">info@eppleylab.com</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;