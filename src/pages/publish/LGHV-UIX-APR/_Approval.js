import ApprovalSearch from './component/ApprovalSearch';
import { ApprovalTopBtnGroup, ApprovalBtnGroup, ApprovalBotBtnGroup } from '../common/_ApprovalBtnGroup';

function ApprovalTest() {
  return (
    <>
      <ApprovalTopBtnGroup />
      <ApprovalBtnGroup />
      <ApprovalBotBtnGroup />
      <ApprovalSearch />
      <ApprovalList toDetail="/LGHV-UIX-APR/ApprovalDetailTest" currentStatus="테스트" />
    </>
  )
}

export default ApprovalTest;
