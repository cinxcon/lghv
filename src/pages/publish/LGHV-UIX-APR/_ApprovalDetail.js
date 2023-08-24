import ContentTitle from '../layout/ContentTitle';
import ApprovalDetailContent from './component/ApprovalDetailContent';
import { ApprovalTopBtnGroup, ApprovalBotBtnGroup } from '../common/_ApprovalBtnGroup';

function ApprovalDetailTest() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결제대기함',
    SubMenu: 'yes',
    isDetail: 'yes'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalTopBtnGroup />
      <ApprovalDetailContent />
      <ApprovalBotBtnGroup />
    </>
  )
}

export default ApprovalDetailTest;
