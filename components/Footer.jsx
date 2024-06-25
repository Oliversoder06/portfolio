import React from 'react'
import Input from './Input'



const Footer = () => {
    return (
        <div className='w-full mt-20'>
            <h1 className="text-white font-Monda text-5xl lg2:text-6xl text-center my-20">Let's work <span className='text-theme-blue'>Together</span></h1>

            <div className='w-full flex'>
                <form action="" className='w-[50%] h-[850px] flex flex-col gap-20 font-Monda items-center justify-center'>
                    <Input placeholder='Enter your full name' label='Full Name' type='text' />
                    <Input placeholder='Enter your email address' label='Email' type='email' />
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="message" className='text-white font-Monda text-2xl cursor-none HoverCursor ml-4'>Message</label>
                        <textarea name="" id="message" placeholder='Enter your message...' className='w-[575px] h-[215px] rounded-md border-[1px] border-[#1d1d1d] bg-[rgba(7,7,7,0.2)] cursor-none HoverCursor pl-4 pt-3 text-white text-[20px] placeholder:text-[rgba(255,255,255,0.20)]'></textarea>
                    </div>
                    <button className='w-[280px] h-[70px] rounded-[16px] border-[2px] border-[#272727] bg-[rgba(21,21,21,0.40)] HoverCursor hover:bg-[rgba(34,34,34,0.4)] hover:scale-[1.02] transition-all duration-300'>Send Message</button>
                </form>

                <footer className='w-[50%] h-[850px] bg-[rgba(53,53,53,0.20)]'>

                </footer>
            </div>
        </div>
    )
}

export default Footer