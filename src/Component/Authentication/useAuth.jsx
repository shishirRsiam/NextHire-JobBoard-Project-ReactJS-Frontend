import { useState, useEffect } from "react";

const useAuth = ({ setAuthenticated, setUser }) => {
    const fetchUser = async () => {
        try {
            const response = await fetch("https://next-hire-api.vercel.app/api/auth/", {
                method: "GET",
                headers: {
                    Authorization: `${localStorage.getItem("authToken")}`,
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('useAuth data ->', data);
            setAuthenticated(true);
            setUser(data.userData);
        } catch (error) {
            setAuthenticated(false);
        }
    };

    fetchUser();
}

export default useAuth;
