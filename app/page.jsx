'use client';
// pages/page.jsx

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TopOfPage from '../components/TopOfPage';
import MidOfPage from '../components/MidOfPage';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import BrightnessSlider from '../components/BrightnessSlider';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  return (
    <div className={`min-h-screen ${loading ? 'overflow-hidden' : ''}`}>
      {loading && <LoadingScreen />}
      <BrightnessSlider onChange={handleBrightnessChange} />
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: '#121212', filter: `brightness(${brightness}%)` }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <TopOfPage />
        <MidOfPage />
        <Footer />
      </div>
    </div>
  );
}
