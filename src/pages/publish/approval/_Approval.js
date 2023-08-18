import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';
import { ApprovalTopBtnGroup, ApprovalBtnGroup, ApprovalBotBtnGroup } from '../common/_ApprovalBtnGroup';

function ApprovalTest() {
  return (
    <>
      <ContentTitle />
      <ApprovalTopBtnGroup />
      <ApprovalBtnGroup />
      <ApprovalBotBtnGroup />
      <ApprovalSearch />
      <ApprovalList toDetail="/approval/ApprovalDetailTest" currentStatus="테스트" />
    </>
  )
}

export default ApprovalTest;
