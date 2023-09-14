import { useState } from 'react';
import { createPortal } from 'react-dom';
import ContentTitle from '../layout/ContentTitle'

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function SysAuthorityMngUserList() {
  const pagedata = {
    title: '공통관리',
    subtitle: '권한관리 사용자 목록',
    SubMenu: 'yes'
  }
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
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
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <ContentTitle data={pagedata} />
        <div className='content-section'>
          <div className='btn-wrap right'>
            <button className='btn btn-low btn-md btn-exel'>엑셀</button>
            <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysGroupAdd', 'PopupSysGroupAdd', '464', '400') }}>추가</button>
            <button className='btn btn-low btn-md btn-del'>삭제</button>
          </div>
          <table className='table mt8'>
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
    </PopupPortal>
  )
}

export default SysAuthorityMngUserList;
