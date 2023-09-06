import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function DisabilityMngList() {
  const pagedata = {
    title: '장애관리',
    subtitle: '장애목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  //  토글
  const [isToggled, setToggled] = useState(false);
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
  // SelectBox
  const optionInfraType = [
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];
  const [infraType, setInfraType] = useState(optionInfraType[0]);
  const optionSoType = [
    { value: '중앙방송', label: '중앙방송' },
    { value: '중부산방송', label: '중부산방송' }
  ];
  const [soType, setSoType] = useState(optionSoType[0]);
  const optionType = [
    { value: '지정안함', label: '지정안함' },
    { value: 'A등급', label: 'A등급' },
    { value: 'B등급', label: 'B등급' },
    { value: 'C등급', label: 'C등급' }
  ];
  const [type, setType] = useState(optionType[0]);
  const optionAccess = [
    { value: '지정안함', label: '지정안함' },
    { value: '내부', label: '내부' },
    { value: '외부', label: '외부' }
  ];
  const [access, setAccess] = useState(optionAccess[0]);

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <div className='search-wrap'>
          <div className='title flex-wrap between'>
              <h3>검색 조건</h3>
              <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
          </div>
          <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
            <table className='search'>
              <caption>제목, 등록번호, 등록자, 접수부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
              <colgroup>
                <col span={10} style={{ width: '10%' }} />
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
                  <th scope="row"><label htmlFor="regdep">접수부서</label></th>
                  <td colSpan={3}>
                    <span className='input-btn-wrap'>
                      <span className='input input_org input-search-front'></span>
                      <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="regdate">등록일</label></th>
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
                  <th scope="row"><label htmlFor="findate">종료일</label></th>
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
                    <td colSpan={4}>
                      <Select defaultValue={optionInfraType[0]} value={infraType} onChange={setInfraType} options={optionInfraType} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                    <th scope="row"><label htmlFor="SO ">SO </label></th>
                    <td colSpan={4}>
                      <Select defaultValue={optionSoType[0]} value={soType} onChange={setSoType} options={optionSoType} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><label htmlFor="type">장애등급</label></th>
                    <td colSpan={4}>
                      <Select defaultValue={optionType[0]} value={type} onChange={setType} options={optionType} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                    <th scope="row"><label htmlFor="access">장애귀책</label></th>
                    <td colSpan={4}>
                      <Select defaultValue={optionAccess[0]} value={access} onChange={setAccess} options={optionAccess} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><label htmlFor="division">대상서비스</label></th>
                    <td colSpan={9}>
                      <fieldset>
                        <legend>대상 서비스</legend>
                        <input type="checkbox" name="service" id="ser_1" value="" />
                        <label htmlFor="ser_1">DTV</label>
                        <input type="checkbox" name="service" id="ser_2" value="" />
                        <label htmlFor="ser_2">NET</label>
                        <input type="checkbox" name="service" id="ser_3" value="" />
                        <label htmlFor="ser_3">VOIP</label>
                        <input type="checkbox" name="service" id="ser_4" value="" />
                        <label htmlFor="ser_4">ATV</label>
                        <input type="checkbox" name="service" id="ser_5" value="" />
                        <label htmlFor="ser_5" className='color-info'>VOD</label>
                        <input type="checkbox" name="service" id="ser_6" value="" />
                        <label htmlFor="ser_6" className='color-info'>ESS</label>
                        <input type="checkbox" name="service" id="ser_7" value="" />
                        <label htmlFor="ser_7" className='color-info'>클라우드</label>
                        <input type="checkbox" name="service" id="ser_8" value="" />
                        <label htmlFor="ser_8" className='color-info'>전송망</label>
                        <input type="checkbox" name="service" id="ser_9" value="" />
                        <label htmlFor="ser_9" className='color-info'>국간망</label>
                        <input type="checkbox" name="service" id="ser_10" value="" />
                        <label htmlFor="ser_10" className='color-info'>기간망</label>
                        <input type="checkbox" name="service" id="ser_11" value="" />
                        <label htmlFor="ser_11" className='color-info'>기반</label>
                        <input type="checkbox" name="service" id="ser_12" value="" />
                        <label htmlFor="ser_12" className='color-info'>기타</label>
                      </fieldset>
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
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <button type="button" className='btn btn-md btn-low btn-exel'>엑셀</button>
          </div>
        </div>
        {/* 목록 영역 */}
        <div className='over-flow-x'>
          <table className="table" style={{ width: '150%' }}>
            <caption>작업 목록: </caption>
            <colgroup>
              <col span="19" />
            </colgroup>
            <thead>
              <tr>
                <th rowSpan={2}>등록번호</th>
                <th rowSpan={2}>접수부서</th>
                <th rowSpan={2}>등록자</th>
                <th rowSpan={2}>대상 서비스</th>
                <th rowSpan={2}>장애등급</th>
                <th rowSpan={2}>장애귀책</th>
                <th rowSpan={2}>구역명</th>
                <th rowSpan={2}>제목</th>
                <th colSpan={12}>장애지역 가입자수</th>
                <th colSpan={2}>상태</th>
              </tr>
              <tr>
                <th>DTV</th>
                <th>NET</th>
                <th>VOIP</th>
                <th>ATV</th>
                <th>VOD</th>
                <th>ESS</th>
                <th>클라우드</th>
                <th>전송망</th>
                <th>국간망</th>
                <th>기간망</th>
                <th>기반</th>
                <th>기타</th>
                <th>장애상태</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
            {
              resultList.map(function(a, i) {
                return (
                <tr key={i} onClick={() => { onPopup('/LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail', 'detail', '1280', '760') }} className='link'>
                  <td>T23080700000151</td>
                  <td>경인테크팀</td>
                  <td>CAMS</td>
                  <td>DTV</td>
                  <td>등급외</td>
                  <td>내부</td>
                  <td>수성방송</td>
                  <td>안동 AD16-6 긴급점검</td>
                  <td>4</td>
                  <td>2</td>
                  <td>3</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>장애완료</td>
                  <td><span className='color-success'>결재완료</span></td>
                </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
        <ResultNoData />
        <ResultListPaging />
      </div>
    </>
  )
};
export default DisabilityMngList;
