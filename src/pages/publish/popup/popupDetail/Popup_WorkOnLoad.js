import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Popup } from '../../popup/Popup';
import PopupLine from '../popupDetail/Popup_Approval';

function PopupWorkOnLoad() {
  const location = useLocation(); // 추가된 부분
  const pathData = location.state; // 추가된 부분

  useEffect(() => {
    pathData.isDetail = 'yes';
  }, [pathData]);

  const [startStDate, setStartStDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);
  const [endStDate, setEndStDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);
  // 등록부서 팝업
  const [onLoad, setOnLoad] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelected = (item) => {
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
  return (
    <>
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
                                <button className='btn' onClick={() => { setOnLoad(true) }}>선택</button>
                                    <Popup open={onLoad} close={() => { setOnLoad(false) }} header="결제 지정">
                                        <PopupLine onItemSelected={handleItemSelected} />
                                    </Popup>
                            </span>
                        </td>
                        <th scope="row"><label htmlFor="regdate">작업 시작 일시</label></th>
                        <td>
                            <span className='datepickers-wrap'>
                            <span>
                                <DatePicker selected={startStDate} onChange={(date) => setStartStDate(date)} selectsStart startDate={startStDate} endDate={startEndDate} dateFormat="yyyy-MM-dd"/>
                            </span>~<span>
                                <DatePicker selected={startEndDate} onChange={(date) => setStartEndDate(date)} selectsEnd startDate={startStDate} endDate={startEndDate} minDate={startStDate} dateFormat="yyyy-MM-dd" />
                            </span>
                            </span>
                        </td>
                        <th scope="row"><label htmlFor="findate">작업 종료 일시</label></th>
                        <td>
                            <span className='datepickers-wrap'>
                            <span>
                                <DatePicker selected={endStDate} onChange={(date) => setEndStDate(date)} selectsStart startDate={endStDate} endDate={endEndDate} dateFormat="yyyy-MM-dd" />
                            </span>~<span>
                                <DatePicker selected={endEndDate} onChange={(date) => setEndEndDate(date)} selectsEnd startDate={endStDate} endDate={endEndDate} minDate={endStDate} dateFormat="yyyy-MM-dd" />
                            </span>
                            </span>
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
            <div className="search-btn-wrap">
                <button className='btn btn-black'>검색</button>
            </div>
        </div>
        <div className='content-section'>
            <div className="result-pageview">
                <div>
                <span className='total-view'>총 <b>109</b>개</span>
                <span className='select-wrap'>
                <select name="pageViewCnt">
                    <option value="20" selected="selected">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                    <option value="50">50개씩 보기</option>
                    <option value="100">100개씩 보기</option>
                </select>
                </span>
                </div>
                <div className='btn-wrap'>
                <button type="button" className='btn btn-low exel'>엑셀</button>
                </div>
            </div>
            {/* 목록 영역 */}
            <div className='over-flow-x'>
            <table className="table result" style={{ width: '200%' }}>
                <caption>작업 목록: 등록번호, 등록부서, 작업구분, 작업 유형, 작업입회여부, 등록자, 구역명, 제목, 시작일시, 종료일시, 소요시간</caption>
                <colgroup>
                <col span="11" />
                </colgroup>
                <thead>
                <tr>
                    <th rowSpan={2}>등록<br />번호</th>
                    <th rowSpan={2}>등록<br />부서</th>
                    <th rowSpan={2}>작업<br />구분</th>
                    <th rowSpan={2}>작업<br />유형</th>
                    <th rowSpan={2}>작업<br />입회여부</th>
                    <th rowSpan={2}>등록자</th>
                    <th rowSpan={2}>구역명</th>
                    <th rowSpan={2}>제목</th>
                    <th colSpan={3}>작업일시</th>
                    <th rowSpan={2}>작업<br />등록일</th>
                    <th rowSpan={2}>작업<br />종료일</th>
                    <th rowSpan={2}>완료<br />예정일</th>
                    <th rowSpan={2}>작업<br />내용</th>
                    <th rowSpan={2}>원인<br />및<br />목적</th>
                    <th rowSpan={2}>이슈사항</th>
                    <th rowSpan={2}>작업<br />대상<br />지역</th>
                    <th rowSpan={2}>작업자</th>
                    <th colSpan={15}>서비스장애</th>
                    <th colSpan={2}>상태</th>
                </tr>
                <tr>
                    <th>시작<br />일시</th>
                    <th>종료<br />일시</th>
                    <th>소요<br />시간</th>
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
                    <th>상태</th>
                    <th>결제<br />상태</th>
                </tr>
                </thead>
                <tbody>
                <td>1111</td>
                <td>강원 인프라</td>
                <td>인프라팀 전결</td>
                <td>시스템</td>
                <td>입회</td>
                <td>홍길동</td>
                <td>영서 방송</td>
                <td><Link to="/approval/ApprovalStandbyDetail" state={pathData}>작업 제목 작업 제목작업 제목작업 제목 작업 제목</Link></td>
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
                <td>강원인프라<br />심재완</td>
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
                <td>등록</td>
                <td>결제<br />완료</td>
                </tbody>
            </table>
            </div>
            <div className="result-nodata">
                <i></i>
                <p>검색결과가 없습니다.</p>
            </div>
            <div className="pagination">
                <Link to="/" className='first' aria-disabled>처음 페이지</Link>
                <Link to="/" className='prev' aria-disabled>이전 페이지</Link>
                <strong>1</strong>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
                <Link to="/">5</Link>
                <Link to="/">6</Link>
                <Link to="/">7</Link>
                <Link to="/">8</Link>
                <Link to="/">9</Link>
                <Link to="/">10</Link>
                <Link to="/" className='next'>다음 페이지</Link>
                <Link to="/" className='last'>마지막 페이지</Link>
            </div>
        </div>
    </>
  )
}

export default PopupWorkOnLoad;
