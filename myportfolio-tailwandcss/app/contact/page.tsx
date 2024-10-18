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
    <div className="bg-black min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl w-full">
        <div className="text-left md:w-1/2 px-4 md:px-8 lg:px-12 py-8 lg:py-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-200 py-4">
            Contact Me!
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-white font-medium mb-8 md:mb-12">
            I would love to hear from you! Please fill out the form below.
          </p>
          <form method='POST' onSubmit={handleSubmit} className="flex flex-col">
            <input type="hidden" name="access_key" value="a72b00dc-ccb0-43e1-9745-fc7447288972" />

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="p-3 mb-4 rounded-lg bg-black text-white border-2 border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="p-3 mb-4 rounded-lg bg-black text-white border-2 border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="p-3 mb-4 rounded-lg bg-black text-white border-2 border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 h-32"
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>} {/* Display success message */}
            <button type="submit" className="bg-cyan-200 text-black font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-xl">
              Submit
            </button>
          </form>
        </div>

        <div className="flex justify-center md:w-1/2 items-center md:mt-0">
          <Image
            height={1000}
            width={1000}
            className="w-[90%] md:w-[80%] lg:w-[90%] rounded-lg object-cover"
            src="/pic.jpg"
            alt="Contact Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
