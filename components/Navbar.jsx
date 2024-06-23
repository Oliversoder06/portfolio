'use client';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 w-[30rem] xl:w-[38rem] z-10 bg-[#13141A] rounded-[40px] px-16 no-cursor font-Chathura">
            <Link href="#home" className='text-theme-blue text-5xl no-cursor HoverCursor'>HOME</Link>
            <Link href="#about" className='text-white text-5xl no-cursor HoverCursor'>ABOUT</Link>
            <Link href="#projects" className='text-white text-5xl no-cursor HoverCursor'> PROJECTS</Link>
            <Link href="#contact" className='text-white text-5xl no-cursor HoverCursor'>CONTACT</Link>
        </nav>
    );
};
export default Navbar;