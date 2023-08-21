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
import AccUser from './pages/publish/accessctrl/LGHV-UIX-ACC-0003';
import AccUserList from './pages/publish/accessctrl/LGHV-UIX-ACC-0001';
import AccUserGroupList from './pages/publish/accessctrl/LGHV-UIX-ACC-0002';
import AccUserRegist from './pages/publish/accessctrl/LGHV-UIX-ACC-0006';
import AccEquipmentList from './pages/publish/accessctrl/LGHV-UIX-ACC-0004';
import AccEquipmentDetail from './pages/publish/accessctrl/LGHV-UIX-ACC-0005';
import AccEquipmentRegist from './pages/publish/accessctrl/LGHV-UIX-ACC-0007';
import AccEquipmentListView from './pages/publish/accessctrl/LGHV-UIX-ACC-0008';
import AccPolicy from './pages/publish/accessctrl/LGHV-UIX-ACC-0009';
import ServicetaskRegistNm from './pages/publish/servicetask/LGHV-UIX-WRK-0001';
import ServicetaskRegistUr from './pages/publish/servicetask/LGHV-UIX-WRK-0002';
import ServicetaskAll from './pages/publish/servicetask/LGHV-UIX-WRK-0003';
import ServicetaskDetail from './pages/publish/servicetask/LGHV-UIX-WRK-0004';

import ApprovalTest from './pages/publish/approval/_Approval';
import ApprovalDetailTest from './pages/publish/approval/_ApprovalDetail';
import WinOpen from './pages/publish/popup/windowOpenPopup';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LGHV-UIX-WRK-0003" element={<DashBorad />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0001" element={<ServicetaskRegistNm />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0002" element={<ServicetaskRegistUr />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0003" element={<ServicetaskAll />} />
      <Route path="/servicetask/LGHV-UIX-WRK-0004" element={<ServicetaskDetail />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0003" element={<AccUser />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0001" element={<AccUserList />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0002" element={<AccUserGroupList />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0006" element={<AccUserRegist />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0004" element={<AccEquipmentList />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0005" element={<AccEquipmentDetail />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0007" element={<AccEquipmentRegist />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0008" element={<AccEquipmentListView />} />
      <Route path="/accessctrl/LGHV-UIX-ACC-0009" element={<AccPolicy />} />
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

      <Route path="/approval/ApprovalDetailTest" element={<ApprovalDetailTest />} />
      <Route path="/approval/ApprovalTest" element={<ApprovalTest />} />
      <Route path="/popup/WindowOpenPopup" element={<WinOpen />} />
    </Routes>
  );
};

export default AppRouter;
