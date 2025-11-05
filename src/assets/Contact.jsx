import React, { useState } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_xzho0mc",     // ✅ Replace
      "template_b4dyx18",    // ✅ Replace
      {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        message: formData.message,
      },
      "br1iPKnOtPntHdmB7"      // ✅ Replace
    )
    .then(() => {
      alert("✅ Message Sent Successfully!");
      setFormData({ firstName:"", lastName:"", email:"", message:"" });
    })
    .catch((err) => {
      console.log(err);
      alert("❌ Message Failed. Check Console.");
    });
  };

  return (
    <section id="contact" className="py-5 contact-section bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="lead text-light text-alert">I'd love to hear from you!</p>
        </div>

        <div className="row g-4">

          {/* LEFT SIDE INFO */}
          <div className="col-md-5">
            <div className="card contact-card h-100 p-4 shadow-sm">
              <div className="card-body">
                <h5 className="mb-4 fw-bold text-uppercase">Contact Information</h5>

                <div className='mb-3 p-3 border'>
                  <a href="mailto:akashmhadgut280@gmail.com" className="text-decoration-none text-dark">
                    <FaEnvelope size={28} className="me-2 text-info" />
                    akashmhadgut280@gmail.com
                  </a>
                </div>

                <div className='mb-3 p-3 border'>
                  <a href="tel:+91902196276" className="text-decoration-none text-dark">
                    <FaPhoneAlt size={28} className="me-2 text-info" />
                    +91 902196276
                  </a>
                </div>

                <div className='mb-3 p-3 border'>
                  <a href="https://www.google.com/maps?q=Pune,+Maharashtra" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    <FaMapMarkerAlt size={28} className="me-2 text-info" />
                    Pune, Maharashtra
                  </a>
                </div>

                <hr className="my-4" />

                <h6 className="fw-bold text-uppercase mb-3">Follow Me</h6>
                <div className="d-flex gap-3">
                  <FaInstagram size={28} className="social-icon" />
                  <FaFacebook size={28} className="social-icon" />
                  <FaLinkedin size={28} className="social-icon" />
                  <FaXTwitter size={28} className="social-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM WITH EMAILJS */}
          <div className="col-md-7">
            <div className="contact-form-card shadow rounded p-4 h-100 bg-white">

              <form onSubmit={sendEmail} className="mx-auto contact-form">
                <h4 className="mb-4">Send Us a Message</h4>

                <div className="mb-3 row">
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" id="firstName" className="form-control"
                      value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" id="lastName" className="form-control"
                      value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" id="email" className="form-control"
                    value={formData.email} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea id="message" rows="4" className="form-control"
                    value={formData.message} onChange={handleChange} required></textarea>
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
