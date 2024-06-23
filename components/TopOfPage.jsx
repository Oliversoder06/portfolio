// TopOfPage.jsx
'use client';

import SkillRain from "./SkillRain";

const TopOfPage = () => {
    return (
        <section id="home" className="relative h-screen flex w-full justify-center items-center">
            <div className='w-[50%] h-full flex justify-center items-center gap-10 lg2:gap-16'>
                <div className='w-[3px] h-[140px] lg2:h-[177px] bg-[#D9D9D9]' />
                <div>
                    <h1 className="text-3xl lg2:text-5xl text-[#C5C6C7]">
                        OLIVER SÖDERLUND<br />
                    </h1>
                    <h2 className="text-7xl lg2:text-8xl text-[#fff] lg2:leading-[0.9]">
                        I'm a Web <br /><span className='text-[#66FCF1]'>Developer</span>
                    </h2>
                </div>
            </div>
            <div className='w-[50%] h-full relative'>
                <SkillRain />
            </div>
        </section>
    );
};

export default TopOfPage;
