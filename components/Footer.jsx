import React from 'react'
import Input from './Input'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {
    return (
        <div className='w-full mt-64'>
            <h1 className="text-white font-Monda text-5xl lg2:text-6xl text-center my-20">Let's work <span className='text-theme-blue'>Together</span></h1>

            {/* ALL CONTENT */}
            <div className='w-full flex flex-col lg:flex-row'>
                {/* CONTACT FORM */}
                <form action="" className='w-full lg:w-[50%] h-[850px] flex flex-col gap-20 font-Monda items-center justify-center'>
                    <Input placeholder='Enter your full name' label='Full Name' type='text' />
                    <Input placeholder='Enter your email address' label='Email' type='email' />
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="message" className='text-white font-Monda text-xl xs:text-2xl md:cursor-none md:HoverCursor ml-2'>Message</label>
                        <textarea name="" id="message" placeholder='Enter your message...' className='w-[300px] xs2:w-[500px] h-[215px] rounded-md border-[1px] border-[#ffffff] bg-[rgba(7,7,7,0.2)] xs:cursor md:cursor-none md:HoverCursor pl-4 pt-3 text-white text-[16px] xs:text-[20px] placeholder:text-[rgba(255,255,255,0.20)] focus:border-theme-blue outline-none'></textarea>
                    </div>
                    <button className='w-[280px] h-[70px] rounded-[16px] border-[2px] border-[#272727] bg-[rgba(21,21,21,0.40)] HoverCursor hover:bg-[rgba(34,34,34,0.4)] hover:scale-[1.02] transition-all duration-300'>Send Message</button>
                </form>
                {/* FOOTER */}
                <footer className='w-full lg:w-[50%] h-[850px] bg-[#181818] px-10 sm:px-20 pt-32 pb-16 flex flex-col justify-between'>
                    <p className='font-Monda text-white opacity-90 text-xl 2xl:text-2xl leading-[1.5] mb-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum velit eveniet a tempore veritatis cumque ut, itaque debitis cupiditate officia odio odit facilis fuga possimus impedit dolorum eligendi veniam?</p>
                    <div className='w-full flex justify-center lg:hidden'>
                        <div className='w-[90%] h-[1px] bg-white' />
                    </div>
                    <div className='flex flex-col mb-12 lg:mb-28'>
                        <div className='flex flex-col gap-10'>
                            <div className='items-center gap-5 hidden lg:flex'>
                                <Image src='/icons/footer-email.svg' width={36} height={36} alt='Logo' />
                                <p className='font-Monda'>someone@gmail.com</p>
                            </div>

                            <div className='flex gap-3 justify-center lg:justify-start'>
                                <Link href="https://github.com/Oliversoder06">
                                    <Image src='/icons/footer-github.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100' />
                                </Link>
                                <Link href="https://www.linkedin.com/in/oliver-s%C3%B6derlund-granzer/">
                                    <Image src='/icons/footer-linkedin.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100' />
                                </Link>
                                <Link href="https://www.instagram.com/oliver.soder06/">
                                    <Image src='/icons/footer-instagram.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100' />
                                </Link>
                                <Link href="https://www.instagram.com/oliver.soder06/">
                                    <Image src='/icons/footer-email.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100 lg:hidden' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <p className='text-xl xl:text-2xl font-Monda text-white text-center'>©2024 Oliver’s Portfolio, All right reserved.</p>
                    </div>
                </footer>
            </div >
        </div >
    )
}

export default Footer