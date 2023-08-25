import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

function ServicetaskSearch() {
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);

  //  토글
  const [isToggled, setToggled] = useState(false);

  // 데이터 리스트
  const [workType, setWorkType] = useState(null);
  const [acessType, setAcessType] = useState(null);
  const [divisionType, setDivisionType] = useState(null);
  const [categoryType, setCategoryType] = useState(null);
  const [infraType, setInfraType] = useState(null);
  const [soType, setSoType] = useState(null);

  const handleWorkTypeChange = (event) => {
    setWorkType(event.target.value);
  };

  const handleAcessTypeChange = (event) => {
    setAcessType(event.target.value);
  };

  const handleDivisionTypeChange = (event) => {
    setDivisionType(event.target.value);
  };

  const handleCategoryTypeChange = (event) => {
    setCategoryType(event.target.value);
  };
  const handleInfraTypeChange = (event) => {
    setInfraType(event.target.value);
  };
  const handleSoTypeChange = (event) => {
    setSoType(event.target.value);
  };

  // 날짜 선택
  const [selectedStday, setSelectedStday] = useState('st_user');
  const [selectedEdday, setSelectedEdday] = useState('ed_user');

  const handleStdayChange = (event) => {
    setSelectedStday(event.target.value);

    const currentDate = new Date();

    // 오늘 날짜
    if (event.target.value === 'st_user') {
      setStartDate(null);
      setStartEndDate(null);
    }
    // 오늘 날짜
    if (event.target.value === 'st_day') {
      setStartDate(new Date());
      setStartEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'st_week') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate(weekAgo);
      setStartEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'st_month') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate(oneMonthAgo);
      setStartEndDate(new Date());
    }
  };

  const handleEddayChange = (event) => {
    setSelectedEdday(event.target.value);
    const currentDate = new Date();

    // 오늘 날짜
    if (event.target.value === 'ed_user') {
      setEndDate(null);
      setEndEndDate(null);
    }
    // 오늘 날짜
    if (event.target.value === 'ed_day') {
      setEndDate(new Date());
      setEndEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'ed_week') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setEndDate(weekAgo);
      setEndEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'ed_month') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setEndDate(oneMonthAgo);
      setEndEndDate(new Date());
    }
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

  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupWidth = width;
    const popupHeight = height;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }

  return (
    <div className='content-section'>
      <div className='search-wrap'>
        <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
        </div>
        <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
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
                    <span className='input input_org nput-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                  <th scope="row"><label htmlFor="type">작업종류</label></th>
                  <td colSpan={2}>
                    <span className='service select-wrap'>
                      <input type="text" list="work_type" value={workType} onChange={handleWorkTypeChange} placeholder="작업 종류" />
                      <datalist id="work_type">
                        <option value={'일반작업'} />
                        <option value={'긴급작업'} />
                      </datalist>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="access">접근종류</label></th>
                  <td colSpan={2}>
                    <span className='service select-wrap'>
                    <input type="text" list="access" value={acessType} onChange={handleAcessTypeChange} placeholder="접근종류" />
                      <datalist id="access">
                        <option value={'접근제어'} />
                        <option value={'비접근제어'} />
                      </datalist>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="division">작업구분/유형</label></th>
                  <td colSpan={3}>
                    <span className='service select-wrap'>
                      <input type="text" list="division" value={divisionType} onChange={handleDivisionTypeChange} placeholder="작업구분" />
                      <datalist id="division">
                        <option value={'인프라팀 전결'} />
                        <option value={'플랫폼운영담당 전결'} />
                      </datalist>
                      <input type="text" list="category" value={categoryType} onChange={handleCategoryTypeChange} placeholder="유형" className='ml10' />
                      <datalist id="category">
                        <option value={'선택'} />
                      </datalist>
                    </span>
                  </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="regdate">작업 시작 일시</label></th>
                <td colSpan={4}>
                  <div className='flex-wrap between'>
                    <span className='datepickers-wrap'>
                      <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      ~
                      <span><DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    </span>
                    <span className='radiobtn-wrap'>
                      <fieldset>
                        <legend>날짜 선택</legend>
                          <input type='radio' name='start-date' id='st_day' value="st_day" checked={selectedStday === 'st_day'} onChange={handleStdayChange}/>
                          <label htmlFor='st_day' className='type-btn'>하루</label>
                          <input type='radio' name='start-date' id='st_week' value="st_week" checked={selectedStday === 'st_week'} onChange={handleStdayChange}/>
                          <label htmlFor='st_week' className='type-btn'>일주일</label>
                          <input type='radio' name='start-date' id='st_month' value="st_month" checked={selectedStday === 'st_month'} onChange={handleStdayChange}/>
                          <label htmlFor='st_month' className='type-btn'>한달</label>
                          <input type='radio' name='start-date' id='st_user' value="st_user" checked={selectedStday === 'st_user'} onChange={handleStdayChange}/>
                          <label htmlFor='st_user' className='type-btn'>사용자 지정</label>
                        </fieldset>
                    </span>
                   </div>
                </td>
                <th scope="row"><label htmlFor="findate">작업 종료 일시</label></th>
                <td colSpan={4}>
                  <div className='flex-wrap between'>
                    <span className='datepickers-wrap'>
                      <span><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      ~
                      <span><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    </span>
                    <span className='radiobtn-wrap'>
                        <fieldset>
                          <legend>날짜 선택</legend>
                            <input type='radio' name='end-date' id='ed_day' value="ed_day" checked={selectedEdday === 'ed_day'} onChange={handleEddayChange}/>
                            <label htmlFor='ed_day' className='type-btn'>하루</label>
                            <input type='radio' name='end-date' id='ed_week' value="ed_week" checked={selectedEdday === 'ed_week'} onChange={handleEddayChange}/>
                            <label htmlFor='ed_week' className='type-btn'>일주일</label>
                            <input type='radio' name='end-date' id='ed_month' value="ed_month" checked={selectedEdday === 'ed_month'} onChange={handleEddayChange}/>
                            <label htmlFor='ed_month' className='type-btn'>한달</label>
                            <input type='radio' name='end-date' id='ed_user' value="ed_user" checked={selectedEdday === 'ed_user'} onChange={handleEddayChange}/>
                            <label htmlFor='ed_user' className='type-btn'>사용자 지정</label>
                          </fieldset>
                      </span>
                    </div>
                </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="infra">인프라팀</label></th>
                  <td colSpan={2}>
                    <span>
                      <input type="text" list="infra" value={infraType} onChange={handleInfraTypeChange} placeholder="인프라팀" />
                      <datalist id="infra">
                        <option value={'서울인프라팀'} />
                        <option value={'경북인프라팀'} />
                      </datalist>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="SO ">SO </label></th>
                  <td colSpan={2}>
                    <span>
                      <input type="text" list="SO" value={soType} onChange={handleSoTypeChange} placeholder="SO" />
                      <datalist id="SO">
                        <option value={'중앙방송'} />
                        <option value={'중부산방송'} />
                      </datalist>
                    </span>
                  </td>
                  <td colSpan={4}>
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
