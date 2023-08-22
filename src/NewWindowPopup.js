/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRouter from './Router';
import Header from './pages/publish/layout/Header';
import Sidebar from './pages/publish/layout/Sidebar';
import Footer from './pages/publish/layout/Footer';
import ApprovalPopDetail from './pages/publish/LGHV-UIX-APR/_ApprovalPopDetail';

const NewWindowPopup = () => {
  return (
    <>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='abc'>
        <ApprovalPopDetail />
      </div>
    </>
  );
};

export default NewWindowPopup;
