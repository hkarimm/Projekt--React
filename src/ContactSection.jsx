import React from 'react';
import ContactForm from './ContactForm';
// import ContactInfo from './ContactInfo';
import './App.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <ContactForm />
      {/* <ContactInfo /> */}
    </section>
  );
};

export default ContactSection;
