import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // En funktion för att hantera ändringar i formulärets fält
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Namn:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Meddelande:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Skicka</button>
    </form>
  );
};

export default ContactForm;
