/* eslint-disable */
import ContentTitle from '../layout/ContentTitle';

function DisabilityMngReg() {
  const pagedata = {
    title: '장애관리',
    subtitle: '장애등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
    </>
  );
};
export default DisabilityMngReg;
