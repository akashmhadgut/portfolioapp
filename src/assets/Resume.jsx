import React from 'react';
import { FaUserTie, FaGraduationCap } from 'react-icons/fa';
import './Resume.css';

function Resume() {
  return (
    <section id="resume">
      <div className="container">

        {/* Header */}
        <div className="heading text-center mb-5">
          <FaUserTie size={120} className="icon" />
          <h2 className="fw-bold">Resume</h2>
        </div>

        {/* === Education Section === */}
        <div className="edu section-box mb-5 p-4">
          <h4 className="mb-4 d-flex align-items-center">
            <FaGraduationCap className="me-2 speicons" size={32} />
            Education
          </h4>

          <div className="card educard mb-3">
            <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <h5 className="card-title mb-1">Bachelor of Computer Application</h5>
                <p className="card-text">Tilak Maharashtra University, Pune</p>
                <strong>CGPA: 7.48</strong>
              </div>
              <span className="year-tag">2022 – 2025</span>
            </div>
          </div>

          <div className="card educard mb-3">
            <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <h5 className="card-title mb-1">HSC</h5>
                <p className="card-text">Rani Parvati Devi College, Sawantwadi</p>
                <strong>60%</strong>
              </div>
              <span className="year-tag">2020 – 2022</span>
            </div>
          </div>

          <div className="card educard">
            <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <h5 className="card-title mb-1">SSC</h5>
                <p className="card-text">S.V.S.V, Mangaon</p>
                <strong>90%</strong>
              </div>
              <span className="year-tag">2018 – 2020</span>
            </div>
          </div>
        </div>

        {/* === Skills Section === */}
        <div className="skills section-box mb-5 p-4">
          <h4 className="mb-4">🛠️ Skills</h4>

          <div className="row gy-3">
            <div className="col-md-6">
              <div className="skill-card p-3">
                <h6 className="fw-bold">Frontend</h6>
                <p className="mb-0">HTML, CSS, JavaScript, React.js</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-card p-3">
                <h6 className="fw-bold">Frameworks</h6>
                <p className="mb-0">Bootstrap, Tailwind CSS</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-card p-3">
                <h6 className="fw-bold">Languages</h6>
                <p className="mb-0">C, C++, Java, Android</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-card p-3">
                <h6 className="fw-bold">Database</h6>
                <p className="mb-0">SQL, MongoDB</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-card p-3">
                <h6 className="fw-bold">Tools</h6>
                <p className="mb-0">Git, GitHub, Postman</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-card p-3">
                <h6 className="fw-bold">Others</h6>
                <p className="mb-0">Linux, VS Code</p>
              </div>
            </div>
          </div>
        </div>

        {/* === Projects Section === */}
        <div className="projects section-box mb-5 p-4">
          <h4 className="mb-4">📁 Projects</h4>

          <div className="card project-card mb-3">
            <div className="card-body">
              <h5 className="card-title">Smart Parking System</h5>
              <p className="card-text">HTML, CSS, JS, MySQL — Integrated QR scanning & slot management (BCA Final Year).</p>
            </div>
          </div>

          <div className="card project-card mb-3">
            <div className="card-body">
              <h5 className="card-title">E-commerce Website for Fashion Sales</h5>
              <p className="card-text">HTML, CSS, JS, Bootstrap</p>
            </div>
          </div>

          <div className="card project-card">
            <div className="card-body">
              <h5 className="card-title">E-commerce Blogging Website</h5>
              <p className="card-text">React.js, Bootstrap</p>
            </div>
          </div>
        </div>

        {/* === Certifications Section === */}
        <div className="certifications section-box mb-5 p-4">
          <h4 className="mb-4">📜 Certifications</h4>
          <div className="certification-card mb-3 p-3">
            <strong>Full‑Stack Web Development</strong> — IT Education Center, Pune
          </div>
          <div className="certification-card p-3">
            <strong>HTML Training</strong> — Spoken Tutorial, IIT Bombay
          </div>
        </div>

        {/* === Download Resume Button === */}
        <div className="text-center mt-4">
          <a
            className="btn btn-outline-primary btn-lg px-4 py-2"
            href="/AkashMhadgut_Cv.pdf"
            download
          >
            📥 Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;
