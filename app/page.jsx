// pages/page.jsx
"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import TopOfPage from '../components/TopOfPage';
import LoadingScreen from '../components/LoadingScreen';
import FlareCursor from '@/components/FlareCursor';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [brightness, setBrightness] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  return (
    <div>
      <FlareCursor />
      <div className={`min-h-screen ${loading ? 'overflow-hidden' : ''}`} style={{ filter: `brightness(${brightness}%)` }}>
        {loading && <LoadingScreen />}
        <Header onBrightnessChange={handleBrightnessChange} />
        <div className="relative z-10 pt-[64px]"> {/* Adjust padding to prevent content from going under the fixed header */}
          <TopOfPage />
        </div>
      </div>
    </div>
  );
}
