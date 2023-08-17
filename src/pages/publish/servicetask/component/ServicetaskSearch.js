import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { Popup } from '../../popup/Popup';
import PopupDepartment from '../../popup/popupDetail/Popup_department';

function ServicetaskSearch() {
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);
  // 등록부서 팝업
  const [onLoad, setOnLoad] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  //
  const [isToggled, setToggled] = useState(false);

  const handleItemSelected = (item) => {
    setOnLoad(false);
    setSelectedItem(item.deptName);
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
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  return (
    <div className='content-section'>
      <div className='search-wrap'>
        <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
        </div>
        <div className={`box ${isToggled ? 'hide' : ''} `}>
           <table className='search'>
            <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="subjec">제목</label></th>
                <td colSpan={9}>
                  <span className='input-clear-wrap'>
                    <input type="text" name="subject" id="subjec" placeholder='제목' value={subjecValue} onInput={onSubjecInput} />
                    <button type="button" className='clear-search-button' onClick={onSubjecClear}>삭제</button>
                  </span>
                </td>
                </tr>
              <tr>
                <th scope="row"><label htmlFor="regnum">등록번호</label></th>
                <td colSpan={2}>
                  <span className='input-clear-wrap'>
                    <input type="text" name="regnum" id="regnum" placeholder='등록번호' value={registrantValue} onInput={onRegistrantInput} />
                    <button type="button" className='clear-search-button' onClick={onRegistrantClear}>삭제</button>
                  </span>
                  <span className='search-error-msg'>숫자만 입력하세요.</span>
                </td>
                <th scope="row"><label htmlFor="registrant">등록자</label></th>
                <td colSpan={2}>
                  <span className='input-clear-wrap'>
                    <input type="text" name="registrant" id="registrant" placeholder='등록자' value={regnumValue} onInput={onRegnumInput} />
                    <button type="button" className='clear-search-button' onClick={onRegnumClear}>삭제</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor="regdep">등록부서</label></th>
                <td colSpan={4}>
                  <span className='input-btn-wrap'>
                    <span className='input input_org' style={{ width: '88%' }}>{selectedItem}</span>
                    <button className='btn btn-search' onClick={() => { setOnLoad(true) }}>조회</button>
                      <Popup open={onLoad} close={() => { setOnLoad(false) }} header="등록 부서" type={'sm'}>
                          <PopupDepartment onItemSelected={handleItemSelected} />
                      </Popup>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="regdate">작업 시작 일시</label></th>
                <td colSpan={4}>
                  <span className='datepickers-wrap'>
                    <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    ~
                    <span><DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                  </span>
                </td>
                <th scope="row"><label htmlFor="findate">작업 종료 일시</label></th>
                <td colSpan={4}>
                    <span className='datepickers-wrap'>
                    <span><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    ~
                    <span><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                  </span>
                </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="infra">인프라팀</label></th>
                  <td colSpan={4}>
                    <span>
                      <select name="infra" id="infra">
                        <option value="">서울인프라팀</option>
                        <option value="">경북인프라팀</option>
                      </select>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="SO ">SO </label></th>
                  <td colSpan={4}>
                    <span>
                      <select name="SO" id="SO">
                        <option value="">중앙방송</option>
                        <option value="">중부산방송</option>
                      </select>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="type">작업종류</label></th>
                  <td colSpan={2}>
                    <span className='service select-wrap'>
                      <select name="type" id="type">
                        <option value="">선택</option>
                      </select>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="access">접근종류</label></th>
                  <td colSpan={2}>
                    <span className='service select-wrap'>
                      <select name="access" id="access">
                        <option value="">선택</option>
                      </select>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="division">작업구분/유형</label></th>
                  <td colSpan={3}>
                    <span className='service select-wrap'>
                      <select name="division" id="division">
                        <option value="">선택</option>
                      </select>
                      <select name="category" id="category">
                        <option value="">선택</option>
                      </select>
                    </span>
                  </td>
              </tr>
            </tbody>
          </table>
          <div className='btn-wrap right'>
              <button className='btn btn-low btn-ref'>초기화</button>
              <button className='btn btn-black btn-search-txt'>검색</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicetaskSearch;
