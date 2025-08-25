import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Contact Us</h1>
          <p>
            For product information, quotes or calibration services, please contact us using the details
            below. We aim to respond to all requests within one business day.
          </p>
          <p>
            <strong>Address:</strong><br />
            The Eppley Laboratory, Inc.<br />
            12&nbsp;Sheffield Avenue, PO&nbsp;Box&nbsp;419<br />
            Newport, RI&nbsp;02840&nbsp;USA
          </p>
          <p>
            <strong>Telephone:</strong> 401-847-1020<br />
            <strong>Email:</strong> <a href="mailto:info@eppleylab.com">info@eppleylab.com</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
