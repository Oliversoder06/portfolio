'use client';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 w-[30rem] xl:w-[38rem] z-10 bg-[#13141A] rounded-[40px] px-16 no-cursor">
            <Link href="#home" className='text-[#66FCF1] text-xl font-bold no-cursor HoverCursor'>Home</Link>
            <Link href="#about" className='text-white text-xl font-bold no-cursor HoverCursor'>About</Link>
            <Link href="#projects" className='text-white text-xl font-bold no-cursor HoverCursor'>Projects</Link>
            <Link href="#contact" className='text-white text-xl font-bold no-cursor HoverCursor'>Contact</Link>
        </nav>
    );
};
export default Navbar;