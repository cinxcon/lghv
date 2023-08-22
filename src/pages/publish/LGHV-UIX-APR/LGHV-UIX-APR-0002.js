import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';
import WorkInfo from '../layout/WorkInfo';

function ApprovalComplete() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재완료함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <WorkInfo/>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <ApprovalList data={pagedata} toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0002-Detail" currentStatus="결재완료" />
    </>
  )
}

export default ApprovalComplete;
