// ContactUs.jsx
import React from 'react';
import '../globals.css';

const locations = [
  { city: 'Tokyo', address: 'No 1123, Marmora Road, Glasgow, D04 89GR.' },
  { city: 'Beijing', address: 'No 1123, Marmora Road, Glasgow, D04 89GR.' },
  { city: 'Singapore', address: 'No 1123, Marmora Road, Glasgow, D04 89GR.' },
  { city: 'Bangkok', address: 'No 1123, Marmora Road, Glasgow, D04 89GR.' },
];

const testimonials = [
  { text: 'In auctor ex id urna faucibus porttitor. Lorem ipsum dolor sit amet.', name: 'Jerry', role: 'Web Developer' },
  { text: 'In auctor ex id urna faucibus porttitor. Lorem ipsum dolor sit amet.', name: 'David Gand', role: 'Designer' },
];

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="location-image">
              <img src="/img/tokyo.jpg" alt={location.city} />
            </div>
            <div className="location-info">
              <h4>{location.city}</h4>
              <p>{location.address}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="location-image">
              <img src="/img/tokyo.jpg" alt={location.city} />
            </div>
            <div className="location-info">
              <h4>{location.city}</h4>
              <p>{location.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">
              <span className="quote-left">“</span>
              {testimonial.text}
              <span className="quote-right">”</span>
            </p>
            <p className="testimonial-author">
              <strong>{testimonial.name}</strong> | {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
