// components/BrightnessSlider.jsx
'use client';

import React from 'react';

const BrightnessSlider = ({ onChange }) => {
    return (
        <div className="z-[100] flex items-center">
            <input
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                className="custom-slider"
                onChange={(e) => onChange(parseInt(e.target.value))}
            />
        </div>
    );
};

export default BrightnessSlider;
