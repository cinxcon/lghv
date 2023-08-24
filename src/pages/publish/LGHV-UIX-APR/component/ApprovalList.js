import { useState, useEffect } from 'react';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

export default function ApprovalList(props) {
  const { data, toDetail, currentStatus } = props;
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  const pathData = data; // 추가된 부분
  useEffect(() => {
    pathData.isDetail = 'yes';
  }, [pathData]);

  const onPopup = () => {
    const url = toDetail;
    const popupWidth = 1280;
    const popupHeight = 800;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, '_blank', 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }

  return (
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-low btn-md btn-exel'>엑셀</button>
        </div>
      </div>
      {/* 목록 영역 */}
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
          {
            resultList.map(function(a, i) {
              return (
                <tr key={i} onClick={onPopup} className='link'>
                  <td>WRK11102</td>
                  <td>작업관리</td>
                  <td>중앙방송</td>
                  <td>신규 사용자 등록</td>
                  <td>서울인프라팀</td>
                  <td>홍길동</td>
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
