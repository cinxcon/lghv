import { useState } from 'react';
import Select from 'react-select';
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
  const [startDate2, setStartDate2] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());
  const [selectedStday2, setSelectedStday2] = useState('st_user2');
  const handleStdayChange2 = (event) => {
    setSelectedStday2(event.target.value);
    const currentDate = new Date();
    // 오늘 날짜
    if (event.target.value === 'st_user2') {
      setStartDate2(null);
      setEndDate2(null);
    }
    // 오늘 날짜
    if (event.target.value === 'st_day2') {
      setStartDate2(new Date());
      setEndDate2(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'st_week2') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate2(weekAgo);
      setEndDate2(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'st_month2') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate2(oneMonthAgo);
      setEndDate2(new Date());
    }
  };
  // SelectBox
  const optionDep = [
    { value: '선택 ', label: '선택 ' },
    { value: '서울인프라팀 ', label: '서울인프라팀 ' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];
  const [dep, setDep] = useState(optionDep[0]);
  const optionOs = [
    { value: '선택', label: '선택' }
  ];
  const [os, setOs] = useState(optionOs[0]);
  const optionProtocol = [
    { value: '선택', label: '선택' }
  ];
  const [protocol, setProtocol] = useState(optionProtocol[0]);

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
              <caption>검색: 사용자부서, 사용자, 장비, OS, 접속Protocol, 접근정책</caption>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col span={2} style={{ width: '13%' }} />
                <col style={{ width: '8%' }} />
                <col span={2} style={{ width: '13%' }} />
                <col style={{ width: '6%' }} />
                <col span={3} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="dep">사용자부서</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionDep[0]} value={dep} onChange={setDep} options={optionDep} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="userName">사용자</label></th>
                  <td colSpan={2}>
                    <input type="text" name="userNamet" id="userName" />
                  </td>
                  <th scope="row"><label htmlFor="eq">장비</label></th>
                  <td colSpan={3}>
                    <input type="text" name="eq" id="eq" />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="os">OS</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionOs[0]} value={os} onChange={setOs} options={optionOs} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="protocol ">접속Protocol</label></th>
                  <td colSpan={2} className='bd-right-none'>
                    <Select defaultValue={optionProtocol[0]} value={protocol} onChange={setProtocol} options={optionProtocol} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="policy">접근정책</label></th>
                  <td colSpan={3}>
                    <input type="text" name="policy" id="policy" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className='search'>
              <caption>시작일시, 종료일시 검색 영역</caption>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col />
                <col style={{ width: '6%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="regdate">시작일시</label></th>
                  <td>
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
                  <th scope="row"><label htmlFor="findate">종료일시</label></th>
                  <td>
                  <div className='flex-wrap between'>
                      <span className='datepickers-wrap'>
                        <span><DatePicker locale={ko} selected={startDate2} onChange={(date) => setStartDate2(date)} startDate={startDate2} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                        ~
                        <span><DatePicker locale={ko} selected={endDate2} onChange={(date) => setEndDate2(date)} startDate={endDate2} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      </span>
                      <span className='radiobtn-wrap'>
                        <fieldset>
                          <legend>날짜 선택</legend>
                            <input type='radio' name='start-date2' id='st_day2' value="st_day2" checked={selectedStday2 === 'st_day2'} onChange={handleStdayChange2}/>
                            <label htmlFor='st_day2' className='type-btn'>하루</label>
                            <input type='radio' name='start-date2' id='st_week2' value="st_week2" checked={selectedStday2 === 'st_week2'} onChange={handleStdayChange2}/>
                            <label htmlFor='st_week2' className='type-btn'>일주일</label>
                            <input type='radio' name='start-date2' id='st_month2' value="st_month2" checked={selectedStday2 === 'st_month2'} onChange={handleStdayChange2}/>
                            <label htmlFor='st_month2' className='type-btn'>한달</label>
                            <input type='radio' name='start-date2' id='st_user2' value="st_user2" checked={selectedStday2 === 'st_user2'} onChange={handleStdayChange2}/>
                            <label htmlFor='st_user2' className='type-btn'>사용자입력</label>
                          </fieldset>
                      </span>
                    </div>
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
              <th rowSpan={2} scope='col'>사용자부서</th>
              <th rowSpan={2} scope='col'>사용자</th>
              <th rowSpan={2} scope='col'>장비</th>
              <th rowSpan={2} scope='col'>OS</th>
              <th rowSpan={2} scope='col'>접속Protocol</th>
              <th rowSpan={2} scope='col'>Protocol접속계정</th>
              <th rowSpan={2} scope='col'>접근정책</th>
              <th rowSpan={2} scope='col'>시작일시</th>
              <th rowSpan={2} scope='col'>종료일시</th>
              <th colSpan={2} scope='col'>상태</th>
            </tr>
            <tr>
              <th scope='col'>기안상태</th>
              <th scope='col'>결재상태</th>
            </tr>
          </thead>
          <tbody>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i}>
                    <td>호남인프라</td>
                    <td>홍길동</td>
                    <td>Infra Core1</td>
                    <td>Linux</td>
                    <td>HTTPS,RDP,SSH,TELNET</td>
                    <td>ADMIN,ROOT,WIN11 </td>
                    <td>L1</td>
                    <td>2023-08-25 09:00:00</td>
                    <td>2023-08-25 09:00:00</td>
                    <td>기안완료</td>
                    <td><span className='color-success'>결재완료</span></td>
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
