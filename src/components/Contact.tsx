// Contact.tsx
import React from 'react';
import './Contact.css';  // We'll create this CSS file next

const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <h2>Contact Information</h2>
      <div className="contact-card">
        <div className="contact-item">
          <span className="label">Name:</span>
          <span className="value">Jerrmaine Strand</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Email:</span>
          <a 
            href="mailto:jerrmainestrand08@gmail.com" 
            className="value link"
          >
            jerrmainestrand08@gmail.com
          </a>
        </div>
        
        <div className="contact-item">
          <span className="label">Phone:</span>
          <a 
            href="tel:+12672501503" 
            className="value link"
          >
            (267) 250-1503
          </a>
        </div>
        
        <div className="contact-item">
          <span className="label">Location:</span>
          <span className="value">North East, MD</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default Contact;