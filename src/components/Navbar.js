import React from 'react';
import '../styles/style.css';

function Navbar() {
  return (
    <section class="menubar sticky-top">
    <div class="container">
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a href="https://1mdm.com/" target="_blank" rel="noreferrer">
          <img className="logo" src="1mdm-168x58.png" alt="1MDM logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="index.php">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="our-story.php">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="seller.php">
                Sell on 1MDM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pricing.php">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </section>
  );
}

export default Navbar;
