// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Email:</strong> alamkhanrafiul@gmail.com</p>
          <p><strong>Phone:</strong> +1 825-459-5958</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/rafi-khan-cmd" target="_blank" rel="noreferrer">github.com/rafi-khan-cmd</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/rafiul-alam-k-3a20392b0" target="_blank" rel="noreferrer">View Profile</a></p>
        </div>
        
        <h2>Form</h2>


        <form
          action="https://formspree.io/f/mdkdenop"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

