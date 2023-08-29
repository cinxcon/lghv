import ContentTitle from '../layout/ContentTitle';

function AccUserDetail() {
  const pagedata = {
    title: '접근제어',
    subtitle: '사용자 상세',
    SubMenu: 'yes',
    isDetail: 'yes'
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <table className='table table-row'>
          <caption>table caption</caption>
          <colgroup>
            <col style={{ width: '11%' }} />
            <col style={{ width: '39%' }} />
            <col style={{ width: '11%' }} />
            <col style={{ width: '39%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>아이디 <span aria-label="required" className='color-primary'>*</span></th>
              <td>S11020</td>
              <th scope='row'>이름 <span aria-label="required" className='color-primary'>*</span></th>
              <td>홍길동</td>
            </tr>
            <tr>
              <th scope='row'>조직</th>
              <td>기간망운영팀</td>
              <th scope='row'>직함</th>
              <td>대리</td>
            </tr>
            <tr>
              <th scope='row'>이메일 <span aria-label="required" className='color-primary'>*</span></th>
              <td>test02@lghv.co.kr</td>
              <th scope='row'>휴대폰 번호 <span aria-label="required" className='color-primary'>*</span></th>
              <td>010-5554-4444</td>
            </tr>
            <tr>
              <th scope='row'>사용자 그룹 이름</th>
              <td>그룹1</td>
              <th scope='row'>사용가능 기간 <span aria-label="required" className='color-primary'>*</span></th>
              <td>2023-08-12 ~ 2023-10-22</td>
            </tr>
            <tr>
              <th scope='row'>상태 <span aria-label="required" className='color-primary'>*</span></th>
              <td>정상</td>
              <th scope='row'>접속 로그인 IP</th>
              <td>192.168.202.254</td>
            </tr>
            <tr>
              <th scope='row'>설명</th>
              <td colSpan={3}>신규 사용자 등록</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AccUserDetail;
