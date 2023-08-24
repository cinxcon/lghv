import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalReturn() {
  const pagedata = {
    title: '결재관리',
    subtitle: '반려함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <ApprovalList data={pagedata} toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0004-Detail" currentStatus="결재반려" />
    </>
  )
}

export default ApprovalReturn;
