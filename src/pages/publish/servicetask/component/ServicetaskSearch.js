import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Popup from '../popupDetail/ApprovalOrgTree/Popup_ApprovalOrgTree';

function ApprovalSearch() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [endeDate, setEndeDate] = useState(null);

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
      <table className="table search">
        <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '7.5%' }} />
          <col style={{ width: '25%' }} />
          <col style={{ width: '7.5%' }} />
          <col style={{ width: '25%' }} />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row"><label htmlFor="subjec">제목</label></th>
            <td>
              <span className='btn-wrap'>
                <input type="text" name="subject" id="subjec" placeholder='제목' value={subjecValue} onInput={onSubjecInput} />
                <button type="button" className='clear-search-button' onClick={onSubjecClear}>삭제</button>
              </span>
            </td>
            <th scope="row"><label htmlFor="regnum">등록번호</label></th>
            <td>
              <span className='btn-wrap'>
                <input type="text" name="regnum" id="regnum" placeholder='등록번호' value={registrantValue} onInput={onRegistrantInput} />
                <button type="button" className='clear-search-button' onClick={onRegistrantClear}>삭제</button>
              </span>
              <span className='search-error-msg'>숫자만 입력하세요.</span>
            </td>
            <th scope="row"><label htmlFor="registrant">등록자</label></th>
            <td>
              <span className='btn-wrap'>
                <input type="text" name="registrant" id="registrant" placeholder='등록자' value={regnumValue} onInput={onRegnumInput} />
                <button type="button" className='clear-search-button' onClick={onRegnumClear}>삭제</button>
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row"><label htmlFor="regdep">등록부서</label></th>
            <td>
              <span className='input input_org'>{selectedItem}</span>
              <button onClick={handleOpenPopup} className='btn'>선택</button>
              {isPopupOpen && (<Popup onClose={handleClosePopup} onItemSelected={handleItemSelected} />)}
            </td>
            <th scope="row"><label htmlFor="regdate">작업 시작 일시</label></th>
            <td>
              <DatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => setDateRange(update)} dateFormat="yyyy-MM-dd"/>
              </td>
            <th scope="row"><label htmlFor="findate">작업 종료 일시</label></th>
            <td>
              <DatePicker selected={endeDate} onChange={(date) => setEndeDate(date)} isClearable dateFormat="yyyy-MM-dd" />
              <button className='btn btn-low' >삭제</button>
            </td>
          </tr>
          <tr>
            <th scope="row"><label htmlFor="area">구역 명</label></th>
            <td>
              <span>
                <select name="area" id="area">
                  <option value="">선택</option>
                </select>
              </span>
            </td>
            <th scope="row"><label htmlFor="type1">작업구분/유형</label></th>
            <td colSpan={3}>
              <select name="type1" id="type1">
                <option value="">선택</option>
              </select>
              <select name="type2" id="type2">
                <option value="">선택</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="search-btn-wrap">
        <button className='btn btn-black'>검색</button>
      </div>
    </div>
  )
}

export default ApprovalSearch;
