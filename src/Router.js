import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/dashboard/components/Home';
import DashBorad from './pages/publish/LGHV-UIX-MAN/LGHV-UIX-MAN-0003';
import Approval from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0000';
import ApprovalDetail from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0001';
import { ApprovalAll, ApprovalAllDetail } from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0003';
import { ApprovalTempStorage, ApprovalTempStorageDetail } from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0005';
import { ApprovalOnTimeProcess, ApprovalOnTimeProcessDetail } from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0006';
import { ApprovalMy, ApprovalMyDetail } from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0007';
import { ApprovalProcessing, ApprovalProcessingDetail } from './pages/publish/LGHV-UIX-APR/LGHV-UIX-APR-0008';
import AccUser from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0001';
import AccUserDetail from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-Detail';
import AccUserDetailAPR from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-DetailAPR';
import AccUserGroupList from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0003';
import AccUserList from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0004';
import AccEquipmentList from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0005';
import AccEquipmentDetail from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0006';
import AccEquipmentDetailAPR from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0006-DetailAPR';
import AccUserRegist from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0007';
import AccEquipmentRegist from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0008';
import AccPolicy from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0009';
import AccPolicyRegist from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0010';
import AccPolicyDetail from './pages/publish/LGHV-UIX-ACC/LGHV-UIX-ACC-0011';
import ServicetaskRegistNm from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0001';
import ServicetaskRegistUr from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0002';
import ServicetaskAll from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0003';
import ServicetaskDetail from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0004';
import TemplateList from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0011';
import TemplateListRegist from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0012';
import TemplateListDetail from './pages/publish/LGHV-UIX-WRK/LGHV-UIX-WRK-0012-Detail';
import DisabilityMngReg from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0001';
import DisabilityMngList from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0002';
import DisabilityMngDetail from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail';
import DisabilityCellList from './pages/publish/LGHV-UIX-BLK/LGHV-UIX-BLK-0003';
import NoticeList from './pages/publish/LGHV-UIX-NOTI/LGHV-UIX-NOTI-0001'
import NoticeDetail from './pages/publish/LGHV-UIX-NOTI/LGHV-UIX-NOTI-0001-Detail'

// 팝업
import PopupReviewer from './pages/publish/popup/popupDetail/Popup_Reviewer';
import PopupTemplate from './pages/publish/popup/popupDetail/Popup_Template';
import PopupWorkOnLoad from './pages/publish/popup/popupDetail/Popup_WorkOnLoad';
import PopupApproval from './pages/publish/popup/popupDetail/Popup_Approval';
import PopupNotiMethodSet from './pages/publish/popup/popupDetail/Popup_NotiMethod_Set';
import PopupCell from './pages/publish/popup/popupDetail/Popup_Cell';
import PopupCellList from './pages/publish/popup/popupDetail/Popup_Cell_List';
import PopupWorkDeteail from './pages/publish/popup/popupDetail/Popup_WorkDeteail';
import PopupWorker from './pages/publish/popup/popupDetail/Popup_Worker';
import PopupDepartment from './pages/publish/popup/popupDetail/Popup_department';
import { PopupAccUserReg, PopupAccUserModi, PopupAccUserDel } from './pages/publish/popup/popupDetail/Popup_AccUserRegModiDel';
import { PopupAccEqReg, PopupAccEqDel } from './pages/publish/popup/popupDetail/Popup_AccEqRegDel';
import PopupAccPolicyReg from './pages/publish/popup/popupDetail/Popup_AccPolicyReg';
import PopupAccPolicyDetail from './pages/publish/popup/popupDetail/Popup_AccPolicyDetail';
import PopupUserGroupSelect from './pages/publish/popup/popupDetail/Popup_UserGroupSelect';
import { PopupSysComSort, PopupSysMenuSort, PopupSysLowMenuSort } from './pages/publish/popup/popupDetail/Popup_SysCommonSort';
import { PopupSysCodeAdd, PopupSysCodeInfo, PopupSysGroupAdd, PopupSysGroupInfo, PopupSysAuthorityUserAdd, PopupSysMenuAdd, PopupSysLowMenuAdd, PopupSysMenuInfo, PopupSysLowMenuInfo } from './pages/publish/popup/popupDetail/Popup_SysCommonAdd';

// 시스템관리
import SysDepartmentMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0001';
import { SysDepartmentMngDetail, SysDepartmentMngReg, SysDepartmentMngModi } from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0001-Detail';
import SysUserMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0002';
import { SysUserMngDetail, SysUserMngReg, SysUserMngModi } from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0002-Detail';
import SysUnsubscribeUserMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0003';
import SysSmsUnsubscribeMemberMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0004';
import SysConnectLog from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0005';
import SysPsnInfoInquiryLog from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0006';
import SysSendTxtMsgLog from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0007';
import SysSendMailLog from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0008';
import SysSendCustomTxtMsgLog from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0009';
import SysSendCustomTxtMsgLogDetail from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0009-Detail';
import SysSendBlockingMemberTxtMsgLog from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0010';
import SysCodeMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0011';
import SysAuthorityMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0012';
import SysMenuAuthMng from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0013';
import SysWeeklyReport from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0014';
import SysMonthlyReport from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-SYS-0015';
import NoticeRegist from './pages/publish/LGHV-UIX-SYS/LGHV-UIX-NOTI-0002'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LGHV-UIX-MAN/LGHV-UIX-MAN-0003" element={<DashBorad />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0001" element={<ServicetaskRegistNm />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0002" element={<ServicetaskRegistUr />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0003" element={<ServicetaskAll />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0004" element={<ServicetaskDetail />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0011" element={<TemplateList />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0012" element={<TemplateListRegist />} />
      <Route path="/LGHV-UIX-WRK/LGHV-UIX-WRK-0012-Detail" element={<TemplateListDetail />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0001" element={<AccUser />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-Detail" element={<AccUserDetail />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-DetailAPR" element={<AccUserDetailAPR />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0003" element={<AccUserGroupList />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0004" element={<AccUserList />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0005" element={<AccEquipmentList />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0006" element={<AccEquipmentDetail />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0006-DetailAPR" element={<AccEquipmentDetailAPR />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0007" element={<AccUserRegist />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0008" element={<AccEquipmentRegist />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0009" element={<AccPolicy />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0010" element={<AccPolicyRegist />} />
      <Route path="/LGHV-UIX-ACC/LGHV-UIX-ACC-0011" element={<AccPolicyDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0000" element={<Approval />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0001/:id" element={<ApprovalDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0003" element={<ApprovalAll />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0003/:id" element={<ApprovalAllDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0005" element={<ApprovalTempStorage />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0005/:id" element={<ApprovalTempStorageDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0006" element={<ApprovalOnTimeProcess />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0006/:id" element={<ApprovalOnTimeProcessDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0007" element={<ApprovalMy />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0007/:id" element={<ApprovalMyDetail />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0008" element={<ApprovalProcessing />} />
      <Route path="/LGHV-UIX-APR/LGHV-UIX-APR-0008/:id" element={<ApprovalProcessingDetail />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0001" element={<DisabilityMngReg />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0002" element={<DisabilityMngList />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail" element={<DisabilityMngDetail />} />
      <Route path="/LGHV-UIX-BLK/LGHV-UIX-BLK-0003" element={<DisabilityCellList />} />
      <Route path="/LGHV-UIX-NOTI/LGHV-UIX-NOTI-0001" element={<NoticeList />} />
      <Route path="/LGHV-UIX-NOTI/LGHV-UIX-NOTI-0001-Detail" element={<NoticeDetail />} />

      {/* 팝업 */}
      <Route path="/popup/PopupReviewer" element={<PopupReviewer />} />
      <Route path="/popup/PopupTemplate" element={<PopupTemplate />} />
      <Route path="/popup/PopupWorkOnLoad" element={<PopupWorkOnLoad />} />
      <Route path="/popup/PopupApproval" element={<PopupApproval />} />
      <Route path="/popup/PopupNotiMethodSet" element={<PopupNotiMethodSet />} />
      <Route path="/popup/PopupCell" element={<PopupCell />} />
      <Route path="/popup/PopupCellList" element={<PopupCellList />} />
      <Route path="/popup/PopupWorkDeteail" element={<PopupWorkDeteail />} />
      <Route path="/popup/PopupWorker" element={<PopupWorker />} />
      <Route path="/popup/PopupDepartment" element={<PopupDepartment />} />
      <Route path="/popup/PopupAccUserReg" element={<PopupAccUserReg />} />
      <Route path="/popup/PopupAccUserModi" element={<PopupAccUserModi />} />
      <Route path="/popup/PopupAccUserDel" element={<PopupAccUserDel />} />
      <Route path="/popup/PopupAccEqReg" element={<PopupAccEqReg />} />
      <Route path="/popup/PopupAccEqDel" element={<PopupAccEqDel />} />
      <Route path="/popup/PopupAccPolicyReg" element={<PopupAccPolicyReg />} />
      <Route path="/popup/PopupAccPolicyDetail" element={<PopupAccPolicyDetail />} />
      <Route path="/popup/PopupUserGroupSelect" element={<PopupUserGroupSelect />} />
      <Route path="/popup/PopupSysComSort" element={<PopupSysComSort />} />
      <Route path="/popup/PopupSysMenuSort" element={<PopupSysMenuSort />} />
      <Route path="/popup/PopupSysLowMenuSort" element={<PopupSysLowMenuSort />} />
      <Route path="/popup/PopupSysCodeAdd" element={<PopupSysCodeAdd />} />
      <Route path="/popup/PopupSysCodeInfo" element={<PopupSysCodeInfo />} />
      <Route path="/popup/PopupSysGroupAdd" element={<PopupSysGroupAdd />} />
      <Route path="/popup/PopupSysGroupInfo" element={<PopupSysGroupInfo />} />
      <Route path="/popup/PopupSysAuthorityUserAdd" element={<PopupSysAuthorityUserAdd />} />
      <Route path="/popup/PopupSysMenuAdd" element={<PopupSysMenuAdd />} />
      <Route path="/popup/PopupSysMenuInfo" element={<PopupSysMenuInfo />} />
      <Route path="/popup/PopupSysLowMenuAdd" element={<PopupSysLowMenuAdd />} />
      <Route path="/popup/PopupSysLowMenuInfo" element={<PopupSysLowMenuInfo />} />

      {/* 시스템관리 */}
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001" element={<SysDepartmentMng />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001-Detail" element={<SysDepartmentMngDetail />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001-regist" element={<SysDepartmentMngReg />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001-modify" element={<SysDepartmentMngModi />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002" element={<SysUserMng />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002-Detail" element={<SysUserMngDetail />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002-regist" element={<SysUserMngReg />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002-modify" element={<SysUserMngModi />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0003" element={<SysUnsubscribeUserMng />} />
      <Route path="/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0004" element={<SysSmsUnsubscribeMemberMng />} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0005" element={<SysConnectLog />} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0006" element={<SysPsnInfoInquiryLog />} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0007" element={<SysSendTxtMsgLog />} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0008" element={<SysSendMailLog />} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0009" element={<SysSendCustomTxtMsgLog />} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0009-Detail" element={<SysSendCustomTxtMsgLogDetail/>} />
      <Route path="/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0010" element={<SysSendBlockingMemberTxtMsgLog />} />
      <Route path="/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0011" element={<SysCodeMng />} />
      <Route path="/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0012" element={<SysAuthorityMng />} />
      <Route path="/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0013" element={<SysMenuAuthMng />} />
      <Route path="/LGHV-UIX-SYS-003/LGHV-UIX-NOTI-0002" element={<NoticeRegist />} />
      <Route path="/LGHV-UIX-SYS-004/LGHV-UIX-SYS-0014" element={<SysWeeklyReport />} />
      <Route path="/LGHV-UIX-SYS-004/LGHV-UIX-SYS-0015" element={<SysMonthlyReport />} />
    </Routes>
  );
};

export default AppRouter;
