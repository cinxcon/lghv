/* eslint-disable */
// LGHV-UIX-ACC-0009 금칙어 조회
import ContentTitle from '../layout/ContentTitle';

function AccBanWords() {
  const pagedata = {
    title: '접근제어',
    subtitle: '금칙어 조회',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
    </>
  )
}

export default AccBanWords;
