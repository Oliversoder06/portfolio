'use client';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 50 }}
                transition={{ duration: 5 }}
            >
                Loading...
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
