import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalStandby() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0001-Detail" currentStatus="결재대기" />
    </>
  )
}

export default ApprovalStandby;
