import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalStandby() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재 대기함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <ApprovalList />
    </>
  )
}

export default ApprovalStandby;
