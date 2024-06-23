import React from 'react';
import Skills from './Skills';
import Image from 'next/image';
import '../app/css/cursor.css';
import '../app/css/iconRain.css';

const SkillRain = () => {
    const skillEntries = Object.entries(Skills);

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    return (
        <div className='rain'>
            {skillEntries.map(([skill, src], index) => {
                const delay = getRandomInt(0, 20000) / 1000; // Random delay between 0 to 15 seconds
                const left = getRandomInt(0, 100); // Random horizontal position between 0% to 100%

                return (
                    <div
                        key={skill}
                        className='icon-overlay'
                        style={{
                            left: `${left}%`,
                            animationDuration: '10s', // Duration of the falling animation
                            animationDelay: `${delay}s`,
                        }}
                    >
                        <Image src={src} alt={`${skill} Logo`} width={48} height={48} />
                    </div>
                );
            })}
        </div>
    );
}

export default SkillRain;
