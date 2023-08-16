import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/dashboard/components/Home';
import DashBorad from './pages/publish/dashboard/LGHV-UIX-WRK-0003';
import ApprovalStandby from './pages/publish/approval/LGHV-UIX-APR-0001';
import ApprovalStandbyDetail from './pages/publish/approval/LGHV-UIX-APR-0001-Detail';
import ApprovalComplete from './pages/publish/approval/LGHV-UIX-APR-0002';
import ApprovalCompleteDetail from './pages/publish/approval/LGHV-UIX-APR-0002-Detail';
import ApprovalAll from './pages/publish/approval/LGHV-UIX-APR-0003';
import ApprovalAllDetail from './pages/publish/approval/LGHV-UIX-APR-0003-Detail';
import ApprovalReturn from './pages/publish/approval/LGHV-UIX-APR-0004';
import ApprovalReturnDetail from './pages/publish/approval/LGHV-UIX-APR-0004-Detail';
import ApprovalTempStorage from './pages/publish/approval/LGHV-UIX-APR-0005';
import ApprovalTempStorageDetail from './pages/publish/approval/LGHV-UIX-APR-0005-Detail';
// test ↓↓↓
import ApprovalTest from './pages/publish/approval/_Approval';
import ApprovalDetailTest from './pages/publish/approval/_ApprovalDetail';
// test ↑↑↑
import ServicetaskRegistNm from './pages/publish/servicetask/LGHV-UIX-WRK-0001';
import ServicetaskRegistUr from './pages/publish/servicetask/LGHV-UIX-WRK-0002';
import ServicetaskAll from './pages/publish/servicetask/LGHV-UIX-WRK-0003';
import ServicetaskDetail from './pages/publish/servicetask/LGHV-UIX-WRK-0004';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LGHV-UIX-WRK-0003" element={<DashBorad />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0001" element={<ServicetaskRegistNm />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0002" element={<ServicetaskRegistUr />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0003" element={<ServicetaskAll />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0004" element={<ServicetaskDetail />} />
      <Route path="/approval/LGHV-UIX-APR-0001" element={<ApprovalStandby />} />
      <Route path="/approval/LGHV-UIX-APR-0001-Detail" element={<ApprovalStandbyDetail />} />
      <Route path="/approval/LGHV-UIX-APR-0002" element={<ApprovalComplete />} />
      <Route path="/approval/LGHV-UIX-APR-0002-Detail" element={<ApprovalCompleteDetail />} />
      <Route path="/approval/LGHV-UIX-APR-0003" element={<ApprovalAll />} />
      <Route path="/approval/LGHV-UIX-APR-0003-Detail" element={<ApprovalAllDetail />} />
      <Route path="/approval/LGHV-UIX-APR-0004" element={<ApprovalReturn />} />
      <Route path="/approval/LGHV-UIX-APR-0004-Detail" element={<ApprovalReturnDetail />} />
      <Route path="/approval/LGHV-UIX-APR-0005" element={<ApprovalTempStorage />} />
      <Route path="/approval/LGHV-UIX-APR-0005-Detail" element={<ApprovalTempStorageDetail />} />
      {/* test ↓↓↓ */}
      <Route path="/approval/ApprovalTest" element={<ApprovalTest />} />
      <Route path="/approval/ApprovalDetailTest" element={<ApprovalDetailTest />} />
      {/* test ↑↑↑ */}
    </Routes>
  );
};

export default AppRouter;
