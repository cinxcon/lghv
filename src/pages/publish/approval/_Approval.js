import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalTest() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/approval/ApprovalDetailTest" currentStatus="테스트" />
    </>
  )
}

export default ApprovalTest;
