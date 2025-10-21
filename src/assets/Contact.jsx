import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Contact() {
  return (
    <section id="contact" className="py-5 contact-section bg-light">
      <div className="container">

        {/* === Heading === */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="lead text-light text-alert">
            I'd love to hear from you! Whether it's a project, opportunity, or just to say hi.
          </p>
        </div>

        <div className="row g-4">

          {/* === Contact Info === */}
          <div className="col-md-5">
            <div className="card contact-card h-100 p-4 shadow-sm">
              <div className="card-body">
                <h5 className="mb-4 fw-bold text-uppercase">Contact Information</h5>
               <div className='mb-3 p-3 border'>
  <p className="mb-3">
    <a href="mailto:akashmhadgut280@gmail.com" className="text-decoration-none text-dark">
      <FaEnvelope size={28} className="me-2 text-info" />
      akashmhadgut280@gmail.com
    </a>
  </p>
</div>

<div className='mb-3 p-3 border'>
  <p className="mb-3">
    <a href="tel:+91902196276" className="text-decoration-none text-dark">
      <FaPhoneAlt size={28} className="me-2 text-info" />
      +91 902196276
    </a>
  </p>
</div>

<div className='mb-3 p-3 border'>
  <p className="mb-0">
    <a 
      href="https://www.google.com/maps?q=Pune,+Maharashtra" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-decoration-none text-dark"
    >
      <FaMapMarkerAlt size={28} className="me-2 text-info" />
      Pune, Maharashtra
    </a>
  </p>
</div>
<hr className="my-4" />

<h6 className="fw-bold text-uppercase mb-3">Follow Me</h6>
<div className="d-flex gap-3">

  <a href="https://www.instagram.com/akash.mhadgut.15" target="_blank" rel="noopener noreferrer" className="text-dark">
    <FaInstagram size={28} className="social-icon" />
  </a>

  <a href="https://www.facebook.com/akash.mhadgut.15" target="_blank" rel="noopener noreferrer" className="text-dark">
    <FaFacebook size={28} className="social-icon" />
  </a>

  <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark">
    <FaLinkedin size={28} className="social-icon" />
  </a>

  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark">
    <FaXTwitter size={28} className="social-icon" />
  </a>

</div>


              </div>
            </div>
          </div>

          {/* === Contact Form === */}
          <div className="col-md-7">
            <div className="contact-form-card shadow rounded p-4 h-100 bg-white">
              <form id="contactForm" className="mx-auto contact-form">
                <h4 className="mb-4">Send Us a Message</h4>

                <div className="mb-3 row">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    
  );
}

export default Contact;
