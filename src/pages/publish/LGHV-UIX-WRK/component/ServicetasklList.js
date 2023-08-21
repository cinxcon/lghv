import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

export default function ServicetasklList() {
  const location = useLocation(); // 추가된 부분
  const pathData = location.state; // 추가된 부분
  const navigate = useNavigate();

  useEffect(() => {
    pathData.isDetail = 'yes';
  }, [pathData]);

  const selectedWork = () => {
    navigate('/LGHV-UIX-WRK/LGHV-UIX-WRK-0004', { state: pathData });
  }

  return (
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-md btn-low btn-exel'>엑셀</button>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='over-flow-x'>
        <table className="table" style={{ width: '300%' }}>
          <caption>작업 목록: 등록번호, 등록부서, 작업구분, 작업 유형, 작업입회여부, 등록자, 구역명, 제목, 시작일시, 종료일시, 소요시간</caption>
          <colgroup>
            <col span="19" />
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
              <th>결제 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={selectedWork} className='link'>
              <td>1111</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>작업 제목 작업 제목작업 제목작업 제목 작업 제목</td>
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
              <td><span className='color-success'>진행중</span></td>
              <td><span className='color-success'>결제완료</span></td>
            </tr>
            <tr onClick={selectedWork} className='link'>
              <td>1111</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>작업 제목 작업 제목작업 제목작업 제목 작업 제목</td>
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
              <td><span className='color-warning'>등록</span></td>
              <td><span className='color-warning'>결제대기</span></td>
            </tr>
            <tr onClick={selectedWork} className='link'>
              <td>1111</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>작업 제목 작업 제목작업 제목작업 제목 작업 제목</td>
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
              <td><span className='color-error'>작업취소</span></td>
              <td><span className='color-error'>결재반려</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ResultNoData />
      <ResultListPaging />
    </div>
  )
}
