import React from 'react';
import { toast } from 'react-toastify';

const ExampleComponent = () => {
    const showSuccessNotification = () => {
        toast.success('Profile updated successfully!');
    };

    const showErrorNotification = () => {
        toast.error('Error updating profile!');
    };

    return (
        <div>
            <button onClick={showSuccessNotification}
                className="bg-green-500 text-white py-2 px-4 rounded-lg">
                Show Success Notification
            </button>
            <button onClick={showErrorNotification}
                className="bg-red-500 text-white py-2 px-4 rounded-lg ml-4">
                Show Error Notification
            </button>
        </div>
    );
};

export default ExampleComponent;