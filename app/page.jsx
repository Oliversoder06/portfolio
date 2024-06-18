// pages/page.jsx
"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import TopOfPage from '../components/TopOfPage';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen ${loading ? 'overflow-hidden' : ''}`}>
      {loading && <LoadingScreen />}
      <div className="relative z-10">
        <Header />
        <TopOfPage />
      </div>
    </div>
  );
}
