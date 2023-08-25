import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/dashboard/components/Home';
import DashBorad from './pages/publish/LGHV-UIX-MAN/LGHV-UIX-MAN-0003';
import ApprovalStandby from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0001';
import ApprovalStandbyDetail from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0001-Detail';
import ApprovalComplete from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0002';
import ApprovalCompleteDetail from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0002-Detail';
import ApprovalAll from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0003';
import ApprovalAllDetail from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0003-Detail';
import ApprovalReturn from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0004';
import ApprovalReturnDetail from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0004-Detail';
import ApprovalTempStorage from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0005';
import ApprovalTempStorageDetail from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0005-Detail';
import AccUser from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0001';
import AccUserDetail from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0002';
import AccUserGroupList from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0003';
import AccUserList from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0004';
import AccEquipmentList from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0005';
import AccEquipmentDetail from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0006';
import AccUserRegist from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0007';
import AccEquipmentRegist from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0008';
import AccBanWords from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0009';
import AccPolicy from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0010';
import ServicetaskRegistNm from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0001';
import ServicetaskRegistUr from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0002';
import ServicetaskAll from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0003';
import ServicetaskDetail from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0004';
import DisabilityMngReg from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0001';
import DisabilityMngList from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0002';
import DisabilityMngDetail from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail';

// 팝업
import PopupReviewer from './pages/publish/popup/popupDetail/Popup_Reviewer';
import PopupTemplate from './pages/publish/popup/popupDetail/Popup_Template';
import PopupWorkOnLoad from './pages/publish/popup/popupDetail/Popup_WorkOnLoad';
import PopupApproval from './pages/publish/popup/popupDetail/Popup_Approval';
import PopupNotiMethodSet from './pages/publish/popup/popupDetail/Popup_NotiMethod_Set';
import { PopupAccUserReg, PopupAccUserModi, PopupAccUserDel } from './pages/publish/popup/popupDetail/Popup_AccUserRegModiDel';
import { PopupAccEqReg, PopupAccEqDel } from './pages/publish/popup/popupDetail/Popup_AccEqRegDel';
import PopupUserGroupSelect from './pages/publish/popup/popupDetail/Popup_UserGroupSelect';

// ↓↓↓  테스트 ↓↓↓
import ApprovalTest from './pages/publish/LGHV-UIX-APR/_Approval';
import ApprovalDetailTest from './pages/publish/LGHV-UIX-APR/_ApprovalDetail';
import ApprovalPop from './pages/publish/LGHV-UIX-APR/_ApprovalPop';
import ApprovalPopDetail from './pages/publish/LGHV-UIX-APR/_ApprovalPopDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LGHV-UIX-MAN/LGHV-UIX-MAN-0003" element={<DashBorad />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0001" element={<ServicetaskRegistNm />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0002" element={<ServicetaskRegistUr />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0003" element={<ServicetaskAll />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0004" element={<ServicetaskDetail />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0001" element={<AccUser />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0002" element={<AccUserDetail />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0003" element={<AccUserGroupList />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0004" element={<AccUserList />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0005" element={<AccEquipmentList />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0006" element={<AccEquipmentDetail />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0007" element={<AccUserRegist />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0008" element={<AccEquipmentRegist />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0009" element={<AccBanWords />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0010" element={<AccPolicy />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0001" element={<ApprovalStandby />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0001-Detail" element={<ApprovalStandbyDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0002" element={<ApprovalComplete />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0002-Detail" element={<ApprovalCompleteDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0003" element={<ApprovalAll />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0003-Detail" element={<ApprovalAllDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0004" element={<ApprovalReturn />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0004-Detail" element={<ApprovalReturnDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0005" element={<ApprovalTempStorage />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0005-Detail" element={<ApprovalTempStorageDetail />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0001" element={<DisabilityMngReg />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0002" element={<DisabilityMngList />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail" element={<DisabilityMngDetail />} />

      {/* 팝업 */}
      <Route path="/popup/PopupReviewer" element={<PopupReviewer />} />
      <Route path="/popup/PopupTemplate" element={<PopupTemplate />} />
      <Route path="/popup/PopupWorkOnLoad" element={<PopupWorkOnLoad />} />
      <Route path="/popup/PopupApproval" element={<PopupApproval />} />
      <Route path="/popup/PopupNotiMethodSet" element={<PopupNotiMethodSet />} />
      <Route path="/popup/PopupAccUserReg" element={<PopupAccUserReg />} />
      <Route path="/popup/PopupAccUserModi" element={<PopupAccUserModi />} />
      <Route path="/popup/PopupAccUserDel" element={<PopupAccUserDel />} />
      <Route path="/popup/PopupAccEqReg" element={<PopupAccEqReg />} />
      <Route path="/popup/PopupAccEqDel" element={<PopupAccEqDel />} />
      <Route path="/popup/PopupUserGroupSelect" element={<PopupUserGroupSelect />} />

      {/* ↓↓↓  테스트 ↓↓↓ */}
      <Route path="/LGHV-UIX-APR/ApprovalDetailTest" element={<ApprovalDetailTest />} />
      <Route path="/LGHV-UIX-APR/ApprovalTest" element={<ApprovalTest />} />
      <Route path="/LGHV-UIX-APR/ApprovalPop" element={<ApprovalPop />} />
      <Route path="/LGHV-UIX-APR/ApprovalPopDetail" element={<ApprovalPopDetail />} />
    </Routes>
  );
};

export default AppRouter;
