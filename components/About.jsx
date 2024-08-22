import React from 'react';
import SwipeableAboutCards from './SwipeableAboutCards';

const About = () => {
    return (
        <div>
            <section id='about' className='w-full h-auto bg-[rgba(7,7,7,0.6)] sm:flex hidden flex-col gap-10 about-font'>
                <h1 className='text-white text-6xl pt-40 pl-40 font-Monda'>About <span className='text-theme-blue'>Me</span></h1>
                <div className="flex justify-center w-full font-Aldrich">
                    <div className="bg-white h-auto py-10 px-10 mx-20 flex flex-col gap-16 bg-opacity-[0.01] rounded-sm">
                        <div className='flex flex-col gap-10 '>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Who am I?</h3>
                                <p className='text-white text lg2:text-xl pt-5'>
                                    Hi, Oliver here! I'm a full-stack developer with a passion for creating and innovating. I specialize in building dynamic, user-friendly websites and applications that deliver exceptional experiences. I bring a unique perspective to every project. I'm dedicated to pushing boundaries, exploring new technologies, and finding creative solutions to complex problems. Let's work together to bring your ideas to life!
                                </p>
                            </div>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>What's my goal?</h3>
                                <p className='text-white lg2:text-xl pt-5'>
                                    My goal is to help you achieve your vision by providing you with the tools and resources you need to succeed. I'm committed to delivering high-quality work that exceeds your expectations and helps you stand out in a crowded marketplace. Whether you're looking to build a new website, optimize an existing one, or create a custom application, I'm here to help. Let's work together to bring your ideas to life and create something amazing!
                                </p>
                            </div>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Why choose me?</h3>
                                <p className='text-white lg2:text-xl pt-5'>
                                    Choosing me means choosing a partner who is dedicated to your success. I'll work closely with you to understand your needs, goals, and objectives, and develop a customized solution that meets your unique requirements. I'll be there every step of the way to ensure that your project is completed on time, on budget, and to your satisfaction. Let's work together to bring your ideas to life and create something amazing!
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className='bg-white h-[1px] w-[85%]' />
                        </div>
                    </div>
                </div>
            </section>

            <SwipeableAboutCards />
        </div>
    );
};

export default About;
