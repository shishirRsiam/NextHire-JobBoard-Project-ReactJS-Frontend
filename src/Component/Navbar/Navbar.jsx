import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileDropdown from './ProfileDropdown';
import NavigationLinks from './NavigationLinks';
import useAuth from '../Authentication/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEnvelope, faSuitcase, faInfoCircle, faHome, faNewspaper, faBriefcase, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [Authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/", {
                method: "POST",
                headers: {
                    "Authorization": `${localStorage.getItem("authToken")}`,
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
            className="bg-white shadow-md top-0 w-full z-10"
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-gray-800">
                    NextHire
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 font-medium hover:text-blue-500 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                        <span>Home</span>
                    </Link>
                    <Link to="/feed/" className="text-gray-700 font-medium hover:text-blue-500 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5" />
                        <span>Job Feed</span>
                    </Link>
                    {Authenticated && user.role === "Employer" && (
                        <Link to="/add/post/" className="text-gray-700 font-medium hover:text-blue-500 transition-all flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPlusCircle} className="h-5 w-5" />
                            <span>Add Post</span>
                        </Link>
                    )}
                    <Link to="/blogs/" className="text-gray-700 font-medium hover:text-blue-500 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5" />
                        <span>Blog</span>
                    </Link>
                    <Link to="/about/" className="text-gray-700 font-medium hover:text-blue-500 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5" />
                        <span>About</span>
                    </Link>
                    <Link to="/contact/us/" className="text-gray-700 font-medium hover:text-blue-500 transition-all flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                        <span>Contact Us</span>
                    </Link>
                </ul>

                {/* Authentication Buttons */}
                <div className="hidden md:flex space-x-4">
                    {Authenticated ? (
                        <ProfileDropdown user={user} />
                    ) : (
                        <>
                            <Link
                                to='/login/'
                                className="text-gray-700 font-medium hover:text-blue-500 transition-transform transform hover:scale-105 flex items-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faSignInAlt} className="h-5 w-5" />
                                <span>Login</span>
                            </Link>
                            <Link
                                to='/register/'
                                className="text-gray-700 font-medium hover:text-green-500 transition-transform transform hover:scale-105 flex items-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faUserPlus} className="h-5 w-5" />
                                <span>Register</span>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <motion.div
                className="md:hidden bg-gray-50 text-gray-700 px-4 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <NavigationLinks />
                <div className="mt-4">
                    {Authenticated ? (
                        <ProfileDropdown user={user} />
                    ) : (
                        <div className="flex flex-col space-y-4">
                            <Link
                                to='/login/'
                                className="block py-3 px-6 rounded-lg text-gray-700 font-medium hover:text-blue-500 transition-transform transform hover:scale-105"
                            >
                                Login
                            </Link>
                            <Link
                                to='/register/'
                                className="block py-3 px-6 rounded-lg text-gray-700 font-medium hover:text-green-500 transition-transform transform hover:scale-105"
                            >
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