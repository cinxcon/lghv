import { useState } from 'react';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

export default function ApprovalList() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  // 새창 팝업
  const onPopup = (name) => {
    const url = '/LGHV-UIX-APR/LGHV-UIX-APR-0001/:' + name;
    const width = '1280';
    const height = '760';
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
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
          <tr onClick={() => { onPopup('wrk') }} className='link'>
            <td>WRK00001</td>
            <td>작업관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-disable'>결재대기</span></td>
          </tr>
          <tr onClick={() => { onPopup('wrk') }} className='link'>
            <td>WRK00002</td>
            <td>작업관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-fail'>결재반려</span></td>
          </tr>
          <tr onClick={() => { onPopup('wrk') }} className='link'>
            <td>WRK00003</td>
            <td>작업관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-success'>결재완료</span></td>
          </tr>
          <tr onClick={() => { onPopup('blk') }} className='link'>
            <td>BLK00001</td>
            <td>장애관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-disable'>결재대기</span></td>
          </tr>
          <tr onClick={() => { onPopup('blk') }} className='link'>
            <td>BLK00002</td>
            <td>장애관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-fail'>결재반려</span></td>
          </tr>
          <tr onClick={() => { onPopup('blk') }} className='link'>
            <td>BLK00003</td>
            <td>장애관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-success'>결재완료</span></td>
          </tr>
          <tr onClick={() => { onPopup('accUser') }} className='link'>
            <td>ACC20001</td>
            <td>사용자관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-disable'>결재대기</span></td>
          </tr>
          <tr onClick={() => { onPopup('accUser') }} className='link'>
            <td>ACC20002</td>
            <td>사용자관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-fail'>결재반려</span></td>
          </tr>
          <tr onClick={() => { onPopup('accUser') }} className='link'>
            <td>ACC20003</td>
            <td>사용자관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-success'>결재완료</span></td>
          </tr>
          <tr onClick={() => { onPopup('accEq') }} className='link'>
            <td>ACC60001</td>
            <td>장비관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-disable'>결재대기</span></td>
          </tr>
          <tr onClick={() => { onPopup('accEq') }} className='link'>
            <td>ACC60002</td>
            <td>장비관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-fail'>결재반려</span></td>
          </tr>
          <tr onClick={() => { onPopup('accEq') }} className='link'>
            <td>ACC60003</td>
            <td>장비관리</td>
            <td>중앙방송</td>
            <td>신규 사용자 등록</td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td><span className='color-success'>결재완료</span></td>
          </tr>
          {
            resultList.map(function(a, i) {
              return (
                <tr key={i} onClick={() => { onPopup('wrk') }} className='link'>
                  <td>WRK11102</td>
                  <td>작업관리</td>
                  <td>중앙방송</td>
                  <td>신규 사용자 등록</td>
                  <td>서울인프라팀</td>
                  <td>홍길동</td>
                  <td>2023-01-01 02:00</td>
                  <td>2023-01-01 03:00</td>
                  <td>2023-01-01 03:00</td>
                  <td><span className='color-disable'>결재대기</span></td>
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
