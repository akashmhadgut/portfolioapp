import React from 'react';
import './Home.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import Nav from "react-bootstrap/Nav";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section className="home-section d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center justify-content-center hero-container">
          
          {/* LEFT: Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="hero-image">
              <div className="glow-circle mx-auto">
                <img src="src/profilepic.jpg" alt="Profile" className="img-fluid m-5" />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Section */}
          <div className="col-md-6 hero-text text-center text-md-start mt-4 mt-md-0">
            <h3>Hello, I’m</h3>
            <h1>Akash Mhadgut</h1>
            <h2>
              And I’m a{" "}
              <span className="highlight-text">
                <Typewriter
                  words={['Full Stack Developer', 'Building Web Apps', 'Loving React ❤️']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I'm a dedicated Full Stack Developer with a passion for crafting seamless,
              high-performance web experiences. I specialize in building dynamic, responsive,
              and user-focused applications using modern technologies like React, Node.js, and Express.
            </p>

            {/* Social Icons */}
            <div className="social-icons d-flex justify-content-center justify-content-md-start mb-4">
              <Nav.Link href="https://www.instagram.com/akash.mhadgut.15" target="_blank">
                <FaInstagram size={28} />
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/akash.mhadgut.3" target="_blank" className="ps-3">
                <FaFacebook size={28} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/akash-mhadgut-211421258" target="_blank" className="ps-3">
                <FaLinkedin size={28} />
              </Nav.Link>
              <Nav.Link href="https://x.com/AkashMhadg56099" target="_blank" className="ps-3">
                <FaXTwitter size={28} />
              </Nav.Link>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3 mb-5">
              <a href="#about" className="btn btn-outline-primary fw-bold px-4">
                <FaUser size={20} className="me-2 text-info" /> About Me
              </a>
              <a href="#contact" className="btn btn-outline-primary fw-bold px-4">
                <FaPhoneAlt size={20} className="me-2 text-info" /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
