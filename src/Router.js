import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/dashboard/components/Home';
import DashBorad from './pages/publish/dashboard/DashBoard';
import ApprovalStandby from './pages/publish/approval/ApprovalStandby';
import ApprovalStandbyDetail from './pages/publish/approval/ApprovalStandbyDetail';
import ApprovalComplete from './pages/publish/approval/ApprovalComplete';
import ApprovalCompleteDetail from './pages/publish/approval/ApprovalCompleteDetail';
import AccUser from './pages/publish/accessctrl/AccUser';
import AccUserList from './pages/publish/accessctrl/AccUserList';
import AccUserGroupList from './pages/publish/accessctrl/AccUserGroupList';
import AccUserRegist from './pages/publish/accessctrl/AccUserRegist';
import AccEquipmentList from './pages/publish/accessctrl/AccEquipmentList';
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
      {/* 접근제어 메뉴 : accessctrl(access control)
        사용자관리: AccUser
        사용자 목록page: AccUserList
        사용자 그룹page: AccUserGroupList
        사용자 등록ppage: AccUserRegist
          결재선 지정popup: -
          아이디 중복확인popup: idCheck
          비밀번호 확인popup: pwCheck
          사용자 불러오기popup: getUserList
          그룹생성popup: userGroup
        사용자그룹page: AccUserGroupList
        ///
        장비관리 : AccEquipmentList
        사용자(사용자 및 그룹) 조회
        장비조회
        사용자관리 품의등록
        사용자그룹관리 품의등록
        장비관리 품의등록
       */}
      <Route path="/accessctrl/AccUser" element={<AccUser />} />
      <Route path="/accessctrl/AccUserList" element={<AccUserList />} />
      <Route path="/accessctrl/AccUserGroupList" element={<AccUserGroupList />} />
      <Route path="/accessctrl/AccUserRegist" element={<AccUserRegist />} />
      <Route path="/accessctrl/AccEquipmentList" element={<AccEquipmentList />} />
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
