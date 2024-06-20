'use client';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const icons = [FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs];

const TopOfPage = () => {
    return (
        <section id="home" className="relative h-screen flex w-full justify-center items-center">

            <div className='w-[50%] h-full flex justify-center items-center gap-16'>
                <div className='w-[3px] h-[177px] bg-[#D9D9D9]' />
                <div>
                    <h1 className="text-5xl text-[#C5C6C7]">
                        OLIVER SÖDERLUND<br />
                    </h1>
                    <h2 className="text-8xl text-[#fff] leading-[0.9]">
                        I'm a Web <br /><span className='text-[#66FCF1]'>Developer</span>
                    </h2>
                </div>
            </div>

            <div className='bg-gray-900 w-[50%] h-full opacity-30'>

            </div>
        </section>
    );
};

export default TopOfPage;
