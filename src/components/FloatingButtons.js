import React from 'react';
import '../styles/style.css';

function FloatingButtons() {
  return (
    <div>
      <a href="pricing.php" className="float-1">
        <p>
          <i className="bi bi-cart-check"></i> Start Selling
        </p>
      </a>
      <a href="https://wa.me/+919943005109" target="_blank" rel="noreferrer" className="float">
        <p>
          <i className="bi bi-headset"></i> Customer Service
        </p>
      </a>
    </div>
  );
}

export default FloatingButtons;
