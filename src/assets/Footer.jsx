import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          © {new Date().getFullYear()} Akash Mhadut. All rights reserved.
        </div>
        <div className="social-icons d-flex gap-3 fs-4">
          <a href="https://www.instagram.com/akash.mhadgut.15?igsh=MWswdzMzbjR3cDIzaA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/akash.mhadgut.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/akash-mhadgut-211421258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/AkashMhadg56099?t=t8HuYZ7GGWpK4Xr_FbvcEA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
