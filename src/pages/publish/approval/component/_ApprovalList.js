import { Link } from 'react-router-dom';

export default function ApprovalList() {
  return (
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
      {/* 목록 영역 */}
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
            <td><Link className='link' to="/ApprovalDetailTest">작업 제목 테스트</Link></td>
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
  )
}
