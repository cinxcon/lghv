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

export { PopupSysCodeAdd, PopupSysCodeInfo, PopupSysGroupAdd };
