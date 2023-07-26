import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import './form.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using emailjs
    const serviceID = 'service_0kjir84'; // Replace with your emailjs service ID
    const templateID = 'template_sura2u8'; // Replace with your emailjs template ID
    const userID = 'RvVgkxhV27AwbL_-j'; // Replace with your emailjs user ID

    const templateParams = {
      name,
      lastName,
      email,
      phoneNumber,
      message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset form fields after successful submission (optional)
        setName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        { <>  <div className='names'> 
        <h4>Namn (required)</h4>
      <label className='name1' htmlFor="name">Förnamn</label>
      <label className='lastName1' htmlFor="lastName">Efternamn</label>
      </div>
        <div className="form-group-inline">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <label className='email1' htmlFor="email">Email  (required)</label>
        <div className="form-group1">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group2">
        <label className='subject1' htmlFor="phoneNumber">Telefon (required)</label>
          <input
            type="number"
            id="phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group3">
        <label className='message1' htmlFor="message">Meddelande (required)</label>
          <input
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></input>
        </div></> }
        <div className="button-container">
          <button type="submit">Skicka</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;


