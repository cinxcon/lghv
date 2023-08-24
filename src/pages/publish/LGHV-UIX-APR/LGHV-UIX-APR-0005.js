import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';

function ApprovalTempStorage() {
  const pagedata = {
    title: '결재관리',
    subtitle: '임시보관함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <ApprovalList data={pagedata} toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0005-Detail" />
    </>
  )
}

export default ApprovalTempStorage;
