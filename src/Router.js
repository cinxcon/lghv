import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/dashboard/components/Home';
import DashBorad from './pages/publish/dashboard/DashBoard';
import LoginButton from './pages/publish/dashboard/LoginButton';
import ApprovalStandby from './pages/publish/approval/ApprovalStandby';
import ApprovalStandbyDetail from './pages/publish/approval/ApprovalStandbyDetail';
import ApprovalComplete from './pages/publish/approval/ApprovalComplete';
import ApprovalAll from './pages/publish/approval/ApprovalAll';
import ApprovalReturn from './pages/publish/approval/ApprovalReturn';
import ApprovalTempStorage from './pages/publish/approval/ApprovalTempStorage';
import ServicetaskAll from './pages/publish/servicetask/ServicetaskAll';
import ServicetaskDetail from './pages/publish/servicetask/ServicetaskDetail';
import ServicetaskRegist from './pages/publish/servicetask/ServicetaskRegist';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/DashBorad" element={<DashBorad />} />
      <Route path="/LoginButton" element={<LoginButton />} />
      <Route path="/servicetask/ServicetaskAll" element={<ServicetaskAll />} />
      <Route path="/servicetask/ServicetaskDetail" element={<ServicetaskDetail />} />
      <Route path="/servicetask/ServicetaskRegist" element={<ServicetaskRegist />} />
      <Route path="/ApprovalStandby" element={<ApprovalStandby />} />
      <Route path="/ApprovalStandbyDetail" element={<ApprovalStandbyDetail />} />
      <Route path="/ApprovalComplete" element={<ApprovalComplete />} />
      <Route path="/ApprovalAll" element={<ApprovalAll />} />
      <Route path="/ApprovalReturn" element={<ApprovalReturn />} />
      <Route path="/ApprovalTempStorage" element={<ApprovalTempStorage />} />
    </Routes>
  );
};

export default AppRouter;
