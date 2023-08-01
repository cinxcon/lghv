import ContentTitle from '../layout/ContentTitle';
import ServicetaskSearch from './component/ServicetaskSearch';
import ServicetasklList from './component/ServicetasklList';

function ApprovalList() {
  return (
    <>
      <ContentTitle />
      <ServicetaskSearch />
      <ServicetasklList />
    </>
  )
}

export default ApprovalList;
