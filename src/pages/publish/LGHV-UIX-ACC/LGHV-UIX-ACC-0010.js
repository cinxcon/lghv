/* eslint-disable */
// LGHV-UIX-ACC-0010 접근제어 정책 조회
import ContentTitle from '../layout/ContentTitle';

function AccPolicy() {
  const pagedata = {
    title: '접근제어',
    subtitle: '접근제어 정책 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
    </>
  )
}

export default AccPolicy;
