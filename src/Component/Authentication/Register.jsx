import React, { useState } from "react";
import { TEInput, TERipple } from 'tw-elements-react';
import ErrorSwalAlert from "../SwalAlert/ErrorSwalAlert";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', username: '', email: '', 
    password: '', confirm_password: '', role: 'Job Seeker', company_name: '',
    terms_conditions: true,
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirm_password)
      errors.confirm_password = "Passwords do not match";
    if (!formData.terms_conditions)
      errors.terms_conditions = "You must agree to the terms and conditions";

    // Optional: Validation for company_name based on role
    if (formData.role === "Employer" && !formData.company_name)
      errors.company_name = "Company name is required for Employers";
    if (formData.role === "Job Seeker" && !formData.resume)
      errors.resume = "Resume is required for Employers";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const FetchAPI = async () => {
    try {
        const response = await fetch("https://next-hire-api.vercel.app/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          SuccessSwalAlert({ title: data.title, text: data.message , next_url: '/login/' });
        }
        else {
          ErrorSwalAlert({ title: data.title, text: data.message });
        }
    } catch (error) {
        // ErrorSwalAlert({ title: 'Error', text: 'Failed to submit the form' });
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      ProccessingSwalAlert();
      FetchAPI();
    }
  };

  return (
    <div className="max-w-6xl border mx-auto bg-white shadow-lg rounded-3xl p-8 pb-5 my-10">
      <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
        Create Your NextHire Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              required
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            />
            {formErrors.first_name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.first_name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              required
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            />
            {formErrors.last_name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.last_name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            />
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
        </div>

        {/* Password and Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            />
            {formErrors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.confirm_password}</p>
            )}
          </div>
        </div>

        {/* Role and Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role" value={formData.role} onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            >
              <option value="Job Seeker">Job Seeker</option>
              <option value="Employer">Employer</option>
            </select>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="terms_conditions"
            checked={formData.terms_conditions}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="text-sm text-gray-600">
            I agree to the <a href="#" className="text-indigo-600">terms and conditions</a>.
          </label>
        </div>
        {formErrors.terms_conditions && (
          <p className="text-red-500 text-sm mt-1">{formErrors.terms_conditions}</p>
        )}

        <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={loading} >
          {loading ? "Processing..." : "Sign Up"}
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login/" className="text-purple-500 hover:text-purple-700">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
