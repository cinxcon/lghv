import { useState } from 'react';
import { Alert } from '../popup/Popup';
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
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const [datadel, setDatadel] = useState(false);
  const [datadel2, setDatadel2] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode.parentNode, target.value, target.checked);
    console.log(checkedItems)
    console.log(isChecked)
  };
  const checkedItemHandler = (row, i, isChecked) => {
    if (isChecked) {
      checkedItems.add(i);
      setCheckedItems(checkedItems);
      row.classList.add('checked');
    } else if (!isChecked && checkedItems.has(i)) {
      checkedItems.delete(i);
      setCheckedItems(checkedItems);
      row.classList.remove('checked');
    }
    return checkedItems;
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='flex-wrap align-start move-left-to-right'>
        <div className='content-section half'>
          <div className='flex-wrap between h3-wrap'>
            <h3>권한 그룹</h3>
            <div className='btn-wrap'>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysGroupAdd', 'PopupSysGroupAdd', '708', '900') }}>등록</button>
              <button className="btn btn-low btn-md btn-del" onClick={() => { setDatadel(true) }}>삭제</button>
            </div>
            <Alert open={datadel} close={() => { setDatadel(false) }}>
              <p>권한 그룹을 삭제하시겠습니까?</p>
              <p className='mt20 size-sm color-error'>* 권한 그룹 삭제시 권한 그룹에 속한 사용자 정보도 <br />함께 삭제됩니다.</p>
            </Alert>
          </div>
          <div className='over-flow-y'>
            <table className='table'>
              <caption>권한관리 테이블</caption>
              <colgroup>
                <col span={6} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>
                    <input type="checkbox" name="checkAll" id="checkAll" value="" />
                    <label htmlFor="checkAll" className='invisible'>선택</label>
                  </th>
                  <th scope='col'>권한 그룹 명</th>
                  <th scope='col'>권한 그룹 코드</th>
                  <th scope='col'>설명</th>
                  <th scope='col'>구분</th>
                  <th scope='col'>등록 정보</th>
                </tr>
              </thead>
              <tbody>
                <tr className='checked'>
                  <td scope='col'>
                    <input type="checkbox" name="check1" id="check1" value="" checked />
                    <label htmlFor="check1" className='invisible'>선택</label>
                  </td>
                  <td className='left'>작업종료권한</td>
                  <td className='left'>WORK_CLOSE_PERMIT</td>
                  <td className='left'>작업 종료 가능 권한</td>
                  <td>사용자</td>
                  <td><button className='btn btn-low btn-md' onClick={() => { onPopup('/popup/PopupSysGroupInfo', 'PopupSysGroupInfo', '708', '900') }}>Info</button></td>
                </tr>
                <tr className='link'>
                  <td scope='col'>
                    <input type="checkbox" name="check2" id="check2" value="" />
                    <label htmlFor="check2" className='invisible'>선택</label>
                  </td>
                  <td className='left'>그룹X 통보</td>
                  <td className='left'>MESSAGE_GROUP</td>
                  <td className='left'>그룹X 통보</td>
                  <td>시스템</td>
                  <td><button className='btn btn-low btn-md' onClick={() => { onPopup('/popup/PopupSysGroupInfo', 'PopupSysGroupInfo', '708', '900') }}>Info</button></td>
                </tr>
                <tr className='link'>
                  <td scope='col'>
                    <input type="checkbox" name="check3" id="check3" value="" />
                    <label htmlFor="check3" className='invisible'>선택</label>
                  </td>
                  <td className='left'>CELL 가입자 관리 조회</td>
                  <td className='left'>VIEW_CELL_GROUP</td>
                  <td className='left'>CELL 가입자 관리 조회 그룹</td>
                  <td>시스템</td>
                  <td><button className='btn btn-low btn-md' onClick={() => { onPopup('/popup/PopupSysGroupInfo', 'PopupSysGroupInfo', '708', '900') }}>Info</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='arrow'><i>arrow icon</i></div>
        <div className='content-section half'>
          <div className='flex-wrap between h3-wrap'>
            <h3>권한 사용자_작업종료권한</h3>
            <div className='btn-wrap right'>
              <button className='btn btn-low btn-md btn-exel'>엑셀</button>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysAuthorityUserAdd', 'PopupSysAuthorityUserAdd', '1280', '840') }}>등록</button>
              <button className="btn btn-low btn-md btn-del" onClick={() => { setDatadel2(true) }}>삭제</button>
            </div>
            <Alert open={datadel2} close={() => { setDatadel2(false) }}>
              <p>사용자를 권한 그룹에서 삭제하시겠습니까?</p>
            </Alert>
          </div>
          <div className='over-flow-x over-flow-y'>
            <table className='table' style={{ width: '125%' }}>
              <caption>사용자 목록 테이블</caption>
              <colgroup>
                <col span="10" />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>
                    <input type="checkbox" name="checkAll" id="checkAll" />
                    <label htmlFor="checkAll" style={{ margin: '0' }}></label>
                  </th>
                  <th scope='col'>사용자 ID</th>
                  <th scope='col'>이름</th>
                  <th scope='col'>사용자 구분</th>
                  <th scope='col'>소속부서</th>
                  <th scope='col'>직책</th>
                  <th scope='col'>직급</th>
                  <th scope='col'>휴대폰</th>
                  <th scope='col'>사무실 전화번호</th>
                  <th scope='col'>email</th>
                </tr>
              </thead>
              <tbody>
                {
                  resultList.map(function(a, i) {
                    return (
                    <tr key={i}>
                      <td className='center'>
                        <input type="checkbox" name={i} id={i} value={i} onChange={(e) => checkHandler(e)} />
                        <label htmlFor={i} className='invisible'>선택</label>
                      </td>
                      <td>00200</td>
                      <td>홍길동</td>
                      <td>직원</td>
                      <td>기간망 운영팀</td>
                      <td>책임</td>
                      <td>팀장</td>
                      <td>010-1234-5678</td>
                      <td>070-1111-2222</td>
                      <td>aaa@lghv.co.kr</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SysAuthorityMng;
