import { useState, useEffect } from "react";

function useAuth(setLoading, setUser) { // async ({ setLoading, setUser }) => {
    // try {
    //     const response = await fetch("http://127.0.0.1:8000/api/auth/", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `${localStorage.getItem("authToken")}`,
    //             "Content-Type": "application/json",
    //         }
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     console.log('useAuth data ->', data);
    //     setAuthenticated(true);
    //     setUser(data.userData);
    // } catch (error) {
    //     setAuthenticated(false);
    // }
    setLoading(false);

    return null;
}

export default useAuth;