import { useState } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle'
import { Alert } from '../popup/Popup';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function SysUserMngDetail() {
  const pagedata = {
    title: '계정관리',
    subtitle: '사용자관리 상세',
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
          <div>등록된 사용자를 삭제하시겠습니까?</div>
        </Alert>
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <ContentTitle data={pagedata} />
        <div className='btn-wrap right'>
          <button className='btn btn-md btn-pop' onClick={() => { onPopup('/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002-modify', 'departmentMngModi', 952, 800) }}>수정</button>
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
                <th scope="row">사용자 ID</th>
                <td>000200</td>
              </tr>
              <tr>
                <th scope="row">이름</th>
                <td>홍길동</td>
              </tr>
              <tr>
                <th scope="row">사용자 구분</th>
                <td>직원</td>
              </tr>
              <tr>
                <th scope="row">소속부서</th>
                <td>경영관리담당/CFO/CRO/대표이사/LG HelloVision/</td>
              </tr>
              <tr>
                <th scope="row">직책</th>
                <td>팀장</td>
              </tr>
              <tr>
                <th scope="row">직급</th>
                <td>E1</td>
              </tr>
              <tr>
                <th scope="row">사무실 전화번호</th>
                <td>070-1234-5678</td>
              </tr>
              <tr>
                <th scope="row">휴대폰</th>
                <td>010-1234-5678</td>
              </tr>
              <tr>
                <th scope="row">변경일</th>
                <td>2013-01-01</td>
              </tr>
              <tr>
                <th scope="row">이메일</th>
                <td>AAA@lghv.net</td>
              </tr>
              <tr>
                <th scope="row">메모</th>
                <td>메모 내용</td>
              </tr>
              <tr>
                <th scope="row">관리자 여부</th>
                <td>
                  <input type="checkbox" name="manager" id="manager" value="" />
                  <label htmlFor="manager">관리자</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PopupPortal>
  )
}

function SysUserMngReg() {
  const pagedata = {
    title: '계정관리',
    subtitle: '사용자관리 등록',
    SubMenu: 'yes',
    isDetail: 'yes'
  }
  const [regist, setRegist] = useState(false);
  const [idCheckSuc, setIdCheckSuc] = useState(false);
  const [idCheckFail, setIdCheckFail] = useState(false);
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // SelectBox
  const optionUserGubun = [
    { value: '기타', label: '기타' },
    { value: '고객센터', label: '고객센터' },
    { value: '부서-팀', label: '부서-팀' }
  ];
  const [userGubun, setUserGubun] = useState(optionUserGubun[0]);
  const optionDuty = [
    { value: '전체', label: '전체' },
    { value: '대표이사', label: '대표이사' },
    { value: '대표이사 직무대행', label: '대표이사 직무대행' }
  ];
  const [duty, setDuty] = useState(optionDuty[0]);
  const optionPosition = [
    { value: '전체', label: '전체' },
    { value: '해당없음', label: '해당없음' },
    { value: '이사', label: '이사' },
    { value: '고문', label: '고문' }
  ];
  const [position, setPosition] = useState(optionPosition[0]);
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
            <caption>사용자 등록</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="userId">사용자 ID</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type="text" className='input_org input-search-front' id="userId" name="userId" />
                    <button className='btn btn-black' onClick={() => { setIdCheckSuc(true) }}>중복검사</button>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="userName">이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type="text" id="userName" name="userName" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="pw">비밀번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type="text" id="pw" name="pw" />
                  {/* 에러 일 때:
                  <input type='text' placeholder='비밀번호를 입력해주세요.' className='error' /> */}
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  <p className='notice size-sm color-success'>사용가능한 비밀번호입니다.</p> */}
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="pwCheck">비밀번호 확인</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type="text" id="pwCheck" name="pwCheck" />
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>비밀번호가 다릅니다. 다시 확인해주세요.</p>
                  <p className='notice size-sm color-success'>비밀번호가 일치합니다.</p> */}
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="userGubun">사용자 구분</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <Select defaultValue={optionUserGubun[0]} value={userGubun} onChange={setUserGubun} options={optionUserGubun} className='react-select-container' classNamePrefix="react-select" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="department">소속부서</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="duty">직책</label></th>
                <td>
                  <Select defaultValue={optionDuty[0]} value={duty} onChange={setDuty} options={optionDuty} className='react-select-container' classNamePrefix="react-select" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="position">직급</label></th>
                <td>
                  <Select defaultValue={optionPosition[0]} value={position} onChange={setPosition} options={optionPosition} className='react-select-container' classNamePrefix="react-select" />
                </td>
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
                <th scope="row"><label htmlFor="cellPhone">휴대폰</label></th>
                <td>
                  <input type="text" id="cellPhone1" name="cellPhone" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="cellPhone2" name="cellPhone" style={{ width: '80px' }} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="cellPhone3" name="cellPhone" style={{ width: '80px' }} />
                </td>
              </tr>
              <tr>
                <th scope="row">변경일</th>
                <td>2013-01-01</td>
              </tr>
              <tr>
                <th scope="row">이메일</th>
                <td>AAA@lghv.net</td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="memo">메모</label></th>
                <td>
                  <textarea id="memo" name="memo"></textarea>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자 여부</th>
                <td>
                  <input type="checkbox" name="manager" id="manager" value="" />
                  <label htmlFor="manager">관리자</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='detail-bottom-btn-group mt20 center'>
          <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
        </div>
        <Alert open={idCheckSuc} close={() => { setIdCheckSuc(false) }} type={'no'}>
          <div className='center'>
            <h3>test11</h3>
            <p className='mt8 size-md'><span className='color-success ico_success'>사용 가능</span>한 아이디 입니다.</p>
          </div>
        </Alert>
        <Alert open={idCheckFail} close={() => { setIdCheckFail(false) }} type={'no'}>
          <div className='center'>
            <h3>test11</h3>
            <p className='mt8 size-md'><span className='color-fail ico_fail'>중복</span>된 아이디 입니다.</p>
          </div>
        </Alert>
        <Alert open={regist} close={() => { setRegist(false) }}>
          <div>등록하시겠습니까?</div>
        </Alert>
      </div>
    </PopupPortal>
  )
}

function SysUserMngModi() {
  const pagedata = {
    title: '계정관리',
    subtitle: '사용자관리 수정',
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
  const optionUserGubun = [
    { value: '기타', label: '기타' },
    { value: '고객센터', label: '고객센터' },
    { value: '부서-팀', label: '부서-팀' }
  ];
  const [userGubun, setUserGubun] = useState(optionUserGubun[0]);
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
            <caption>사용자 수정</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">사용자 ID <span aria-label="required" className='color-primary'>*</span></th>
                <td>000200</td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="userName">이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>남철수</td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="pw">비밀번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type="text" id="pw" name="pw" value={'**********'} />
                  {/* 에러 일 때:
                  <input type='text' placeholder='비밀번호를 입력해주세요.' className='error' /> */}
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  <p className='notice size-sm color-success'>사용가능한 비밀번호입니다.</p> */}
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="pwCheck">비밀번호 확인</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type="text" id="pwCheck" name="pwCheck" value={'**********'} />
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>비밀번호가 다릅니다. 다시 확인해주세요.</p>
                  <p className='notice size-sm color-success'>비밀번호가 일치합니다.</p> */}
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="userGubun">사용자 구분</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <Select defaultValue={optionUserGubun[0]} value={userGubun} onChange={setUserGubun} options={optionUserGubun} className='react-select-container' classNamePrefix="react-select" />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="department">소속부서</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'>기간망 사업팀</span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="duty">직책</label></th>
                <td>팀장</td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="position">직급</label></th>
                <td>E1</td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="phone">사무실전화번호</label></th>
                <td>
                  <input type="text" id="cellPhone1" name="cellPhone" style={{ width: '80px' }} value={'010'} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="cellPhone2" name="cellPhone" style={{ width: '80px' }} value={'1234'} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="cellPhone3" name="cellPhone" style={{ width: '80px' }} value={'5678'} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="cellPhone">휴대폰</label></th>
                <td>
                  <input type="text" id="cellPhone1" name="cellPhone" style={{ width: '80px' }} value={'010'} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="cellPhone2" name="cellPhone" style={{ width: '80px' }} value={'1234'} /><span style={{ padding: '0 8px' }}>-</span>
                  <input type="text" id="cellPhone3" name="cellPhone" style={{ width: '80px' }} value={'5678'} />
                </td>
              </tr>
              <tr>
                <th scope="row">변경일</th>
                <td>2013-01-01</td>
              </tr>
              <tr>
                <th scope="row">이메일</th>
                <td>AAA@lghv.net</td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="memo">메모</label></th>
                <td>
                  <textarea id="memo" name="memo"></textarea>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자 여부</th>
                <td>
                  <input type="checkbox" name="manager" id="manager" value="" />
                  <label htmlFor="manager">관리자</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='detail-bottom-btn-group mt20 center'>
          <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>수정</button>
        </div>
        <Alert open={regist} close={() => { setRegist(false) }}>
          <div>사용자를 수정하시겠습니까?</div>
        </Alert>
      </div>
    </PopupPortal>
  )
}

export { SysUserMngDetail, SysUserMngReg, SysUserMngModi };
