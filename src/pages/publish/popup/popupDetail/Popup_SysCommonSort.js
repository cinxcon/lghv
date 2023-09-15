import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupSysComSort() {
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>정렬 순서 변경</h2>
        </div>
        <div className='over-flow-y' style={{ height: '593px' }}>
          <ul className='sort'>
            <li className='checked'>점검 결과</li>
            <li>지식분류 구분</li>
            <li>지식구분</li>
            <li>사용자 구분</li>
            <li>직책코드</li>
            <li>직급</li>
            <li>조직구분</li>
            <li>요청구분</li>
            <li>긴급도</li>
            <li>영향도</li>
            <li>우선순위</li>
            <li>장애등록</li>
            <li>보안등급</li>
            <li>결재단계</li>
            <li>문제등급</li>
            <li>문제 유형</li>
            <li>조직구분</li>
            <li>요청구분</li>
            <li>긴급도</li>
            <li>영향도</li>
            <li>우선순위</li>
            <li>장애등록</li>
            <li>보안등급</li>
            <li>결재단계</li>
            <li>문제등급</li>
            <li>문제 유형</li>
          </ul>
        </div>
        <div className='btn-wrap center mt25'>
          <button className="btn-up-square">위로</button>
          <button className="btn-down-square">아래로</button>
          <button type="button" className="btn btn-lg btn-primary ml8">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

// 메뉴관리 > 메뉴순서정렬
function PopupSysMenuSort() {
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>메뉴 순서 정렬</h2>
        </div>
        <ul className='sort'>
          <li className='checked'>작업관리</li>
          <li>접근제어</li>
          <li>장애관리</li>
          <li>결재관리</li>
          <li>공지사항</li>
        </ul>
        <div className='btn-wrap center mt25'>
          <button className="btn-up-square">위로</button>
          <button className="btn-down-square">아래로</button>
          <button type="button" className="btn btn-lg btn-primary ml8">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

// 메뉴관리 > 하위메뉴순서정렬
function PopupSysLowMenuSort() {
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>하위 메뉴 순서 정렬</h2>
        </div>
        <h3 className='size-lg mb8'>작업관리</h3>
        <ul className='sort'>
          <li className='checked'>작업목록</li>
          <li>일반작업등록</li>
          <li>긴급작업등록</li>
          <li>템플릿목록</li>
          <li>템플릿등록</li>
        </ul>
        <div className='btn-wrap center mt25'>
          <button className="btn-up-square">위로</button>
          <button className="btn-down-square">아래로</button>
          <button type="button" className="btn btn-lg btn-primary ml8">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

export { PopupSysComSort, PopupSysMenuSort, PopupSysLowMenuSort };
