import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Carousel from './components/Carousel';
import BannerBottom from './components/BannerBottom';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import '../src/styles/style.css';
import TopSection from './components/TopSection';
import './App.css'; 
import CheckSection from './components/CheckSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div>
      <TopSection />
      <Header />
      <Navbar />
      <Banner />
      <BannerBottom />
      <CheckSection />
      <Tabs />
      <Carousel />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;




