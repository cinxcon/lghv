/* eslint-disable */
import ContentTitle from '../layout/ContentTitle';
import ApprovalPopList from './component/_ApprovalPopList';

function ApprovalPop() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재 대기함',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalPopList data={pagedata} toDetail="/LGHV-UIX-APR/ApprovalPopDetail" currentStatus="테스트" />
    </>
  )
}

export default ApprovalPop;
