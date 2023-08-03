import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/dashboard/components/Home';
import DashBorad from './pages/publish/dashboard/DashBoard';
import ApprovalStandby from './pages/publish/approval/ApprovalStandby';
import ApprovalStandbyDetail from './pages/publish/approval/ApprovalStandbyDetail';
import ApprovalComplete from './pages/publish/approval/ApprovalComplete';
import ApprovalCompleteDetail from './pages/publish/approval/ApprovalCompleteDetail';
import ApprovalAll from './pages/publish/approval/ApprovalAll';
import ApprovalAllDetail from './pages/publish/approval/ApprovalAllDetail';
import ApprovalReturn from './pages/publish/approval/ApprovalReturn';
import ApprovalReturnDetail from './pages/publish/approval/ApprovalReturnDetail';
import ApprovalTempStorage from './pages/publish/approval/ApprovalTempStorage';
import ApprovalTempStorageDetail from './pages/publish/approval/ApprovalTempStorageDetail';
// test ↓↓↓
import ApprovalTest from './pages/publish/approval/_Approval';
import ApprovalDetailTest from './pages/publish/approval/_ApprovalDetail';
// test ↑↑↑
import ServicetaskAll from './pages/publish/servicetask/ServicetaskAll';
import ServicetaskDetail from './pages/publish/servicetask/ServicetaskDetail';
import ServicetaskRegist from './pages/publish/servicetask/ServicetaskRegist';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DashBorad" element={<DashBorad />} />
      <Route path="/servicetask/ServicetaskAll" element={<ServicetaskAll />} />
      <Route path="/servicetask/ServicetaskDetail" element={<ServicetaskDetail />} />
      <Route path="/servicetask/ServicetaskRegist" element={<ServicetaskRegist />} />
      <Route path="/approval/ApprovalStandby" element={<ApprovalStandby />} />
      <Route path="/approval/ApprovalStandbyDetail" element={<ApprovalStandbyDetail />} />
      <Route path="/approval/ApprovalComplete" element={<ApprovalComplete />} />
      <Route path="/approval/ApprovalCompleteDetail" element={<ApprovalCompleteDetail />} />
      <Route path="/approval/ApprovalAll" element={<ApprovalAll />} />
      <Route path="/approval/ApprovalAllDetail" element={<ApprovalAllDetail />} />
      <Route path="/approval/ApprovalReturn" element={<ApprovalReturn />} />
      <Route path="/approval/ApprovalReturnDetail" element={<ApprovalReturnDetail />} />
      <Route path="/approval/ApprovalTempStorage" element={<ApprovalTempStorage />} />
      <Route path="/approval/ApprovalTempStorageDetail" element={<ApprovalTempStorageDetail />} />
      {/* test ↓↓↓ */}
      <Route path="/approval/ApprovalTest" element={<ApprovalTest />} />
      <Route path="/approval/ApprovalDetailTest" element={<ApprovalDetailTest />} />
      {/* test ↑↑↑ */}
    </Routes>
  );
};

export default AppRouter;
