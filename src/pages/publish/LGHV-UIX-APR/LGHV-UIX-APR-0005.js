import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalTempStorage() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0005-Detail" />
    </>
  )
}

export default ApprovalTempStorage;
