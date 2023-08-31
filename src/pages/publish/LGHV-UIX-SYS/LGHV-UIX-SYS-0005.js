import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import Select from 'react-select';

import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function SysConnectLog() {
  const pagedata = {
    title: '로그 관리',
    subtitle: '접속 로그',
    SubMenu: 'yes'
  }
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);

  //  토글
  const [isToggled, setToggled] = useState(false);

  // 셀렉트 박스
  const optionsWorkType = [
    { value: 'all', label: '전체' },
    { value: '긴급작업', label: '긴급작업' },
    { value: '일반작업', label: '일반작업' }
  ];
  const optionAcess = [
    { value: 'all', label: '전체' },
    { value: '접근제어', label: '접근제어' },
    { value: '비접근제어', label: '비접근제어' }
  ];
  const optionDivision = [
    { value: 'all', label: '전체' },
    { value: '인프라팀 전결', label: '인프라팀 전결' },
    { value: '플랫폼운영담당 전결', label: '플랫폼운영담당 전결' }
  ];
  const optionInfraType = [
    { value: 'all', label: '전체' },
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];
  const optionSoType = [
    { value: 'all', label: '전체' },
    { value: 'so', label: 'SO' }
  ];
  const optionCategory = [
    { value: 'all', label: '전체' }
  ];

  const [workType, setWorkType] = useState(optionsWorkType[0]);
  const [acess, setAcess] = useState(optionAcess[0]);
  const [division, setDivision] = useState(optionDivision[0]);
  const [category, setCategory] = useState(optionCategory[0]);
  const [infraType, setInfraType] = useState(optionInfraType[0]);
  const [soType, setSoType] = useState(optionSoType[0]);

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
                    <span className='input input_org input-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                  <th scope="row"><label htmlFor="type">작업종류</label></th>
                  <td colSpan={2}>
                      <Select defaultValue={optionsWorkType[0]} value={workType} onChange={setWorkType} options={optionsWorkType} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="access">접근종류</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionAcess[0]} value={acess} onChange={setAcess} options={optionAcess} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="division">작업구분/유형</label></th>
                  <td colSpan={3}>
                    <span className='service select-wrap'>
                      <Select defaultValue={optionDivision[0]} value={division} onChange={setDivision} options={optionDivision} className='react-select-container' classNamePrefix="react-select" />
                      <Select defaultValue={optionCategory[0]} value={category} onChange={setCategory} options={optionCategory} className='react-select-container ml10' classNamePrefix="react-select" />
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
                      <Select defaultValue={optionInfraType[0]} value={infraType} onChange={setInfraType} options={optionInfraType} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="SO ">SO </label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionSoType[0]} value={soType} onChange={setSoType} options={optionSoType} className='react-select-container' classNamePrefix="react-select" />
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
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-md btn-reg'>일반 등록</button>
          <button type="button" className='btn btn-md btn-reg-er'>긴급 등록</button>
          <button type="button" className='btn btn-md btn-low btn-exel'>엑셀</button>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='over-flow-x'>
        <table className="table" style={{ width: '200%' }}>
          <caption>작업 목록 리스트</caption>
          <colgroup>
            <col span="38" />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2}>등록번호</th>
              <th rowSpan={2}>등록부서</th>
              <th rowSpan={2}>작업종류</th>
              <th rowSpan={2}>접근구분</th>
              <th rowSpan={2}>작업구분</th>
              <th rowSpan={2}>작업유형</th>
              <th rowSpan={2}>작업입회여부</th>
              <th rowSpan={2}>등록자</th>
              <th rowSpan={2}>구역명</th>
              <th rowSpan={2}>제목</th>
              <th colSpan={3}>작업일시</th>
              <th rowSpan={2}>작업등록일</th>
              <th rowSpan={2}>작업종료일</th>
              <th rowSpan={2}>완료예정일</th>
              <th rowSpan={2}>작업내용</th>
              <th rowSpan={2}>원인및목적</th>
              <th rowSpan={2}>이슈사항</th>
              <th rowSpan={2}>작업대상지역</th>
              <th rowSpan={2}>작업자</th>
              <th colSpan={15}>서비스장애</th>
              <th colSpan={2}>상태</th>
            </tr>
            <tr>
              <th>시작일시</th>
              <th>종료일시</th>
              <th>소요시간</th>
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
              <th>순단</th>
              <th>중단</th>
              <th>중단시간</th>
              <th>작업상태</th>
              <th>결제 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={onPopup} className='link'>
              <td>T23080700000151</td>
              <td>강원 인프라팀</td>
              <td>일반작업</td>
              <td>비접근제어</td>
              <td>인프라팀 전결</td>
              <td>전송망</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>안동 AD16-6 긴급점검</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>1H</td>
              <td>2023-01-01 10:00</td>
              <td>2023-01-01 20:00</td>
              <td>2023-01-01</td>
              <td>작업내용</td>
              <td>원인</td>
              <td>이슈 사항</td>
              <td>강원인프라</td>
              <td>강원인프라 심재완</td>
              <td>130</td>
              <td>100</td>
              <td>10</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>3m</td>
              <td><span className='color-success'>진행중</span></td>
              <td><span className='color-success'>결제완료</span></td>
            </tr>
            <tr onClick={onPopup} className='link'>
              <td>T23080700000152</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>인프라팀 전결</td>
              <td>전송망</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>안동 AD16-6 긴급점검</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>1H</td>
              <td>2023-01-01 10:00</td>
              <td>2023-01-01 20:00</td>
              <td>2023-01-01</td>
              <td>작업내용</td>
              <td>원인</td>
              <td>이슈 사항</td>
              <td>강원인프라</td>
              <td>강원인프라 심재완</td>
              <td>130</td>
              <td>100</td>
              <td>10</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>3m</td>
              <td><span className='color-warning'>등록</span></td>
              <td><span className='color-warning'>결제대기</span></td>
            </tr>
            <tr onClick={onPopup} className='link'>
              <td>T23080700000153</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>인프라팀 전결</td>
              <td>전송망</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>안동 AD16-6 긴급점검</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>1H</td>
              <td>2023-01-01 10:00</td>
              <td>2023-01-01 20:00</td>
              <td>2023-01-01</td>
              <td>작업내용</td>
              <td>원인</td>
              <td>이슈 사항</td>
              <td>강원인프라</td>
              <td>강원인프라 심재완</td>
              <td>130</td>
              <td>100</td>
              <td>10</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>3m</td>
              <td><span className='color-error'>작업취소</span></td>
              <td><span className='color-error'>결재반려</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ResultNoData />
      <ResultListPaging />
    </div>
    </>
  )
}
export default SysConnectLog;
