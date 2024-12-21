import React from 'react';
import '../styles/style.css';

function BannerBottom() {
  return (
    <section className="banner-bottom">
      <div className="container">
        <h2 className="banner-heading">
          1mdm.com is a leading ecommerce platform that <br />
          helps SMEs go global
        </h2>
        <br />
        <br />
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/TN7iJyc5Uks"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <br />
          </div>
          <div className="col">
            <p className="para">
              Connect with millions of business buyers from around the world.
            </p>
            <br />
            <p className="para">
              Get the tools and know-how to build a successful ecommerce presence for
              your business.
            </p>
            <br />
            <p className="para">
              Pocket more from each sale, with take rates as low as 0% in some cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerBottom;
