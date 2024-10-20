"use client";
import React, { useState } from 'react';
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyS6e0al7rsC7DcfxNyXOYvkOn3wSUeVEn_t_E2xftJvwTb1zi_qIbnMfULJXxfzooVHA/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!name || !message) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send your message. Please try again later.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('Error submitting form: ' + error.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h1 className="contact-title">
            Contact Me!
          </h1>
          <p className="contact-description">
            I would love to hear from you! Please fill out the form below.
          </p>
          <form method='POST' onSubmit={handleSubmit} className="form">
            <input type="hidden" name="access_key" value="a72b00dc-ccb0-43e1-9745-fc7447288972" />

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="input"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="input"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="textarea"
              required
            />
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-image">
          <Image
            height={1000}
            width={1000}
            className="image"
            src="/pic.jpg"
            alt="Contact Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
