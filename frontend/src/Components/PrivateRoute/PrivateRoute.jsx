import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(true); // Replace 'true' with your actual token checking logic

  useEffect(() => {
    // Simulate token checking or any other async operations
    // Replace the setTimeout with your actual token verification logic
    setTimeout(() => {
      setToken(false); // Replace 'false' with the result of your token check
    }, 2000); // Delay for 2 seconds before showing children and redirecting to login
  }, []);

  if (token) {
    return <Navigate to={'/login'} replace />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;