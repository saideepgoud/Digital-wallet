import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer bg-dark text-light pt-5">
      <div className="container-xl">
        {/* Top Columns */}
        <div className="row gy-4">
          {/* Left big products list */}
          <div className="col-12 col-md-3 d-flex align-items-start">
            <ul className="list-unstyled big-products mb-0">
              <li><a href="#" className="text-light">WALLET</a></li>
              <li><a href="#" className="text-light">CARDS</a></li>
              <li><a href="#" className="text-light">TRANSFERS</a></li>
              <li><a href="#" className="text-light">BUSINESS</a></li>
            </ul>
          </div>

          {/* Middle large links */}
          <div className="col-12 col-md-4">
            <ul className="list-unstyled large-links mb-0">
              <li><a href="#" className="text-light">Features</a></li>
              <li><a href="#" className="text-light">Pricing</a></li>
              <li><a href="#" className="text-light">Add Money</a></li>
              <li><a href="#" className="text-light">Send Money</a></li>
              <li><a href="#" className="text-light">Rewards</a></li>
              <li><a href="#" className="text-light">Transaction History</a></li>
            </ul>
          </div>

          {/* Right titled columns */}
          <div className="col-6 col-md-2">
            <h6 className="footer-title">Education</h6>
            <ul className="list-unstyled small-links mb-0">
              <li><a className="text-secondary">Getting Started</a></li>
              <li><a className="text-secondary">Security & Fraud Prevention</a></li>
              <li><a className="text-secondary">Fees & Limits</a></li>
              <li><a className="text-secondary">FAQs</a></li>
              <li><a className="text-secondary">Developer Docs</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-1">
            <h6 className="footer-title">Digital-Wallet</h6>
            <ul className="list-unstyled small-links mb-0">
              <li><a className="text-secondary">About Us</a></li>
              <li><a className="text-secondary">Investors</a></li>
              <li><a className="text-secondary">Careers</a></li>
              <li><a className="text-secondary">Press</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="footer-title">Resources</h6>
            <ul className="list-unstyled small-links mb-0">
              <li><a className="text-secondary">Support</a></li>
              <li><a className="text-secondary">System Status</a></li>
              <li><a className="text-secondary">Partners</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom row */}
        <div className="row align-items-center gy-3 pb-4">
          <div className="col-12 col-md-3 d-flex align-items-center gap-3">
            <a href="#" className="text-secondary small">US <i className="fa-solid fa-globe"></i></a>
            <span className="text-secondary small">&copy; 2025 Digital-Wallet. All Rights Reserved.</span>
          </div>

          <div className="col-12 col-md-6">
            <nav className="d-flex gap-3 justify-content-md-start justify-content-start">
              <a href="#" className="text-secondary small">Terms</a>
              <a href="#" className="text-secondary small">Privacy</a>
              <a href="#" className="text-secondary small">Legal</a>
              <a href="#" className="text-secondary small">Recalls</a>
              <a href="#" className="text-secondary small">Accessibility</a>
            </nav>
          </div>

          {/* Social icons */}
          <div className="col-12 col-md-3 d-flex justify-content-md-end justify-content-start align-items-center gap-3">
            <div className="socials d-flex gap-2">
              <a href="https://www.linkedin.com/" className="icon-btn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/" className="icon-btn"><i className="fab fa-instagram"></i></a>
              <a href="https://www.twitter.com/" className="icon-btn"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating orange action button
      <button className="floating-action" aria-label="action">
        <i className="fa-solid fa-square-check"></i>
      </button> */}
    </footer>
  );
}
