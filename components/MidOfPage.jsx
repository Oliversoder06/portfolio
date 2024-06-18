'use client';
import { motion } from 'framer-motion';

const projects = ["Example 1", "Example 2", "Example 3", "Example 4"];

const MidOfPage = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <h2 className="text-center text-3xl mb-8">Small Examples of recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-8 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.05 }}
                    >
                        {project}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MidOfPage;
