import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { TEInput, TERipple } from 'tw-elements-react';

import API from './API';

import ErrorSwalAlert from '../SwalAlert/ErrorSwalAlert';
import SuccessSwalAlert from '../SwalAlert/SuccessSwalAlert';
import ProccessingSwalAlert from '../SwalAlert/ProccessigSwalAlert';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: 'shishir', password: '123456',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    ProccessingSwalAlert();
    try {
      const response = await fetch(API.LoginAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        SuccessSwalAlert({ title: result.title, text: result.message , next_url: '/profile/' });
      } else {
        ErrorSwalAlert({ title: result.title, text: result.message });
      }
    } catch (error) {
      SuccessSwalAlert({ title: 'Error', text: error.message });
    }
  };

  return (
    <section className="h-screen bg-gray-100">
      <div className="container h-full px-6 py-12 mx-auto">
        <div className="flex h-full items-center justify-center gap-10 flex-wrap lg:flex-nowrap">
          <div className="mb-12 md:mb-0 lg:w-6/12 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="hidden lg:block w-full max-w-[400px]"
              alt="Cute image"
            />
          </div>

          <div className="lg:w-5/12 w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-center text-3xl font-bold text-purple-600 mb-6">Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
              <TEInput
                required type="text" label="Username or Email address" size="lg"
                name="username" value={formData.email} onChange={handleChange}
                className="mb-6 w-full rounded-lg border-pink-300 focus:border-purple-400"
              />

              {/* Password input */}
              <TEInput
                required
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                className="mb-6 w-full rounded-lg border-pink-300 focus:border-purple-400"
              />
              

              {/* Remember me checkbox */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-pink-500 border-gray-300 rounded"
                    type="checkbox"
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label className="ml-2 text-sm text-gray-700" htmlFor="exampleCheck3">
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a href="#!" className="text-purple-500 text-sm hover:text-purple-700">
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-purple-500 text-white text-sm font-medium uppercase rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  Login
                </button>
              </TERipple>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-purple-500 hover:text-purple-700">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
