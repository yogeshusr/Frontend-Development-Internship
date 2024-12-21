import React from 'react';
import '../styles/style.css';

const TopSection = () => {
    // const topsection = {
    //     padding: "10px 0 5px 0px"
    //   };
      
    //   const toptext = {
    //     color: "#838383"
    //   };
    
    //   // Corrected topbar styling with camelCase
    //   const topbar = {
    //     display: "flex", 
    //     justifyContent: "space-between", 
    //     flexWrap: "wrap", 
    //     borderBottom: "#d1d1d1 1px solid", 
    //     paddingBottom: "5px"
    //   };
    
  return (
    <section className="top-section">
      <div className="container top-bar">
        <div className="left-bar">
          <span id="top-text">World's Largest Medical Equipment Market Place</span>
        </div>
        <div className="right-bar">
          <a href="https://1mdm.com/index.php?route=account/account" >
            <span>My account |</span>
          </a>
          <a href="contact.php">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
