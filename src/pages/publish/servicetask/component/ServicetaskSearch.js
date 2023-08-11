import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Popup } from '../../popup/Popup';
import PopupDepartment from '../../popup/popupDetail/Popup_department';

function ServicetaskSearch() {
  const [startDate, setStartDate] = useState(null);
  // const [startEndDate, setStartEndDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [endEndDate, setEndEndDate] = useState(null);
  // 등록부서 팝업
  const [onLoad, setOnLoad] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelected = (item) => {
    setOnLoad(false);
    setSelectedItem(item);
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
  const handleTableOpen = () => {
    const foldItem = document.getElementById('search-fold');
    const btn = document.getElementById('fold-open');
    foldItem.classList.remove('hide');
    btn.classList.add('hide');
  }
  const handleTableClose = () => {
    const foldItem = document.getElementById('search-fold');
    const btn = document.getElementById('fold-open');
    foldItem.classList.add('hide');
    btn.classList.remove('hide');
  }

  return (
    <div className='content-section'>
      <div className='right'>
         <button className='btn btn-fold close hide' onClick={handleTableOpen} id='fold-open'>검색영역 열기</button>
      </div>
      <div className='search-wrap' id='search-fold'>
        <table className='search'>
          <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
          <colgroup>
            <col style={{ width: '7%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '20%' }} />
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
              <th scope="row"><label htmlFor="regdep">등록부서</label></th>
              <td>
                <span className='input-btn-wrap'>
                  <span className='input input_org' style={{ width: '88%' }}>{selectedItem}</span>
                  <button className='btn btn-black btn-search' onClick={() => { setOnLoad(true) }}>선택</button>
                    <Popup open={onLoad} close={() => { setOnLoad(false) }} header="결제 지정" type={'lg'}>
                        <PopupDepartment onItemSelected={handleItemSelected} />
                    </Popup>
                </span>
              </td>
              <td rowSpan={2}>
               <div className='input-btn-wrap'>
                <button className='btn btn-black btn-search-txt'>검색</button>
                <button className='btn btn-fold' onClick={handleTableClose}>검색영역 접기</button>
               </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><label htmlFor="regdate">작업 시작 일시</label></th>
              <td>
                   <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd"/>
              </td>
              <th scope="row"><label htmlFor="findate">작업 종료 일시</label></th>
              <td>
                 <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" />
              </td>
              <th scope="row"><label htmlFor="area">구역 명</label></th>
              <td>
                <span>
                  <select name="area" id="area">
                    <option value="">선택</option>
                  </select>
                </span>
              </td>
              <th scope="row"><label htmlFor="type1">작업구분/유형</label></th>
              <td>
                <span className='service select-wrap'>
                  <select name="type1" id="type1">
                    <option value="">선택</option>
                  </select>
                  <select name="type2" id="type2">
                    <option value="">선택</option>
                  </select>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     </div>
  )
}

export default ServicetaskSearch;
