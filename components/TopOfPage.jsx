'use client';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const icons = [FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs];

const TopOfPage = () => {
    return (
        <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white">
                OLIVER SÖDERLUND<br />
                <span className="text-4xl">I'm a Web</span><br />
                <span className="text-teal-500 text-6xl">Developer</span>
            </h1>
            {/* <div className="absolute inset-0">
                {icons.map((Icon, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 50, opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute"
                    >
                        <Icon size={50} className="text-white opacity-25" />
                    </motion.div>
                ))}
            </div> */}
        </section>
    );
};

export default TopOfPage;
