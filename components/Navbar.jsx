'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-transparent fixed w-[38rem] z-10 bg-[#13141A] rounded-[40px] px-16">
            <Link href="#home" className='text-[#66FCF1] text-xl font-bold'>Home</Link>
            <Link href="#about" className='text-white text-xl font-bold'>About</Link>
            <Link href="#projects" className='text-white text-xl font-bold '>Projects</Link>
            <Link href="#contact" className='text-white text-xl font-bold '>Contact</Link>
        </nav>
    );
};

export default Navbar;
