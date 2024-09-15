'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="sm:flex hidden justify-between items-center p-4 w-[20rem] md2:w-[30rem] xl:w-[38rem] z-10 bg-[#13141A] rounded-[40px] px-8 md2:px-16 no-cursor font-Chathura gap-5">
                <Link href="#home" className='text-theme-blue text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>HOME</Link>
                <Link href="#about" className='text-white text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>ABOUT</Link>
                <Link href="#projects" className='text-white text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>PROJECTS</Link>
                <Link href="#contact" className='text-white text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>CONTACT</Link>
            </nav>

            {/* Mobile Navbar */}
            <nav className='sm:hidden flex pl-5'>
                {isOpen ? (
                    <div className='fixed inset-0 z-20 bg-[#13141A] flex flex-col justify-center items-center'>
                        <Image
                            onClick={handleOpen}
                            src='/icons/cross.svg'
                            width={40}
                            height={40}
                            className='cursor-pointer absolute top-4 right-4'
                        />
                        <nav className='flex flex-col justify-center items-center gap-5 p-4 w-full text-center'>
                            <Link href="#home" className='text-theme-blue text-3xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>HOME</Link>
                            <Link href="#about" className='text-white text-3xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>ABOUT</Link>
                            <Link href="#projects" className='text-white text-3xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>PROJECTS</Link>
                            <Link href="#contact" className='text-white text-3xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>CONTACT</Link>
                        </nav>
                    </div>
                ) : (
                    <div className='bg-black w-full h-full'>
                        <Image onClick={handleOpen} src='/icons/burger-menu.svg' width={40} height={40} className='cursor-pointer' />
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
