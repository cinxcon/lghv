/* eslint-disable */
import ContentTitle from '../layout/ContentTitle';

// LGHV-UIX-ACC-0008 장비 등록 AccEquipmentRegist
function AccEquipmentRegist() {
  const pagedata = {
    title: '접근제어',
    subtitle: '장비 등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
    </>
  )
}

export default AccEquipmentRegist;
