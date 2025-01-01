import { useState, useEffect } from 'react';

function isAuthenticated () {
    const token = localStorage.getItem('authToken');
    if (token) {
      return true;
    } else {
      return false;
    }
};

export default isAuthenticated;
