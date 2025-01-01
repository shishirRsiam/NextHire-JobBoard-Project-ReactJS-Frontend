import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-4">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">NextHire</h3>
                        <p className="text-sm">
                            Empowering your hiring process with modern tools and seamless experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul>
                            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
                            <li><a href="#features" className="hover:text-yellow-300">Features</a></li>
                            <li><a href="#pricing" className="hover:text-yellow-300">Pricing</a></li>
                            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                        <ul>
                            <li><a href="#blog" className="hover:text-yellow-300">Blog</a></li>
                            <li><a href="#help" className="hover:text-yellow-300">Help Center</a></li>
                            <li><a href="#terms" className="hover:text-yellow-300">Terms of Service</a></li>
                            <li><a href="#privacy" className="hover:text-yellow-300">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
                        <p className="text-sm mb-4">
                            Sign up to get updates on the latest features and news.
                        </p>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
                            />
                            <button className="bg-yellow-300 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-600 my-6" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 NextHire. All Rights Reserved.</p>
                    <div className="space-x-4">
                        <a href="#facebook" className="hover:text-yellow-300">Facebook</a>
                        <a href="#twitter" className="hover:text-yellow-300">Twitter</a>
                        <a href="#linkedin" className="hover:text-yellow-300">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
