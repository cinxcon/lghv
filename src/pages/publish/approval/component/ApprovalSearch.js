import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Popup from '../popupDetail/approvalOrgTree/Popup_ApprovalOrgTree';

function ApprovalSearch() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endeDate, setEndeDate] = useState(null);
  const [compDate, setCompDate] = useState(null);

  // 등록부서 팝업
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleItemSelected = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(false);
  };

  // input clear
  const [subjecValue, setSubjecValue] = useState('');
  const onSubjecInput = (e) => setSubjecValue(e.target.value);
  const onSubjecClear = () => {
    setSubjecValue('');
  }
  const [regnumValue, setRegnumValue] = useState('');
  const onRegnumInput = (e) => setRegnumValue(e.target.value);
  const onRegnumClear = () => {
    setRegnumValue('');
  }
  const [registrantValue, setRegistrantValue] = useState('');
  const onRegistrantInput = (e) => setRegistrantValue(e.target.value);
  const onRegistrantClear = () => {
    setRegistrantValue('');
  }

  return (
    <div className='content-section'>
      <div className='search-wrap'>
        <table className='search'>
          <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
          <colgroup>
            <col style={{ width: '7%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '7%' }} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row"><label htmlFor="subjec">제목</label></th>
              <td>
                <span className='input-clear-wrap'>
                  <input type="text" name="subject" id="subjec" placeholder='제목' value={subjecValue} onInput={onSubjecInput} />
                  <button type="button" className='clear-search-button' onClick={onSubjecClear}>삭제</button>
                </span>
              </td>
              <th scope="row"><label htmlFor="regnum">등록번호</label></th>
              <td>
                <span className='input-clear-wrap'>
                  <input type="text" name="regnum" id="regnum" placeholder='등록번호' value={registrantValue} onInput={onRegistrantInput} />
                  <button type="button" className='clear-search-button' onClick={onRegistrantClear}>삭제</button>
                </span>
                <span className='search-error-msg'>숫자만 입력하세요.</span>
              </td>
              <th scope="row"><label htmlFor="registrant">등록자</label></th>
              <td>
                <span className='input-clear-wrap'>
                  <input type="text" name="registrant" id="registrant" placeholder='등록자' value={regnumValue} onInput={onRegnumInput} />
                  <button type="button" className='clear-search-button' onClick={onRegnumClear}>삭제</button>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row"><label htmlFor="regdep">등록부서</label></th>
              <td>
                <span className='input-btn-wrap'>
                  <span className='input input_org'>{selectedItem}</span>
                  <button onClick={handleOpenPopup} className='btn'>선택</button>
                  {isPopupOpen && (<Popup onClose={handleClosePopup} onItemSelected={handleItemSelected} />)}
                </span>
              </td>
              <th scope="row"><label htmlFor="regdate">등록일</label></th>
              <td>
                <span className='datepickers-wrap'>
                  <span>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} />
                  </span>~<span>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} />
                  </span>
                </span>
              </td>
              <th scope="row">구분</th>
              <td>
                <fieldset>
                  <legend>구분</legend>
                  <input type="checkbox" name="division" id="div_1" value="" />
                  <label htmlFor="div_1">작업관리</label>
                  <input type="checkbox" name="division" id="div_2" value="" />
                  <label htmlFor="div_2">장애관리</label>
                  <input type="checkbox" name="division" id="div_3" value="" />
                  <label htmlFor="div_3">이슈관리</label>
                </fieldset>
              </td>
            </tr>
            <tr>
              <th scope="row"><label htmlFor="findate">종료일</label></th>
              <td>
                <span className='input-btn-wrap'>
                  <DatePicker selected={endeDate} onChange={(date) => setEndeDate(date)} isClearable />
                  <button className='btn btn-low' >삭제</button>
                </span>
              </td>
              <th scope="row"><label htmlFor="compdate">완료 예정일</label></th>
              <td>
                <span className='input-btn-wrap'>
                  <DatePicker selected={compDate} onChange={(date) => setCompDate(date)} isClearable />
                  <button className='btn btn-low'>삭제</button>
                </span>
              </td>
              <th scope="row"><label htmlFor="area">구역 명</label></th>
              <td>
                <span>
                  <select name="area" id="area">
                    <option value="a">선택</option>
                    <option value="b">중앙방송</option>
                    <option value="c">중부산방송</option>
                    <option value="d">해운대방송</option>
                    <option value="e">금정방송</option>
                    <option value="f">경남방송</option>
                    <option value="g">가야방송</option>
                    <option value="h">마산방송</option>
                    <option value="i">동구방송</option>
                    <option value="j">수성방송</option>
                    <option value="k">신라방송</option>
                    <option value="l">영남방송</option>
                    <option value="m">기술담당</option>
                    <option value="n">호남방송</option>
                    <option value="o">아라방송</option>
                    <option value="p">전북방송</option>
                    <option value="q">강원방송</option>
                    <option value="r">영동방송</option>
                    <option value="s">영서방송</option>
                    <option value="t">양천방송</option>
                    <option value="u">은평방송</option>
                    <option value="v">나라방송</option>
                    <option value="w">부천방송</option>
                    <option value="x">김포방송</option>
                    <option value="y">북인천방송</option>
                    <option value="z">충남방송</option>
                  </select>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="search-btn-wrap">
        <button className='btn btn-black'>검색</button>
      </div>
    </div>
  )
}

export default ApprovalSearch;
