import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

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
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-low exel'>엑셀 다운로드</button>
        </div>
      </div>
      {/* 목록 영역 */}
      <table className="table">
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
      <ResultNoData />
      <ResultListPaging />
    </div>
  )
}
