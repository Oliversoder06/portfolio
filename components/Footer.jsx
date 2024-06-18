'use client';

const Footer = () => {
    return (
        <footer id="contact" className="py-8 bg-gray-800 text-white text-center">
            <h2 className="text-2xl mb-4">Let's work together</h2>
            <form className="max-w-xl mx-auto">
                <input type="text" placeholder="Full Name" className="w-full mb-4 p-2" />
                <input type="email" placeholder="Email" className="w-full mb-4 p-2" />
                <textarea placeholder="Message" className="w-full mb-4 p-2" rows="4"></textarea>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Send Message</button>
            </form>
            <p className="mt-4">© 2024 Oliver's Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
