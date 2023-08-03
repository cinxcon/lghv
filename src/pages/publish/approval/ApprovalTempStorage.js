import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalTempStorage() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/approval/ApprovalTempStorageDetail" />
    </>
  )
}

export default ApprovalTempStorage;
