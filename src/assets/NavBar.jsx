import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./Navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef();

  // Handle scroll background + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "project", "resume", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      onToggle={(expanded) => setMenuOpen(expanded)}
      expanded={menuOpen}
      ref={navRef}
      className={`py-3 ${scrolled || menuOpen ? "navbar-dark-bg" : "navbar-transparent"}`}
    >
      <Container fluid className="px-5">
        <Navbar.Brand href="#home" className="fw-bold">
          Akash Mhadut
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="animate-slide">
          <Nav className="ms-auto fs-5">
            {["home", "about", "project", "resume", "contact"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className="ps-3 nav-item-link"
                onClick={() => setMenuOpen(false)}
                active={false} // prevents Bootstrap .active class
                style={{
                  color: activeSection === section ? "#0d6efd" : "#ffffffff",
                  fontWeight: activeSection === section ? 500 : 400,
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          <Nav className="ms-auto fs-4 d-none d-lg-flex social-links">
            {/* <Nav.Link href="https://www.instagram.com/akash.mhadgut.15?igsh=MWswdzMzbjR3cDIzaA==" target="_blank" className="ps-3">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/akash.mhadgut.3" target="_blank" className="ps-3">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/akash-mhadgut-211421258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="ps-3">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://x.com/AkashMhadg56099?t=t8HuYZ7GGWpK4Xr_FbvcEA&s=09" target="_blank" className="ps-3">
              <FaXTwitter />
            </Nav.Link> */}
             <Nav.Link href="https://x.com/AkashMhadg56099?t=t8HuYZ7GGWpK4Xr_FbvcEA&s=09" target="_blank" className="ps-3">
               <a
            className="btn btn-outline-primary btn-lg px-4 py-2"
            href="src/AkashMhadgut_Cv.pdf"
            download
          >
            📥 Download CV
          </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
