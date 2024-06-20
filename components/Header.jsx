import React, { useState } from 'react';
import BrightnessSlider from './BrightnessSlider';
import Navbar from './Navbar';
const Header = () => {
    const [brightness, setBrightness] = useState(0);
    const handleBrightnessChange = (value) => {
        setBrightness(value);
    };
    return (
        <div className='w-full flex justify-center pt-5'>
            <div className='flex justify-center max-w-[1440px]'>
                <div className='flex'>
                    <BrightnessSlider onChange={handleBrightnessChange} />
                </div>
                <div
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: '#121212', filter: `brightness(${brightness}%)` }}
                ></div >
                <div className='flex'>
                    <Navbar />
                </div>
            </div >
        </div>
    );
};
export default Header;