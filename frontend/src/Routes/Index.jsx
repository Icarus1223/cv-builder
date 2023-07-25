import React, { useRef, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login/Login';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

import Profile from '../Pages/Auth/Profile/Profile';
import Layout from '../Components/Layout/Layout';

const Index = () => {

  const location = useLocation();
  const isAuthRouts = location.pathname === '/login';

 


  return (
    <>
      {isAuthRouts ? (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            </Routes>
          </Layout>
        </>
      )
      }
    </>
  )
}

export default Index