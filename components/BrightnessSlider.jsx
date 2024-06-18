// components/BrightnessSlider.jsx
'use client';

import React from 'react';

const BrightnessSlider = ({ onChange }) => {
    return (
        <div className="absolute top-4 left-4 z-[100] flex items-center">
            <input
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                className="custom-slider w-48rem"
                onChange={(e) => onChange(parseInt(e.target.value))}
            />
        </div>
    );
};

export default BrightnessSlider;
