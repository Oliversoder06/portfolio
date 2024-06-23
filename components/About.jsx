import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen bg-[rgba(7,7,7,0.5)] flex flex-col gap-10 about-font'>
            <h1 className='text-white text-6xl pt-40 pl-40 font-Monda'>About <span className='text-theme-blue'>Me</span></h1>
            <div className="flex items-center justify-center font-Aldrich">
                <div className="bg-black w-[90%] h-auto py-10 px-10 flex flex-col gap-16 bg-opacity-20">
                    <div className='flex flex-col gap-10'>
                        <div>
                            <h3 className='text-theme-blue text-3xl'>Hello, I'm Oliver Söderlund</h3>
                            <p className='text-white text-xl pt-5'>I'm a web developer based in Stockholm, Sweden. I have a passion for web development and love to create websites and web applications that are both functional and visually appealing. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, React, and Node.js. I'm always looking to learn new things and improve my skills as a developer. In my free time, I enjoy playing video games, watching movies, and spending time with friends and family.</p>
                        </div>
                        <div>
                            <h3 className='text-theme-blue text-3xl'>Hello, I'm Oliver Söderlund</h3>
                            <p className='text-white text-xl pt-5'>I'm a web developer based in Stockholm, Sweden. I have a passion for web development and love to create websites and web applications that are both functional and visually appealing. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, React, and Node.js. I'm always looking to learn new things and improve my skills as a developer. In my free time, I enjoy playing video games, watching movies, and spending time with friends and family.</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='bg-white h-[1px] w-[85%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About