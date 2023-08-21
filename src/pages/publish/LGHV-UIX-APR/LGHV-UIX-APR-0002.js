import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalComplete() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0002-Detail" currentStatus="결재완료" />
    </>
  )
}

export default ApprovalComplete;
