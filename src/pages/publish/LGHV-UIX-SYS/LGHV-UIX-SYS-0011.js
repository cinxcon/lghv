import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle'

function SysCodeMng() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  const pagedata = {
    title: '공통관리',
    subtitle: '코드관리',
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
      <div className='flex-wrap align-start move-left-to-right'>
        <div className='content-section half'>
          <div className='flex-wrap between h3-wrap'>
            <h3>코드 종류</h3>
            <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysComSort', 'PopupSysComSort', '464', '800') }}>정렬 순서 변경</button>
          </div>
          <div className='over-flow-y'>
            <table className='table'>
              <caption>코드 종류 테이블</caption>
              <colgroup>
                <col span="2" />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>그룹코드</th>
                  <th scope='col'>그룹명</th>
                </tr>
              </thead>
              <tbody>
                <tr className='checked'>
                  <td>CHECK_NORMAL</td>
                  <td>점검결과</td>
                </tr>
                {
                  resultList.map(function(a, i) {
                    return (
                      <tr key={i}>
                        <td>KM_DIR_TYPE</td>
                        <td>지식분류구분</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className='arrow'><i>arrow icon</i></div>
        <div className='content-section half'>
          <div className='flex-wrap between h3-wrap'>
            <h3>점검 결과</h3>
            <div className='btn-wrap'>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysComSort', 'PopupSysComSort', '464', '800') }}>정렬 순서 설정</button>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysCodeAdd', 'PopupSysCodeAdd', '464', '460') }}>추가</button>
            </div>
          </div>
          <div className='over-flow-y'>
            <table className='table'>
              <caption>코드 종류 테이블</caption>
              <colgroup>
                <col span="2" />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>구분</th>
                  <th scope='col'>코드명</th>
                  <th scope='col'>하위코드</th>
                  <th scope='col'>매핑코드</th>
                  <th scope='col'>등록 정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>사용자</td>
                  <td>정상</td>
                  <td>없음</td>
                  <td>00</td>
                  <td><button className='btn btn-low btn-md'>Info</button></td>
                </tr>
                <tr>
                  <td>사용자</td>
                  <td>비정상</td>
                  <td>없음</td>
                  <td>01</td>
                  <td><button className='btn btn-low btn-md'>Info</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SysCodeMng;
