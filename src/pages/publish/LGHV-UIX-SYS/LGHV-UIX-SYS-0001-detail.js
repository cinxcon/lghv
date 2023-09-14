import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle'
import { Alert } from '../popup/Popup';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function SysDepartmentMngDetail() {
  const pagedata = {
    title: '계정관리',
    subtitle: '부서관리 상세',
    SubMenu: 'yes',
    isDetail: 'yes'
  }
  const [datadel, setDatadel] = useState(false);

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
        <Alert open={datadel} close={() => { setDatadel(false) }}>
          <div>등록된 부서를 삭제하시겠습니까?</div>
        </Alert>
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <ContentTitle data={pagedata} />
        <div className='btn-wrap right'>
          <button className='btn btn-md btn-pop' onClick={() => { onPopup('/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001-modify', 'departmentMngModi', 952, 600) }}>수정</button>
          <button className="btn btn-low btn-md btn-del" onClick={() => { setDatadel(true) }}>삭제</button>
        </div>
        <div className='content-section mt8'>
          <table className='table table-row'>
            <caption>부서상세</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">부서명</th>
                <td>경영관리담당</td>
              </tr>
              <tr>
                <th scope="row">부서경로</th>
                <td>경영관리담당/CFO/CRO/대표이사/LG HelloVision/</td>
              </tr>
              <tr>
                <th scope="row">부서ID</th>
                <td>0110022</td>
              </tr>
              <tr>
                <th scope="row">부서구분</th>
                <td>부서-팀</td>
              </tr>
              <tr>
                <th scope="row">사무실전화번호</th>
                <td>02-1222-4444</td>
              </tr>
              <tr>
                <th scope="row">우편번호</th>
                <td>123-555</td>
              </tr>
              <tr>
                <th scope="row">주소</th>
                <td>서울시 양천구</td>
              </tr>
              <tr>
                <th scope="row">상세주소 </th>
                <td>양천로 152-25</td>
              </tr>
              <tr>
                <th scope="row">변경일</th>
                <td>2013-01-01</td>
              </tr>
              <tr>
                <th scope="row">메모</th>
                <td>메모 내용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PopupPortal>
  )
}

function SysDepartmentMngReg() {
  const pagedata = {
    title: '계정관리',
    subtitle: '부서관리 등록',
    SubMenu: 'yes',
    isDetail: 'yes'
  }
  const [regist, setRegist] = useState(false);
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // SelectBox
  const optionDepGubun = [
    { value: '기타', label: '기타' },
    { value: '고객센터', label: '고객센터' },
    { value: '부서-팀', label: '부서-팀' }
  ];
  const [depGubun, setDepGubun] = useState(optionDepGubun[0]);
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
        <div className='content-section mt8 mb30'>
          <table className='table table-row'>
            <caption>부서등록</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="depName">부서명</label></th>
                <td>
                  <input type="text" id="depName" name="depName" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="topDep">상위부서</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="depId">부서ID</label></th>
                <td>
                  <input type="text" id="depId" name="depId" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="depGubun">부서구분</label></th>
                <td><Select defaultValue={optionDepGubun[0]} value={depGubun} onChange={setDepGubun} options={optionDepGubun} className='react-select-container' classNamePrefix="react-select" /></td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="phone">사무실전화번호</label></th>
                <td>
                  <input type="text" id="phone1" name="phone" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="phone2" name="phone" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="phone3" name="phone" style={{ width: '80px' }} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="zipcode">우편번호</label></th>
                <td>
                  <input type="text" id="zipcode1" name="zipcode" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="zipcode2" name="zipcode" style={{ width: '80px' }} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="address">주소</label></th>
                <td>
                  <input type="text" id="address" name="address" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="detailAddress">상세주소</label></th>
                <td>
                  <input type="text" id="detailAddress" name="detailAddress" />
                </td>
              </tr>
              <tr>
                <th scope="row"><lable htmlFor="date">변경일</lable></th>
                <td>
                  <input type="text" id="date" name="date" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="memo">메모</label></th>
                <td>
                  <textarea id="memo" name="memo"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='detail-bottom-btn-group mt20 center'>
          <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
        </div>
        <Alert open={regist} close={() => { setRegist(false) }}>
          <div>등록하시겠습니까?</div>
        </Alert>
      </div>
    </PopupPortal>
  )
}

function SysDepartmentMngModi() {
  const pagedata = {
    title: '계정관리',
    subtitle: '부서관리 수정',
    SubMenu: 'yes',
    isDetail: 'yes'
  }
  const [modify, setModify] = useState(false);
  const [onLoad, setOnLoad] = useState(false);
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // SelectBox
  const optionDepGubun = [
    { value: '기타', label: '기타' },
    { value: '고객센터', label: '고객센터' },
    { value: '부서-팀', label: '부서-팀' }
  ];
  const [depGubun, setDepGubun] = useState(optionDepGubun[0]);
  useEffect(() => {
    setOnLoad(true)
  }, [])
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <Alert open={onLoad} type={'no'} close={() => { setOnLoad(false) }}>
          <div>인사연동된 데이터는 <br />우편번호, 주소, 상세주소, 메모만 편집가능합니다</div>
        </Alert>
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <ContentTitle data={pagedata} />
        <div className='content-section mt8 mb30'>
          <table className='table table-row'>
            <caption>부서수정</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="depName">부서명</label></th>
                <td>
                  <input type="text" id="depName" name="depName" value={'경영관리담당'} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="topDep">상위부서</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'>경영관리담당/CFO/CRO/대표이사/LG HelloVision/</span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="depId">부서ID</label></th>
                <td>
                  <input type="text" id="depId" name="depId" value={'233333'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="depGubun">부서구분</label></th>
                <td><Select defaultValue={optionDepGubun[0]} value={depGubun} onChange={setDepGubun} options={optionDepGubun} className='react-select-container' classNamePrefix="react-select" /></td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="phone">사무실전화번호</label></th>
                <td>
                  <input type="text" id="phone1" name="phone" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="phone2" name="phone" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="phone3" name="phone" style={{ width: '80px' }} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="zipcode">우편번호</label></th>
                <td>
                  <input type="text" id="zipcode1" name="zipcode" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="zipcode2" name="zipcode" style={{ width: '80px' }} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="address">주소</label></th>
                <td>
                  <input type="text" id="address" name="address" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="detailAddress">상세주소</label></th>
                <td>
                  <input type="text" id="detailAddress" name="detailAddress" />
                </td>
              </tr>
              <tr>
                <th scope="row"><lable htmlFor="date">변경일</lable></th>
                <td>
                  <input type="text" id="date" name="date" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="memo">메모</label></th>
                <td>
                  <textarea id="memo" name="memo"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='detail-bottom-btn-group mt20 center'>
          <button className='btn btn-lg btn-primary' onClick={() => { setModify(true) }}>확인</button>
        </div>
        <Alert open={modify} close={() => { setModify(false) }}>
          <div>수정하시겠습니까?</div>
        </Alert>
      </div>
    </PopupPortal>
  )
}

export { SysDepartmentMngDetail, SysDepartmentMngReg, SysDepartmentMngModi };
