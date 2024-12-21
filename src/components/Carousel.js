import React from 'react';
import '../styles/style.css'; // Ensure this includes the styles for your carousel.

function Carousel() {
  const carouselItems = [
    {
      quote:
        'Mr. David runs a manufacturing company that works in the field of medical devices, with administrative and production facilities across the country. He respects the environment and uses conventional IP systems.',
      imgSrc: 'slider-1.webp',
    },
    {
      quote:
        'Lab Evolution is an import-export company of reagents and laboratory equipment established over a decade ago. It offers competitive and popular brands for your laboratory.',
      imgSrc: 'slider-2.webp',
    },
    {
      quote:
        'Rupesh Kanna started as a lab technician and later created his own product line to increase diversity in the medical devices industry.',
      imgSrc: 'slider-3.webp',
    },
    {
      quote:
        'LTA International Global Services LLC is a Florida-based export management company specializing in selling top medical device products from major US brands.',
      imgSrc: 'slider-4.webp',
    },
  ];

  return (
    <section className="slider">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h2 className="slider-heading">Success stories from 1mdm.com sellers</h2>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="container slider-content">
                <div className="row align-items-center">
                  <div className="col-md-5 slider-left">
                    <i className="bi bi-quote"></i>
                    <p className="para">{item.quote}</p>
                  </div>
                  <div className="col-md-7 slider-right">
                    <img
                      src={item.imgSrc}
                      className="img-fluid"
                      alt={`Story ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left-circle-fill"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i className="bi bi-arrow-right-circle-fill"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;

