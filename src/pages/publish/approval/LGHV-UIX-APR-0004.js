import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalReturn() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/approval/LGHV-UIX-APR-0004-Detail" currentStatus="결재반려" />
    </>
  )
}

export default ApprovalReturn;
