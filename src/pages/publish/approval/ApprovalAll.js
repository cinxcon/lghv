import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalAll() {
  return (
    <>
      <ContentTitle />
      <ApprovalSearch />
      <ApprovalList toDetail="/approval/ApprovalAllDetail" currentStatus="결재완료" />
    </>
  )
}

export default ApprovalAll;
