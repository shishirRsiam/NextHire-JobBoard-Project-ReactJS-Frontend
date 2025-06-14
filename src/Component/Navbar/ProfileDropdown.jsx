import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">

      {/* <button onClick={toggleDropdown} className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
        <span className="font-medium">{props.user.user.first_name} {props.user.user.last_name}</span>
        <div className="flex-shrink-0">
          <div className="relative inline-block">
            {props.user.user.profilePic ? (
              <img src={user.profilePic} alt="Profile"
                className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500" />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg border-4 border-blue-500 bg-gray-200 text-gray-700 text-xl  font-bold"
                >
                {`${props.user.user.first_name[0]}${props.user.user.last_name[0]}`.toUpperCase()}
              </div>
            )}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
          viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
            clipRule="evenodd" />
        </svg>
      </button>  */}


      <button onClick={toggleDropdown} className="w-14 h-14 p-3 flex items-center justify-center rounded-full shadow-lg border-4 border-blue-500 bg-gray-200 text-gray-700 text-xl  font-bold">
          {`${props.user.user.first_name[0]}${props.user.user.last_name[0]}`.toUpperCase()}
      </button>



      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <Link onClick={toggleDropdown} to="/dashboard/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
