import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalComplete() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재완료함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <ApprovalList data={pagedata} toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0002-Detail" currentStatus="결재완료" />
    </>
  )
}

export default ApprovalComplete;
