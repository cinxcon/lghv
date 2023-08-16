import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalComplete() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/approval/ApprovalCompleteDetail" currentStatus="결재완료" />
    </>
  )
}

export default ApprovalComplete;
