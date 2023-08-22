import ContentTitle from '../layout/ContentTitle';
import ServicetaskSearch from './component/ServicetaskSearch';
import ServicetasklList from './component/ServicetasklList';
import WorkInfo from '../layout/WorkInfo';

function ApprovalList() {
  const pagedata = {
    title: '작업 관리',
    subtitle: '작업 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  return (
    <>
      <WorkInfo />
      <ContentTitle data={pagedata} />
      <ServicetaskSearch />
      <ServicetasklList data={pagedata} />
    </>
  )
}

export default ApprovalList;
