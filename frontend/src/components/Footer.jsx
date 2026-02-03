import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="pahds-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>PAHDS Connect</h3>
          <p>Peoples Action for Human Development Society — Naiganj, Jaunpur, Uttar Pradesh</p>
          <p className="small">© {new Date().getFullYear()} PAHDS — All rights reserved</p>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: info@pahds.org (placeholder)</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: Naiganj, Jaunpur, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
