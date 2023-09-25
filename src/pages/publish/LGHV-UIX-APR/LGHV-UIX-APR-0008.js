import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ApprovalSearch from './component/ApprovalSearch';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';
import ServicetaskDetail from '../LGHV-UIX-WRK/LGHV-UIX-WRK-0004';
import DisabilityMngDetail from '../LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail';
import AccUserDetailAPR from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0001-DetailAPR';
import AccEquipmentDetailAPR from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0006-DetailAPR';

function ApprovalProcessing() {
  const pagedata = {
    title: '결재관리',
    subtitle: '처리내역',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  const [resultList] = useState([1, 2, 3, 4, 5]);

  // 새창 팝업
  const onPopupDetail = (name) => {
    const url = '/LGHV-UIX-APR/LGHV-UIX-APR-0005/:' + name;
    const width = '1280';
    const height = '760';
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      <ApprovalSearch />
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <button type="button" className='btn btn-low btn-md btn-exel'>엑셀</button>
          </div>
        </div>
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
              <th>구역명</th>
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
                  <tr key={i} onClick={() => { onPopupDetail('wrk') }} className='link'>
                    <td>WRK00001</td>
                    <td>작업관리</td>
                    <td>중앙방송</td>
                    <td className='left'>신규 사용자 등록</td>
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
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopupDetail('blk') }} className='link'>
                    <td>BLK00003</td>
                    <td>장애관리</td>
                    <td>중앙방송</td>
                    <td className='left'>신규 사용자 등록</td>
                    <td>서울인프라팀</td>
                    <td>홍길동</td>
                    <td>2023-01-01 02:00</td>
                    <td>2023-01-01 03:00</td>
                    <td>2023-01-01 03:00</td>
                    <td><span className='color-fail'>결재반려</span></td>
                  </tr>
                )
              })
            }
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopupDetail('accUser') }} className='link'>
                    <td>ACC20003</td>
                    <td>사용자관리</td>
                    <td>중앙방송</td>
                    <td className='left'>신규 사용자 등록</td>
                    <td>서울인프라팀</td>
                    <td>홍길동</td>
                    <td>2023-01-01 02:00</td>
                    <td>2023-01-01 03:00</td>
                    <td>2023-01-01 03:00</td>
                    <td><span className='color-ongoing'>결재중</span></td>
                  </tr>
                )
              })
            }
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopupDetail('accEq') }} className='link'>
                    <td>ACC60003</td>
                    <td>장비관리</td>
                    <td>중앙방송</td>
                    <td className='left'>신규 사용자 등록</td>
                    <td>서울인프라팀</td>
                    <td>홍길동</td>
                    <td>2023-01-01 02:00</td>
                    <td>2023-01-01 03:00</td>
                    <td>2023-01-01 03:00</td>
                    <td>등록</td>
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

function ApprovalProcessingDetail() {
  const location = useLocation();
  const current = location.pathname.substring(33);

  console.log(location.pathname);

  return (
    <>
      {
        {
          wrk: <ServicetaskDetail />,
          blk: <DisabilityMngDetail />,
          accUser: <AccUserDetailAPR />,
          accEq: <AccEquipmentDetailAPR />
        }[current]
      }
    </>
  )
}

export { ApprovalProcessing, ApprovalProcessingDetail };
