import React from 'react';

const FooterBanner = () => {
  const footerBtnRedStyle = {
    marginRight: '7px',
    color: '#e60008',
  };

  const footerBtnWhiteStyle = {
    color: '#ffffff',
  };

  return (
    <section className="footer-banner">
      <h2 className="footer-text">Ready to Grow Your Business?</h2>
      <div className="footer-btn">
        <a href="pricing.php">
          <button
            id="footer-btn-red"
            style={footerBtnRedStyle}
            type="button"
            className="btn btn-light btn-lg"
          >
            Start selling
          </button>
        </a>
        <br />
        <a href="https://wa.me/+919820045154" target="_blank" rel="noopener noreferrer">
          <button
            style={footerBtnWhiteStyle}
            type="button"
            className="btn btn-outline-light btn-lg"
          >
            Chat with consultant
          </button>
        </a>
        <br />
      </div>
    </section>
  );
};

export default FooterBanner;
