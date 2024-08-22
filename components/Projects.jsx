import React from 'react'
import Project from './Project'
import Link from 'next/link'

const Projects = () => {
    return (
        <section id='projects' className='w-full flex justify-center items-center pt-[2rem] flex-col'>
            <h1 className="text-white font-Monda text-3xl xs2:text-5xl  text-center">Small Examples of recent <span className='text-theme-blue'>Projects</span></h1>
            <div className='flex flex-col items-center gap-7 mt-10'>
                <div className='flex xl:flex-row flex-col gap-7'>
                    <Project
                        image='/images/NexTalk.png'
                        label={'NexTalk'}
                        color={'#ffffff'}
                    />
                    <Project
                        image='/images/WaisGPT.png'
                        label={'WaisGPT'}
                        color={'#ffffff'}
                    />
                </div>
                <div className='flex xl:flex-row flex-col gap-7'>
                    <Project
                        image='/images/SmileySpeak.png'
                        label={'SmileySpeak'}
                        color={"#141414"}
                    />
                    {/* <Project /> */}
                </div>
            </div>
            {/* <Link href={"https://www.youtube.com/watch?v=BmXihA_P3EE"} className='font-Monda text-2xl md2:text-3xl underline HoverCursor mt-5'>View More</Link> */}
        </section>
    )
}

export default Projects