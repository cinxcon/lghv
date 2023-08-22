import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ApprovalList from './component/ApprovalList';
import { ApprovalTopBtnGroup, ApprovalBtnGroup, ApprovalBotBtnGroup } from '../common/_ApprovalBtnGroup';

function ApprovalTest() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재 대기함',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalTopBtnGroup />
      <ApprovalBtnGroup />
      <ApprovalBotBtnGroup />
      <ApprovalSearch />
      <ApprovalList data={pagedata} toDetail="/LGHV-UIX-APR/ApprovalDetailTest" currentStatus="테스트" />
    </>
  )
}

export default ApprovalTest;
