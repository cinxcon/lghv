import { useState } from 'react';
import Select from 'react-select';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupSysCodeAdd() {
  // SelectBox
  const optionGubun = [
    { value: '사용자', label: '사용자' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);
  const optionCode = [
    { value: '미생성', label: '미생성' }
  ];
  const [code, setCode] = useState(optionCode[0]);
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>코드 등록</h2>
        </div>
        <table className="table table-row">
          <caption>코드 등록</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>코드 그룹</th>
              <td>점검결과</td>
            </tr>
            <tr>
              <th><label htmlFor="codeName">코드명</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td><input type="text" name="codeName" id="codeName" /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="code">하위코드</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionCode[0]} value={code} onChange={setCode} options={optionCode} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="mappingCode">매핑코드</label></th>
              <td><input type="text" name="mappingCode" id="mappingCode" /></td>
            </tr>
            <tr>
              <th><label htmlFor="desc">설명</label></th>
              <td><textarea name="desc" id="desc" className='over-flow-y'></textarea></td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-low">새로입력</button>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysCodeInfo() {
  // SelectBox
  const optionGubun = [
    { value: '사용자', label: '사용자' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);
  const optionCode = [
    { value: '미생성', label: '미생성' }
  ];
  const [code, setCode] = useState(optionCode[0]);
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>코드 정보</h2>
        </div>
        <table className="table table-row">
          <caption>코드 정보</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>코드 그룹</th>
              <td>점검결과</td>
            </tr>
            <tr>
              <th><label htmlFor="codeName">코드명</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td><input type="text" name="codeName" id="codeName" /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="code">하위코드</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionCode[0]} value={code} onChange={setCode} options={optionCode} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="mappingCode">매핑코드</label></th>
              <td><input type="text" name="mappingCode" id="mappingCode" /></td>
            </tr>
            <tr>
              <th><label htmlFor="desc">설명</label></th>
              <td><textarea name="desc" id="desc" className='over-flow-y'></textarea></td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-low">삭제</button>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysGroupAdd() {
  // SelectBox
  const optionGubun = [
    { value: '사용자', label: '사용자' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>관련 그룹 추가</h2>
        </div>
        <table className="table table-row">
          <caption>관련 그룹 추가</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>코드 그룹</th>
              <td>점검결과</td>
            </tr>
            <tr>
              <th><label htmlFor="name">이름</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td><input type="text" name="name" id="name" /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="desc">설명</label></th>
              <td><textarea name="desc" id="desc" className='over-flow-y'></textarea></td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-low">새로입력</button>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysMenuAdd() {
  // SelectBox
  const optionGubun = [
    { value: '전체', label: '전체' },
    { value: '사용자메뉴', label: '사용자메뉴' },
    { value: '시스템메뉴', label: '시스템메뉴' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>메뉴 등록</h2>
        </div>
        <table className="table table-row">
          <caption>메뉴 등록</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th><label htmlFor="menuName">메뉴명</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td><input type="text" name="menuName" id="menuName" /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">메뉴 구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="url">메뉴 URL</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <input type="text" name="url" id="url" />
              </td>
            </tr>
            <tr>
              <th>노출여부 <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <input type='radio' name='view' id='viewYes' checked />
                <label htmlFor='viewYes'>Y</label>
                <input type='radio' name='view' id='viewNo' />
                <label htmlFor='viewNo'>Y</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-low">새로입력</button>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysLowMenuAdd() {
  // SelectBox
  const optionGubun = [
    { value: '전체', label: '전체' },
    { value: '사용자메뉴', label: '사용자메뉴' },
    { value: '시스템메뉴', label: '시스템메뉴' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>하위 메뉴 등록</h2>
        </div>
        <table className="table table-row">
          <caption>하위 메뉴 등록</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>메뉴명</th>
              <td>작업관리</td>
            </tr>
            <tr>
              <th><label htmlFor="menuName">하위 메뉴명</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td><input type="text" name="menuName" id="menuName" /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">메뉴 구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="url">메뉴 URL</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <input type="text" name="url" id="url" />
              </td>
            </tr>
            <tr>
              <th>노출여부 <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <input type='radio' name='view' id='viewYes' checked />
                <label htmlFor='viewYes'>Y</label>
                <input type='radio' name='view' id='viewNo' />
                <label htmlFor='viewNo'>Y</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-low">새로입력</button>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysMenuInfo() {
  // SelectBox
  const optionGubun = [
    { value: '전체', label: '전체' },
    { value: '사용자메뉴', label: '사용자메뉴' },
    { value: '시스템메뉴', label: '시스템메뉴' }
  ];
  const [gubun, setGubun] = useState(optionGubun[1]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>메뉴 정보</h2>
        </div>
        <table className="table table-row">
          <caption>메뉴 정보</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>메뉴명</th>
              <td>작업관리</td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">메뉴 구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="url">메뉴 URL</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <input type="text" name="url" id="url" value={'WRK'} />
              </td>
            </tr>
            <tr>
              <th>노출여부 <span aria-label="required" className='color-primary'>*</span></th>
              <td>Y</td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-primary">수정</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysLowMenuInfo() {
  // SelectBox
  const optionGubun = [
    { value: '전체', label: '전체' },
    { value: '사용자메뉴', label: '사용자메뉴' },
    { value: '시스템메뉴', label: '시스템메뉴' }
  ];
  const [gubun, setGubun] = useState(optionGubun[1]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>하위 메뉴 정보</h2>
        </div>
        <table className="table table-row">
          <caption>하위 메뉴 정보</caption>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>메뉴명</th>
              <td>작업관리</td>
            </tr>
            <tr>
              <th>하위 메뉴명</th>
              <td>작업목록</td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">메뉴 구분</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="url">메뉴 URL</label> <span aria-label="required" className='color-primary'>*</span></th>
              <td>
                <input type="text" name="url" id="url" value={'WRK0001'} />
              </td>
            </tr>
            <tr>
              <th>노출여부 <span aria-label="required" className='color-primary'>*</span></th>
              <td>Y</td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-primary">수정</button>
        </div>
      </div>
    </PopupPortal>
  )
}

export { PopupSysCodeAdd, PopupSysCodeInfo, PopupSysGroupAdd, PopupSysMenuAdd, PopupSysLowMenuAdd, PopupSysMenuInfo, PopupSysLowMenuInfo };
