import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ApprovalList(props) {
  const location = useLocation();
  const pathData = location.state;
  const { toDetail, currentStatus } = props;
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  useEffect(() => {
    pathData.isDetail = 'yes';
  }, [pathData]);

  return (
    <div className='content-section'>
      <div className="result-pageview">
        <div>
          <span className='total-view'>총 <b>109</b>개</span>
          <span className='select-wrap'>
            <select name="pageViewCnt">
              <option value="20" selected="selected">20개씩 보기</option>
              <option value="40">40개씩 보기</option>
              <option value="60">60개씩 보기</option>
              <option value="100">100개씩 보기</option>
            </select>
          </span>
        </div>
        <div className='btn-wrap'>
          <button type="button" className='btn btn-low exel'>엑셀 다운로드</button>
        </div>
      </div>
      {/* 목록 영역 */}
      <table className="table result">
        <caption>결재 대기 목록: 등록번호, 등록부서, 작업구분, 등록자, 구역명, 제목, 등록일, 종료일, 완료예정일, 상태</caption>
        <colgroup>
          <col style={{ width: '6%' }} />
          <col span="2" style={{ width: '9%' }} />
          <col style={{ width: '7%' }} />
          <col style={{ width: '8%' }} />
          <col />
          <col span="3" style={{ width: '11%' }} />
          <col style={{ width: '8%' }} />
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
          {
            resultList.map(function(a, i) {
              return (
                <tr key={i}>
                  <td>1111</td>
                  <td>강원 인프라</td>
                  <td>인프라팀 전결</td>
                  <td>홍길동</td>
                  <td>영서 방송</td>
                  <td><Link className='link' to={toDetail} state={pathData}>{currentStatus} 상세 보기</Link></td>
                  <td>2023-01-01 02:00</td>
                  <td>2023-01-01 03:00</td>
                  <td>2023-01-01 03:00</td>
                  <td>{currentStatus}</td>
                </tr>
              )
            })
          }
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
