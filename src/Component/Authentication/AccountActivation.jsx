import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "./API";
import ErrorSwalAlert from "../SwalAlert/ErrorSwalAlert";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import LoadingPage from "./LoadingPage";


function ActivationPage() {
    const { id, token } = useParams();


    const activateAccount = async () => {
        try {
        const response = await fetch(`http://127.0.0.1:8000/api/accounts/activate/${id}/${token}/`);
        const data = await response.json();

        if (response.ok) {
            let url = '/';
            if(data.is_already_activated) {
                url = '/login/';
            }
            SuccessSwalAlert({ title: data.title, text: data.message, next_url: url });
        } else {
            ErrorSwalAlert({ title: data.title, text: data.message });
        }
    } catch (error) {
            ErrorSwalAlert({ title: "Error!", text: "Something went wrong." });
        }
    };


    useEffect(() => {
        activateAccount();
    }, []);
  
  return (
    < LoadingPage />
  );
}

export default ActivationPage;
