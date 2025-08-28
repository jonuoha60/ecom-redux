import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./css/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>Email: info@chinwekitchen.com</p>
        <p>Phone: +234 801 234 5678</p>
        <p>Address: 123 Lagos Street, Nigeria</p>

        <div className="social-icons">
          <a href="#" className="social-link"><FaFacebookF /></a>
          <a href="#" className="social-link"><FaInstagram /></a>
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaWhatsapp /></a>
        </div>
      </div>

      <p className="footer-copy">&copy; 2025 Chinwe Kitchen. All rights reserved.</p>
    </footer>
  );
};
