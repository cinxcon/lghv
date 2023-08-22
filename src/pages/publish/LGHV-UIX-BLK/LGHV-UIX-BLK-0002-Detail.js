/* eslint-disable */
import ContentTitle from '../layout/ContentTitle';

function DisabilityMngDetail() {
  const pagedata = {
    title: '장애관리',
    subtitle: '장애목록',
    SubMenu: 'yes',
    isDetail: 'yes'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
    </>
  );
};
export default DisabilityMngDetail;
