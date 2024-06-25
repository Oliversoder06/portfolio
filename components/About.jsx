import React from 'react';
import SwipeableAboutCards from './SwipeableAboutCards';

const About = () => {
    return (
        <div>
            <section className='w-full h-auto bg-[rgba(7,7,7,0.6)] sm:flex hidden flex-col gap-10 about-font'>
                <h1 className='text-white text-6xl pt-40 pl-40 font-Monda'>About <span className='text-theme-blue'>Me</span></h1>
                <div className="flex justify-center w-full font-Aldrich">
                    <div className="bg-white h-auto py-10 px-10 mx-20 flex flex-col gap-16 bg-opacity-[0.01] rounded-sm">
                        <div className='flex flex-col gap-10 '>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Header 1</h3>
                                <p className='text-white text lg2:text-xl pt-5'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius labore unde deleniti corporis aperiam nesciunt, inventore accusantium eum iure odit, rerum ipsam nihil asperiores ex ipsum, odio maiores perferendis tenetur.
                                </p>
                            </div>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Header 2</h3>
                                <p className='text-white lg2:text-xl pt-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi tenetur odit earum magni maxime sapiente, inventore explicabo eveniet. Asperiores ullam reiciendis quaerat! Officiis, tempora dolores exercitationem rerum eos cumque.
                                    Ab delectus dicta perspiciatis rem eos officiis esse accusamus optio! Vitae similique id fugit perferendis ad, unde rerum reiciendis nam animi alias et necessitatibus voluptatem eaque assumenda maxime modi! Ut.
                                </p>
                            </div>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Header 3</h3>
                                <p className='text-white lg2:text-xl pt-5'>
                                    This is the third card
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
