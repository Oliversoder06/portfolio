// components/NavbarWithBrightness.jsx

import React, { useState } from 'react';
import BrightnessSlider from './BrightnessSlider';
import Navbar from './Navbar';

const Header = () => {
    const [brightness, setBrightness] = useState(0);

    const handleBrightnessChange = (value) => {
        setBrightness(value);
    };

    return (
        <>
            <BrightnessSlider onChange={handleBrightnessChange} />
            {/* <Navbar /> */}
            <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: '#121212', filter: `brightness(${brightness}%)` }}
            ></div>
        </>
    );
};

export default Header;
