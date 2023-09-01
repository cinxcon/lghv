import ContentTitle from '../layout/ContentTitle'

function SysAuthorityMng() {
  const pagedata = {
    title: '공통관리',
    subtitle: '권한관리',
    SubMenu: 'yes'
  }
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <div className='btn-wrap right'>
          <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysComSort', 'PopupSysComSort', '464', '800') }}>정렬 순서 설정</button>
          <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysGroupAdd', 'PopupSysGroupAdd', '464', '400') }}>추가</button>
        </div>
        <table className='table mt8'>
          <caption>권한관리 테이블</caption>
          <colgroup>
            <col span="2" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>권한 그룹 명</th>
              <th scope='col'>권한 그룹 코드</th>
              <th scope='col'>설명</th>
              <th scope='col'>구분</th>
              <th scope='col'>등록 정보</th>
            </tr>
          </thead>
          <tbody>
            <tr className='link' onClick={() => { onPopup('/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0012-UserList', 'SysAuthorityMngUserList', '1024', '600') }}>
              <td className='left'>작업종료권한</td>
              <td className='left'>WORK_CLOSE_PERMIT</td>
              <td className='left'>작업 종료 가능 권한</td>
              <td>사용자</td>
              <td><button className='btn btn-low btn-md'>Info</button></td>
            </tr>
            <tr className='link'>
              <td className='left'>그룹X 통보</td>
              <td className='left'>MESSAGE_GROUP</td>
              <td className='left'>그룹X 통보</td>
              <td>시스템</td>
              <td><button className='btn btn-low btn-md'>Info</button></td>
            </tr>
            <tr className='link'>
              <td className='left'>CELL 가입자 관리 조회</td>
              <td className='left'>VIEW_CELL_GROUP</td>
              <td className='left'>CELL 가입자 관리 조회 그룹</td>
              <td>시스템</td>
              <td><button className='btn btn-low btn-md'>Info</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SysAuthorityMng;
