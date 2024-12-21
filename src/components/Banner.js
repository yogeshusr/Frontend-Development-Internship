// import React from 'react';
// import './styles/style.css';

// function Banner() {
//   return (
//     <section className="banner-img">
//       <div className="container banner">
//         <div className="row align-items-center">
//           <div className="col-md-6 banner-text">
//             <h4>Sell on 1mdm.com</h4>
//             <h1 id="heading">Reach millions of B2B buyers globally</h1>
//             <div className="banner-btn">
//               <a href="pricing.php">
//                 <button
//                   id="header-banner-text"
//                   style={{ marginRight: '7px' }}
//                   type="button"
//                   className="btn btn-danger"
//                 >
//                   Start selling
//                 </button>
//               </a>
//               <a href="https://wa.me/+919820045154" target="_blank" rel="noreferrer">
//                 <button id="btn-header-line" type="button" className="btn btn-light">
//                   Chat with consultant
//                 </button>
//               </a>
//             </div>
//           </div>
//           <div className="col">
//             <div className="float-end">
//               <h3 className="counter" data-count="26000000"></h3>
//               <p>active buyers globally</p>
//               <br />
//               <h3 className="counter" data-count="400000"></h3>
//               <p>product inquiries daily</p>
//               <br />
//               <h3 className="counter" data-count="200"></h3>
//               <p>countries and regions represented</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Banner;
import React from 'react';
import AnimatedCounters from './AnimatedCounters';
import '../styles/style.css';

function Banner() {
  return (
    <section className="banner-img">
      <div className="container banner">
        <div className="row align-items-center">
          <div className="col-md-6 banner-text">
            <h4>Sell on 1mdm.com</h4>
            <h1 id="heading">Reach millions of B2B buyers globally</h1>
            <div className="banner-btn">
              <a href="pricing.php">
                <button
                  id="header-banner-text"
                  style={{ marginRight: '7px' }}
                  type="button"
                  className="btn btn-danger"
                >
                  Start selling
                </button>
              </a>
              <a href="https://wa.me/+919820045154" target="_blank" rel="noreferrer">
                <button id="btn-header-line" type="button" className="btn btn-light">
                  Chat with consultant
                </button>
              </a>
            </div>
          </div>
          <div className="col">
            <AnimatedCounters />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
