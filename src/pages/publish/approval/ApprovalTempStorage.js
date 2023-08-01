import { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Popup from './popupDetail/approvalOrgTree/Popup_ApprovalOrgTree';

function ApprovalTempStorage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [endeDate, setEndeDate] = useState(null);
  const [compDate, setCompDate] = useState(null);

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
    <>
      {/* 상단 타이틀 */}
      {/* <ContentTitle /> */}
      <div className="content-title">
        <h2>임시보관함</h2>
        <div className="breadcrumb">
          <span><Link to=''>홈</Link></span>
          <span><Link to=''>결재관리</Link></span>
          <Link to='' className='color-default'>임시보관함</Link>
        </div>
      </div>
      {/* 검색 영역 */}
      {/* <ApprovalSearch /> */}
      <div className='content-section'>
        <table className="table search">
          <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
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
            </tr>
            <tr>
              <th scope="row"><label htmlFor="registrant">등록자</label></th>
              <td>
                <span className='btn-wrap'>
                  <input type="text" name="registrant" id="registrant" placeholder='등록자' value={regnumValue} onInput={onRegnumInput} />
                  <button type="button" className='clear-search-button' onClick={onRegnumClear}>삭제</button>
                </span>
              </td>
              <th scope="row"><label htmlFor="regdep">등록부서</label></th>
              <td>
                <span className='input input_org'>{selectedItem}</span>
                <button onClick={handleOpenPopup} className='btn'>선택</button>
                {isPopupOpen && (<Popup onClose={handleClosePopup} onItemSelected={handleItemSelected} />)}
              </td>
            </tr>
            <tr>
              <th scope="row"><label htmlFor="regdate">등록일</label></th>
              <td>
                <DatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => setDateRange(update)} />
                </td>
              <th scope="row"><label htmlFor="findate">종료일</label></th>
              <td>
                <DatePicker selected={endeDate} onChange={(date) => setEndeDate(date)} isClearable />
                <button className='btn btn-low' >삭제</button>
              </td>
            </tr>
            <tr>
              <th scope="row"><label htmlFor="area">구역 명</label></th>
              <td>
                <span>
                  <select name="area" id="area">
                    <option value="a">선택</option>
                    <option value="b">중앙방송</option>
                    <option value="c">중부산방송</option>
                    <option value="d">해운대방송</option>
                    <option value="e">금정방송</option>
                    <option value="f">경남방송</option>
                    <option value="g">가야방송</option>
                  </select>
                </span>
              </td>
              <th scope="row"><label htmlFor="compdate">완료 예정일</label></th>
              <td>
                  <DatePicker selected={compDate} onChange={(date) => setCompDate(date)} isClearable />
                  <button className='btn btn-low'>삭제</button>
              </td>
            </tr>
            <tr>
              <th scope="row">구분</th>
              <td colSpan={3}>
                <fieldset>
                  <legend>구분</legend>
                  <input type="checkbox" name="division" id="div_1" value="" />
                  <label htmlFor="div_1">작업관리</label>
                  <input type="checkbox" name="division" id="div_2" value="" />
                  <label htmlFor="div_2">장애관리</label>
                  <input type="checkbox" name="division" id="div_3" value="" />
                  <label htmlFor="div_3">이슈관리</label>
                </fieldset>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="search-btn-wrap">
          <button className='btn btn-black'>검색</button>
        </div>
      </div>
      {/* 결과 목록 영역 */}
      {/* <ApprovalList /> */}
      <div className='content-section'>
        <div className="result-pageview">
          <span className='total-view'>총 <b>109</b>개</span>
          <span className='select-wrap'>
            <select name="pageViewCnt">
              <option value="10" selected="selected">10개씩 보기</option>
              <option value="30">30개씩 보기</option>
              <option value="50">50개씩 보기</option>
              <option value="100">100개씩 보기</option>
            </select>
          </span>
        </div>
        <table className="table result">
          <caption>결재 대기 목록: 등록번호, 등록부서, 작업구분, 등록자, 구역명, 제목, 등록일, 종료일, 완료예정일, 상태</caption>
          <colgroup>
            <col span="10" />
          </colgroup>
          <thead>
            <tr>
              <th>등록 번호</th>
              <th>등록 부서</th>
              <th>작업 구분</th>
              <th>등록자</th>
              <th>구역명</th>
              <th>제목</th>
              <th>등록일</th>
              <th>종료일</th>
              <th>완료예정일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1111</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td><Link className='link' to="/ApprovalTempStorageDetail">작업 제목</Link></td>
              <td>2023-01-01 02:00</td>
              <td>2023-01-01 03:00</td>
              <td>2023-01-01 03:00</td>
              <td>결재대기</td>
            </tr>
          </tbody>
        </table>
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

export default ApprovalTempStorage;
