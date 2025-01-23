import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileDropdown from './ProfileDropdown';
import NavigationLinks from './NavigationLinks';
import useAuth from '../Authentication/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEnvelope, faSuitcase, faInfoCircle, faHome, faNewspaper, faBriefcase } from '@fortawesome/free-solid-svg-icons';



const NavbarComponent = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [Authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await fetch("https://next-hire-api.vercel.app/api/auth/", {
                method: "POST",
                headers: {
                    "Authorization": `${localStorage.getItem("authToken")}`, // Fixed header
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setUser(data.userData);
            setAuthenticated(true);
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <motion.nav
            className="bg-gradient-to-r from-purple-500 to-blue-400 shadow-md top-0 w-full z-10"
            initial={{ y: -100 }} // Start position when off-screen
            animate={{ y: isVisible ? 0 : -100 }} // Animate to the visible state
            transition={{ type: 'spring', stiffness: 100, damping: 25 }} >
            <div className="container mx-auto px-4 py-1 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-white">
                    <span>NextHire</span>
                </a>
                <ul className="hidden md:flex space-x-2">
                    <Link to="/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                        <span>Home</span>
                    </Link>                    <Link to="/feed/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5" />
                        <span>Job Feed</span>
                    </Link>
                    
                    {Authenticated && user.role == "Employer" && (
                        <Link to="/add/post/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPlusCircle} className="h-5 w-5" />
                            <span>Add Post</span>
                        </Link>
                    )}    

                    <Link to="/blogs/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5" />
                        <span>Blog</span>
                    </Link>
                    <Link to="/about/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5" />
                        <span>About</span>
                    </Link>
                    <Link to="/contact/us/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                        <span>Contact Us</span>
                    </Link>
                </ul>
                <div>
                    {Authenticated ? (
                        <ProfileDropdown user={user} />
                    ) : (
                        <div className="flex space-x-4">
                            <Link to='/login/' className="hidden md:inline-block bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Login
                            </Link>
                            <Link to='/register/' className="hidden md:inline-block bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMobileMenu} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <motion.div
                className="md:hidden bg-purple-500 text-white px-4 py-4"
                initial={{ opacity: 0 }} // Start with no opacity
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }} // Fade in when the menu is open
                transition={{ duration: 0.3 }}>
                <NavigationLinks />
                <div className="mt-4">
                    {Authenticated ? (
                        <ProfileDropdown user={user} />
                    ) : (
                        <div className="flex space-x-4">
                            <Link to='/login/' className="block py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Login
                            </Link>
                            <Link to='/register/' className="block py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default NavbarComponent;
