import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function ApprovalStandby() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결재문서함',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endeDate, setEndeDate] = useState(new Date());
  const [compDate, setCompDate] = useState(new Date());

  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }

  // 날짜 선택
  const [selectedStday, setSelectedStday] = useState('st_user');
  const handleStdayChange = (event) => {
    setSelectedStday(event.target.value);
    const currentDate = new Date();
    // 오늘 날짜
    if (event.target.value === 'st_user') {
      setStartDate(null);
      setEndDate(null);
    }
    // 오늘 날짜
    if (event.target.value === 'st_day') {
      setStartDate(new Date());
      setEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'st_week') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate(weekAgo);
      setEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'st_month') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate(oneMonthAgo);
      setEndDate(new Date());
    }
  };

  // SelectBox
  const optionInfra = [
    { value: '선택', label: '선택' },
    { value: '서울인프라팀 ', label: '서울인프라팀 ' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];
  const [infra, setInfra] = useState(optionInfra[0]);
  const optionSo = [
    { value: '선택', label: '선택' },
    { value: '중앙방송  ', label: '중앙방송  ' },
    { value: '중부산방송', label: '중부산방송' }
  ];
  const [so, setSo] = useState(optionSo[0]);
  const optionGubun = [
    { value: '선택', label: '선택' },
    { value: '결재대기 ', label: '결재대기 ' },
    { value: '결재완료', label: '결재완료' },
    { value: '결재반려', label: '결재반려' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);

  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  // 새창 팝업
  const onPopupDetail = (name) => {
    const url = '/LGHV-UIX-APR/LGHV-UIX-APR-0001/:' + name;
    const width = '1280';
    const height = '760';
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
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
              <caption>제목, 등록번호, 등록자, 등록부서, 구분, 내작업, 인프라팀, SO, 상태구분 항목 검색 영역</caption>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '6%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="subjec">제목</label></th>
                  <td colSpan={5}>
                    <input type="text" name="subject" id="subjec" />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="regnum">등록번호</label></th>
                  <td>
                    <input type="text" name="regnum" id="regnum" />
                    <span className='search-error-msg'>숫자만 입력하세요.</span>
                  </td>
                  <th scope="row"><label htmlFor="registrant">등록자</label></th>
                  <td>
                    <input type="text" name="registrant" id="registrant" />
                  </td>
                  <th scope="row"><label htmlFor="regdep">등록부서</label></th>
                  <td>
                    <span className='input-btn-wrap'>
                      <span className='input input_org input-search-front'></span>
                      <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">구분</th>
                  <td colSpan={3}>
                    <fieldset>
                      <legend>구분</legend>
                      <input type="checkbox" name="division" id="div_1" value="" checked />
                      <label htmlFor="div_1">작업관리</label>
                      <input type="checkbox" name="division" id="div_2" value="" checked />
                      <label htmlFor="div_2">장애관리</label>
                      <input type="checkbox" name="division" id="div_3" value="" checked />
                      <label htmlFor="div_3">사용자관리</label>
                      <input type="checkbox" name="division" id="div_4" value="" checked />
                      <label htmlFor="div_4">장비관리</label>
                    </fieldset>
                  </td>
                  <th scope="row">내작업</th>
                  <td>
                    <input type="checkbox" name="mywork" id="mywork" value="" />
                    <label htmlFor="mywork">내작업만 보기</label>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="infra">인프라팀</label></th>
                  <td>
                    <Select defaultValue={optionInfra[0]} value={infra} onChange={setInfra} options={optionInfra} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="SO">SO</label></th>
                  <td>
                    <Select defaultValue={optionSo[0]} value={so} onChange={setSo} options={optionSo} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="gubun">상태구분</label></th>
                  <td>
                    <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className='search'>
              <caption>등록일, 종료일, 완료예정일 항목 검색 영역</caption>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col />
                <col style={{ width: '6%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '18%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="regdate">등록일</label></th>
                  <td>
                    <div className='flex-wrap between'>
                      <span className='datepickers-wrap'>
                        <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                        ~
                        <span><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} startDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
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
                            <label htmlFor='st_user' className='type-btn'>사용자입력</label>
                          </fieldset>
                      </span>
                    </div>
                  </td>
                  <th scope="row"><label htmlFor="findate">종료일</label></th>
                  <td>
                    <span className='input-btn-wrap'>
                      <DatePicker selected={endeDate} onChange={(date) => setEndeDate(date)} isClearable />
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="compdate">완료예정일</label></th>
                  <td>
                    <span className='input-btn-wrap'>
                      <DatePicker selected={compDate} onChange={(date) => setCompDate(date)} isClearable />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btn-wrap right">
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
            <button type="button" className='btn btn-low btn-md btn-exel'>엑셀</button>
          </div>
        </div>
        <table className="table">
          <caption>결재 대기 목록: 등록번호, 등록부서, 작업구분, 등록자, 구역명, 제목, 등록일, 종료일, 완료예정일, 상태</caption>
          <colgroup>
            <col span="3" style={{ width: '8%' }} />
            <col />
            <col span="2" style={{ width: '8%' }} />
            <col span="3" style={{ width: '11%' }} />
            <col style={{ width: '8%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>등록 번호</th>
              <th>작업 구분</th>
              <th>SO</th>
              <th>제목</th>
              <th>등록 부서</th>
              <th>등록자</th>
              <th>등록일</th>
              <th>종료일</th>
              <th>완료예정일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => { onPopupDetail('wrk') }} className='link'>
              <td>WRK00001</td>
              <td>작업관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-disable'>결재대기</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('wrk') }} className='link'>
              <td>WRK00002</td>
              <td>작업관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-fail'>결재반려</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('wrk') }} className='link'>
              <td>WRK00003</td>
              <td>작업관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-success'>결재완료</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('blk') }} className='link'>
              <td>BLK00001</td>
              <td>장애관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-disable'>결재대기</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('blk') }} className='link'>
              <td>BLK00002</td>
              <td>장애관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-fail'>결재반려</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('blk') }} className='link'>
              <td>BLK00003</td>
              <td>장애관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-success'>결재완료</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('accUser') }} className='link'>
              <td>ACC20001</td>
              <td>사용자관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-disable'>결재대기</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('accUser') }} className='link'>
              <td>ACC20002</td>
              <td>사용자관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-fail'>결재반려</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('accUser') }} className='link'>
              <td>ACC20003</td>
              <td>사용자관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-success'>결재완료</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('accEq') }} className='link'>
              <td>ACC60001</td>
              <td>장비관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-disable'>결재대기</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('accEq') }} className='link'>
              <td>ACC60002</td>
              <td>장비관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-fail'>결재반려</span></td>
            </tr>
            <tr onClick={() => { onPopupDetail('accEq') }} className='link'>
              <td>ACC60003</td>
              <td>장비관리</td>
              <td>중앙방송</td>
              <td className='left'>신규 사용자 등록</td>
              <td>서울인프라팀</td>
              <td>홍길동</td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td><span className='color-success'>결재완료</span></td>
            </tr>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopupDetail('wrk') }} className='link'>
                    <td>WRK11102</td>
                    <td>작업관리</td>
                    <td>중앙방송</td>
                    <td className='left'>신규 사용자 등록</td>
                    <td>서울인프라팀</td>
                    <td>홍길동</td>
                    <td>2023-01-01 02:00</td>
                    <td>2023-01-01 03:00</td>
                    <td>2023-01-01 03:00</td>
                    <td><span className='color-disable'>결재대기</span></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <ResultNoData />
        <ResultListPaging />
      </div>
    </>
  )
}

export default ApprovalStandby;
