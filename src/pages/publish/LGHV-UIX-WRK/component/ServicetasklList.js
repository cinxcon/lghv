import { useNavigate } from 'react-router-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

export default function ServicetasklList(data) {
  const pathData = data; // 추가된 부분
  const navigate = useNavigate();

  const selectedWork = () => {
    navigate('/LGHV-UIX-WRK/LGHV-UIX-WRK-0004', { state: pathData });
  }

  return (
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-md btn-reg'>일반 등록</button>
          <button type="button" className='btn btn-md btn-reg-er'>긴급 등록</button>
          <button type="button" className='btn btn-md btn-low btn-exel'>엑셀</button>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='over-flow-x'>
        <table className="table" style={{ width: '200%' }}>
          <caption>작업 목록 리스트</caption>
          <colgroup>
            <col span="38" />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2}>등록번호</th>
              <th rowSpan={2}>등록부서</th>
              <th rowSpan={2}>작업종류</th>
              <th rowSpan={2}>접근구분</th>
              <th rowSpan={2}>작업구분</th>
              <th rowSpan={2}>작업유형</th>
              <th rowSpan={2}>작업입회여부</th>
              <th rowSpan={2}>등록자</th>
              <th rowSpan={2}>구역명</th>
              <th rowSpan={2}>제목</th>
              <th colSpan={3}>작업일시</th>
              <th rowSpan={2}>작업등록일</th>
              <th rowSpan={2}>작업종료일</th>
              <th rowSpan={2}>완료예정일</th>
              <th rowSpan={2}>작업내용</th>
              <th rowSpan={2}>원인및목적</th>
              <th rowSpan={2}>이슈사항</th>
              <th rowSpan={2}>작업대상지역</th>
              <th rowSpan={2}>작업자</th>
              <th colSpan={15}>서비스장애</th>
              <th colSpan={2}>상태</th>
            </tr>
            <tr>
              <th>시작일시</th>
              <th>종료일시</th>
              <th>소요시간</th>
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
              <th>작업상태</th>
              <th>결제 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={selectedWork} className='link'>
              <td>T23080700000151</td>
              <td>강원 인프라팀</td>
              <td>일반작업</td>
              <td>비접근제어</td>
              <td>인프라팀 전결</td>
              <td>전송망</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>안동 AD16-6 긴급점검</td>
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
              <td>강원인프라 심재완</td>
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
              <td>T23080700000152</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>인프라팀 전결</td>
              <td>전송망</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>안동 AD16-6 긴급점검</td>
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
              <td>강원인프라 심재완</td>
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
              <td>T23080700000153</td>
              <td>강원 인프라</td>
              <td>인프라팀 전결</td>
              <td>시스템</td>
              <td>인프라팀 전결</td>
              <td>전송망</td>
              <td>입회</td>
              <td>홍길동</td>
              <td>영서 방송</td>
              <td>안동 AD16-6 긴급점검</td>
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
              <td>강원인프라 심재완</td>
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
