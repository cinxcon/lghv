import { useState } from 'react';
import Select from 'react-select';
import { createPortal } from 'react-dom';
import { Alert } from '../Popup';
import ResultPageView from '../../common/ResultPageView';
// import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>관련 그룹 등록</h2>
        </div>
        <table className="table table-row">
          <caption>관련 그룹 등록</caption>
          <colgroup>
            <col style={{ width: '25%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th><label htmlFor="name">이름</label></th>
              <td><input type="text" name="name" id="name" /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">구분</label></th>
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
        <table className="table table-row mt16">
          <caption>관련 그룹 등록</caption>
          <colgroup>
            <col span={3} />
          </colgroup>
          <thead>
            <tr>
              <th>대분류</th>
              <th>중분류</th>
              <th>권한</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TOMS</td>
              <td>상담원 SV</td>
              <td>
                <input type="checkbox" name="check1" id="check1" value="" />
                <label htmlFor="check1">등록</label>
              </td>
            </tr>
            <tr>
              <td>TOMS</td>
              <td>가입자 엑셀 다운로드</td>
              <td>
                <input type="checkbox" name="check2" id="check2" value="" />
                <label htmlFor="check2">엑셀 출력</label>
              </td>
            </tr>
            <tr>
              <td>TOMS</td>
              <td>운영자 권한</td>
              <td>
                <input type="checkbox" name="check3" id="check3" value="" />
                <label htmlFor="check3">ACESS</label>
              </td>
            </tr>
            <tr>
              <td>TOMS</td>
              <td>지식관리</td>
              <td>
                <input type="checkbox" name="check4" id="check4" value="" />
                <label htmlFor="check4">등록</label>
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

function PopupSysGroupInfo() {
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>관련 그룹 등록</h2>
        </div>
        <table className="table table-row">
          <caption>관련 그룹 등록</caption>
          <colgroup>
            <col style={{ width: '25%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th><label htmlFor="name">이름</label></th>
              <td><input type="text" name="name" id="name" value={'작업종료권한'} /></td>
            </tr>
            <tr>
              <th><label htmlFor="gubun">구분</label></th>
              <td>
                <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="desc">설명</label></th>
              <td><textarea name="desc" id="desc" className='over-flow-y' value={'작업 종료 가능 권한'}></textarea></td>
            </tr>
          </tbody>
        </table>
        <table className="table table-row mt16">
          <caption>관련 그룹 등록</caption>
          <colgroup>
            <col span={3} />
          </colgroup>
          <thead>
            <tr>
              <th>대분류</th>
              <th>중분류</th>
              <th>권한</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TOMS</td>
              <td>상담원 SV</td>
              <td>
                <input type="checkbox" name="check1" id="check1" value="" />
                <label htmlFor="check1">등록</label>
              </td>
            </tr>
            <tr>
              <td>TOMS</td>
              <td>가입자 엑셀 다운로드</td>
              <td>
                <input type="checkbox" name="check2" id="check2" value="" />
                <label htmlFor="check2">엑셀 출력</label>
              </td>
            </tr>
            <tr>
              <td>TOMS</td>
              <td>운영자 권한</td>
              <td>
                <input type="checkbox" name="check3" id="check3" value="" />
                <label htmlFor="check3">ACESS</label>
              </td>
            </tr>
            <tr>
              <td>TOMS</td>
              <td>지식관리</td>
              <td>
                <input type="checkbox" name="check4" id="check4" value="" />
                <label htmlFor="check4">등록</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

function PopupSysAuthorityUserAdd() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [checkedCount, setCheckedCount] = useState(0);
  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode.parentNode, target.value, target.checked);
    console.log(checkedItems)
    console.log(isChecked)
    console.log(checkedItems.size)
  };
  const checkedItemHandler = (row, i, isChecked) => {
    if (isChecked) {
      checkedItems.add(i);
      setCheckedItems(checkedItems);
      setCheckedCount(checkedItems.size);
      row.classList.add('checked');
    } else if (!isChecked && checkedItems.has(i)) {
      checkedItems.delete(i);
      setCheckedItems(checkedItems);
      setCheckedCount(checkedItems.size);
      row.classList.remove('checked');
    }
    return checkedItems;
  }
  // SelectBox
  const optionKeyword = [
    { value: '이름', label: '이름' },
    { value: 'ID', label: 'ID' },
    { value: '소속부서', label: '소속부서' },
    { value: '휴대폰', label: '휴대폰' },
    { value: '사무실 전화번호', label: '사무실 전화번호' },
    { value: 'email', label: 'email' }
  ];
  const [keyword, setKeyword] = useState(optionKeyword[0]);
  const [regist, setRegist] = useState(false);
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
        <div className="content-title flex-wrap between">
          <h2>권한 사용자 등록</h2>
        </div>
        <div className='content-section search-wrap'>
          <table className='search'>
            <caption>권한 사용자 등록</caption>
            <colgroup>
              <col style={{ width: '4%' }} />
              <col style={{ width: '38%' }} />
              <col style={{ width: '4%' }} />
              <col style={{ width: '38%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'><label htmlFor='keyword'>키워드</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <Select defaultValue={optionKeyword[0]} value={keyword} onChange={setKeyword} options={optionKeyword} className='react-select-container' classNamePrefix="react-select" />
                    <input type='text' name='keyword' id='keyword' className='ml8' />
                  </span>
                </td>
                <th scope='row'><label htmlFor="dep">부서</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
                <td>
                  <div className="btn-wrap right">
                    <button className='btn btn-low btn-ref'>초기화</button>
                    <button className='btn btn-black btn-search-txt'>검색</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='content-section'>
          <div className="result-pageview">
            <ResultPageView />
            <div className='btn-wrap'>
              <span className='ico_check'><b>{checkedCount}</b>개 선택</span>
              <button className='btn btn-md' onClick={() => { setRegist(true) }}>등록</button>
            </div>
            <Alert open={regist} close={() => { setRegist(false) }}>
              <p>권한 사용자로 추가하시겠습니까?</p>
            </Alert>
          </div>
          <div className='over-flow-y' style={{ height: '480px' }}>
            <table className="table table-td-left">
              <caption>결재 대기 목록: 등록번호, 등록부서, 작업구분, 등록자, 구역명, 제목, 등록일, 종료일, 완료예정일, 상태</caption>
              <colgroup>
                <col style={{ width: '5%' }} />
                <col span={6} />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="checkedAll" id="checkedAll" />
                    <label htmlFor="checkedAll" className='invisible'>전체선택</label>
                  </th>
                  <th>이름</th>
                  <th>ID</th>
                  <th>소속부서</th>
                  <th>휴대폰</th>
                  <th>사무실 전화번호</th>
                  <th>email</th>
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
                        <td>테스트</td>
                        <td>0025111</td>
                        <td>동부판매추진팀</td>
                        <td>010-4444-2222</td>
                        <td>070-4444-2222</td>
                        <td>test@lghv.net</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          {/* <ResultNoData /> */}
          <ResultListPaging />
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
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

export { PopupSysCodeAdd, PopupSysCodeInfo, PopupSysGroupAdd, PopupSysGroupInfo, PopupSysAuthorityUserAdd, PopupSysMenuAdd, PopupSysLowMenuAdd, PopupSysMenuInfo, PopupSysLowMenuInfo };
