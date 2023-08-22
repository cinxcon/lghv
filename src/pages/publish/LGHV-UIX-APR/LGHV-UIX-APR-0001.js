import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';
import WorkInfo from '../layout/WorkInfo';

function ApprovalStandby() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재 대기함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <WorkInfo/>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <ApprovalList data={pagedata} toDetail="/LGHV-UIX-APR/LGHV-UIX-APR-0001-Detail" currentStatus="결재대기" />
    </>
  )
}

export default ApprovalStandby;
