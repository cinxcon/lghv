import ContentTitle from '../layout/ContentTitle';
import { ApprovalTopBtnGroup, ApprovalBotBtnGroup } from '../common/_ApprovalBtnGroup';
import ApprovalDetailContent from './component/ApprovalDetailContent';

function ApprovalDetailTest() {
  return (
    <>
      <ContentTitle />
      <ApprovalTopBtnGroup />
      <ApprovalDetailContent />
      <ApprovalBotBtnGroup />
    </>
  )
}

export default ApprovalDetailTest;
