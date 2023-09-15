/* eslint-disable */
import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle'

function SysMenuAuthMng() {
  const pagedata = {
    title: '공통관리',
    subtitle: '메뉴관리',
    SubMenu: 'yes'
  }
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  const [isUserMenu, setIsUserMenu] = useState(true);
  const [isSysMenu, setIsSysMenu] = useState(false);
  const handleUserClick = () => {
    setIsUserMenu(true);
    setIsSysMenu(false);
  }
  const handleSysClick = () => {
    setIsUserMenu(false);
    setIsSysMenu(true);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='flex-wrap align-start move-left-to-right'>
        <div className='content-section half'>
          <div className='flex-wrap between h3-wrap'>
            <div>
              <input type='radio' name='menu' id='userMenu' onChange={handleUserClick} checked={isUserMenu && 'checked'} />
              <label htmlFor='userMenu'>사용자메뉴</label>
              <input type='radio' name='menu' id='sysMenu' onChange={handleSysClick} />
              <label htmlFor='sysMenu'>시스템메뉴</label>
            </div>
            <div className='btn-wrap'>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysMenuSort', 'PopupSysMenuSort', '464', '420') }}>메뉴 순서 정렬</button>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysMenuAdd', 'PopupSysMenuAdd', '464', '460') }}>등록</button>
            </div>
          </div>
          <div className='over-flow-y'>
            <table className='table table-td-left'>
              <caption>메뉴 테이블</caption>
              <colgroup>
                <col span="4" />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>메뉴명</th>
                  <th scope='col'>메뉴 URL</th>
                  <th scope='col'>노출여부</th>
                  <th scope='col'>메뉴정보</th>
                </tr>
              </thead>
              { isUserMenu === true && isSysMenu === false
                ? (<UserMenuTbody onPopup={onPopup} />)
                : (<SysMenuTbody onPopup={onPopup} />)
              }
            </table>
          </div>
        </div>
        <div className='arrow'><i>arrow icon</i></div>
        <div className='content-section half'>
          <div className='flex-wrap between h3-wrap'>
            <h3>{ isUserMenu === true && isSysMenu === false
                ? '작업관리'
                : '계정관리'
              }</h3>
            <div className='btn-wrap'>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysLowMenuSort', 'PopupSysLowMenuSort', '464', '420') }}>하위메뉴순서정렬</button>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupSysLowMenuAdd', 'PopupSysLowMenuAdd', '464', '460') }}>등록</button>
              <button className='btn btn-md btn-low'>삭제</button>
            </div>
          </div>
          <div className='over-flow-y'>
            <table className='table table-td-left'>
              <caption>하위 메뉴 테이블</caption>
              <colgroup>
                <col span="5" />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>
                    <input type="checkbox" name="checkAll" id="checkAll" value="" />
                    <label htmlFor="checkAll" className='invisible'>선택</label>
                  </th>
                  <th scope='col'>하위 메뉴명</th>
                  <th scope='col'>메뉴 URL</th>
                  <th scope='col'>노출여부</th>
                  <th scope='col'>하위메뉴정보</th>
                </tr>
              </thead>
              { isUserMenu === true && isSysMenu === false
                ? (<UserLowMenuTbody onPopup={onPopup} />)
                : (<SysLowMenuTbody onPopup={onPopup} />)
              }
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

function UserMenuTbody(props) {
  const { onPopup } = props;
  return (
    <tbody>
      <tr className='checked'>
        <td>작업관리</td>
        <td>WRK</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>접근제어</td>
        <td>ACC</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>장애관리</td>
        <td>BLK</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>결재관리</td>
        <td>APR</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>공지사항</td>
        <td>NOTI</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
    </tbody>
  )
}

function UserLowMenuTbody(props) {
  const { onPopup } = props;
  return (
    <tbody>
      <tr className='checked'>
        <td className='center'>
          <input type="checkbox" name="check1" id="check1" value="" checked />
          <label htmlFor="check1" className='invisible'>선택</label>
        </td>
        <td>작업목록</td>
        <td>WRK0001</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td className='center'>
          <input type="checkbox" name="check2" id="check2" value="" />
          <label htmlFor="check2" className='invisible'>선택</label>
        </td>
        <td>일반작업등록</td>
        <td>WRK0002</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td className='center'>
          <input type="checkbox" name="check3" id="check3" value="" />
          <label htmlFor="check3" className='invisible'>선택</label>
        </td>
        <td>긴급작업등록</td>
        <td>WRK0006</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td className='center'>
          <input type="checkbox" name="check4" id="check4" value="" />
          <label htmlFor="check4" className='invisible'>선택</label>
        </td>
        <td>템플릿목록</td>
        <td>WRK0011</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td className='center'>
          <input type="checkbox" name="check5" id="check5" value="" />
          <label htmlFor="check5" className='invisible'>선택</label>
        </td>
        <td>템플릿등록</td>
        <td>WRK0012</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
    </tbody>
  )
}

function SysMenuTbody(props) {
  const { onPopup } = props;
  return (
    <tbody>
      <tr className='checked'>
        <td>계정관리</td>
        <td>SYS</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>로그관리</td>
        <td>SYS</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>공통관리</td>
        <td>SYS</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td>보고서</td>
        <td>SYS</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysMenuInfo', 'PopupSysMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
    </tbody>
  )
}

function SysLowMenuTbody(props) {
  const { onPopup } = props;
  return (
    <tbody>
      <tr className='checked'>
        <td className='center'>
          <input type="checkbox" name="check1" id="check1" value="" checked />
          <label htmlFor="check1" className='invisible'>선택</label>
        </td>
        <td>부서관리</td>
        <td>SYS0001</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td className='center'>
          <input type="checkbox" name="check2" id="check2" value="" />
          <label htmlFor="check2" className='invisible'>선택</label>
        </td>
        <td>사용자관리</td>
        <td>SYS0002</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysLowMenuInfo', 'PopupSysLowMenuInfo', '464', '460') }}>Info</button></td>
      </tr>
      <tr>
        <td className='center'>
          <input type="checkbox" name="check3" id="check3" value="" />
          <label htmlFor="check3" className='invisible'>선택</label>
        </td>
        <td>수신거부사용자관리</td>
        <td>SYS0003</td>
        <td className='center'>Y</td>
        <td className='center'><button className='btn btn-low btn-md' onClick={(e) => { e.stopPropagation(); onPopup('/popup/PopupSysCodeInfo', 'PopupSysCodeInfo', '464', '460') }}>Info</button></td>
      </tr>
    </tbody>
  )
}

export default SysMenuAuthMng;
