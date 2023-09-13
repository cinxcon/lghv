import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function AccPolicy() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const pagedata = {
    title: '접근제어',
    subtitle: '접근제어 정책 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // 날짜 선택
  const [startDate1, setStartDate1] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());
  const [selectedStday1, setSelectedStday1] = useState('st_day1');
  const handleStdayChange1 = (event) => {
    setSelectedStday1(event.target.value);
    const currentDate = new Date();
    // 오늘 날짜
    if (event.target.value === 'st_user1') {
      setStartDate1(null);
      setEndDate1(null);
    }
    // 오늘 날짜
    if (event.target.value === 'st_day1') {
      setStartDate1(new Date());
      setEndDate1(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'st_week1') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate1(weekAgo);
      setEndDate1(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'st_month1') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate1(oneMonthAgo);
      setEndDate1(new Date());
    }
  };

  return (
    <>
      <ContentTitle data={pagedata} />
      {/* 검색 영역 */}
      <div className='content-section'>
        <div className='search-wrap'>
          <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
          </div>
          <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
            <table className='search'>
              <caption>검색: 제목, 등록번호, 등록자, 등록부서, 작업등록일</caption>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col span={2} style={{ width: '13%' }} />
                <col style={{ width: '6%' }} />
                <col span={2} style={{ width: '13%' }} />
                <col style={{ width: '6%' }} />
                <col span={3} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="subject">제목</label></th>
                  <td colSpan={9}>
                    <input type="text" name="subject" id="subject" />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="no">등록번호</label></th>
                  <td colSpan={2}>
                    <input type="text" name="no" id="no" />
                  </td>
                  <th scope="row"><label htmlFor="user">등록자</label></th>
                  <td colSpan={2}>
                    <input type="text" name="user" id="user" />
                  </td>
                  <th scope="row"><label htmlFor="dep">등록부서</label></th>
                  <td colSpan={3}>
                    <span className='input-btn-wrap'>
                      <span className='input input_org input-search-front'></span>
                      <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="regdate">작업등록일</label></th>
                  <td colSpan={4}>
                    <div className='flex-wrap between'>
                      <span className='datepickers-wrap'>
                        <span><DatePicker locale={ko} selected={startDate1} onChange={(date) => setStartDate1(date)} startDate={startDate1} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                        ~
                        <span><DatePicker locale={ko} selected={endDate1} onChange={(date) => setEndDate1(date)} startDate={endDate1} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      </span>
                      <span className='radiobtn-wrap'>
                        <fieldset>
                          <legend>날짜 선택</legend>
                            <input type='radio' name='start-date1' id='st_day1' value="st_day1" checked={selectedStday1 === 'st_day1'} onChange={handleStdayChange1}/>
                            <label htmlFor='st_day1' className='type-btn'>하루</label>
                            <input type='radio' name='start-date1' id='st_week1' value="st_week1" checked={selectedStday1 === 'st_week1'} onChange={handleStdayChange1}/>
                            <label htmlFor='st_week1' className='type-btn'>일주일</label>
                            <input type='radio' name='start-date1' id='st_month1' value="st_month1" checked={selectedStday1 === 'st_month1'} onChange={handleStdayChange1}/>
                            <label htmlFor='st_month1' className='type-btn'>한달</label>
                            <input type='radio' name='start-date1' id='st_user1' value="st_user1" checked={selectedStday1 === 'st_user1'} onChange={handleStdayChange1}/>
                            <label htmlFor='st_user1' className='type-btn'>사용자입력</label>
                          </fieldset>
                      </span>
                    </div>
                  </td>
                  <td colSpan={5}></td>
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
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <button type="button" className="btn btn-low btn-md btn-exel">엑셀</button>
          </div>
        </div>
        <table className="table table-td-left">
          <caption>접근제어 정책목록</caption>
          <colgroup>
            <col span={11} />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2} scope='col'>등록번호</th>
              <th rowSpan={2} scope='col'>등록부서</th>
              <th rowSpan={2} scope='col'>기안자</th>
              <th rowSpan={2} scope='col'>제목</th>
              <th rowSpan={2} scope='col'>등록일</th>
              <th colSpan={3} scope='col'>상태</th>
            </tr>
            <tr>
              <th scope='col'>기안상태</th>
              <th scope='col'>결재상태</th>
              <th scope='col'>성공여부</th>
            </tr>
          </thead>
          <tbody>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} className='link' onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0011', 'detail', '1280', '760') }}>
                    <td>T23080700004322</td>
                    <td>경북인프라팀</td>
                    <td>흉길동</td>
                    <td>접근제어 정책 상세 제목</td>
                    <td>2023-09-08 10:18:00</td>
                    <td>기안완료</td>
                    <td><span className='color-success'>결재완료</span></td>
                    <td>3/4</td>
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

export default AccPolicy;
