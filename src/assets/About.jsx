import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
 import './About.css'
import { FaArrowRight, FaBootstrap, FaCss3, FaDatabase, FaGift, FaGit, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiNetlify } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { FaTools, FaUser } from 'react-icons/fa';

 
function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <Container>
          <div className="heading text-center mb-5">
                  <FaUser size={120} className="icon bg-primary" />
                  <h2 className="fw-bold">About Me</h2>
                </div>
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <p className="lead">
              Hi, I’m <strong>Akash Mhadgut</strong>, a passionate Full Stack Developer dedicated to building clean,
              responsive, and high-performance web applications. I specialize in React, Node.js, Express, and modern
              frontend technologies to create dynamic and user-focused experiences.
            </p>
            <p>
              I enjoy solving complex problems through clean code, intuitive design, and continuous learning.
              My goal is to deliver projects that are not only functional but also visually engaging and accessible.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Button variant="outline-light" href="#contact">Get In Touch</Button>
              <Button variant="info" href="#project" className="text-white">View My Work</Button>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <div className="glass-card mb-5 p-4">
          <h2 className="text-center mb-5">🛠️ Skills</h2>
          <Row className="gy-4 gx-4">
            {/* Frontend */}
            <Col md={4}>
              <div className="p-4 text-dark rounded-4 shadow-sm h-100 skill-cards">
                <h5 className="fw-bold mb-3">Frontend Development</h5>
                <ul className="list-unstyled ps-2">
                  <li><FaHtml5 /> HTML</li>
                  <li><FaCss3 /> CSS</li>
                  <li><FaJs /> JavaScript</li>
                  <li><FaReact /> React</li>
                  <li><FaBootstrap /> Bootstrap</li>
                </ul>
              </div>
            </Col>

            {/* Backend */}
            <Col md={4}>
              <div className="p-4 text-dark rounded-4 shadow-sm h-100 skill-cards">
                <h5 className="fw-bold mb-3">Backend Development</h5>
                <ul className="list-unstyled ps-3">
                  <li><FaNode /> Node.js</li>
                  <li><SiExpress /> Express.js</li>
                  <li><SiMongodb /> MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </Col>

            {/* Tools */}
            <Col md={4}>
              <div className="p-4 text-dark rounded-4 shadow-sm h-100 skill-cards">
                <h5 className="fw-bold mb-3">Tools & Platforms</h5>
                <ul className="list-unstyled ps-3">
                  <li><FaGit style={{ color: '#f1502f' }} /> Git & GitHub</li>
                  <li><VscJson style={{ color: '#007ACC' }} /> VS Code</li>
                  <li><SiNetlify style={{ color: '#38bdf8' }} /> Netlify / Vercel</li>
                  <li><FaTools style={{ color: '#6c757d' }} /> Chrome DevTools</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
