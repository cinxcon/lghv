import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Popup } from '../popup/Popup';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';
import ServicetaskDetail from '../LGHV-UIX-WRK/LGHV-UIX-WRK-0004';
import DisabilityMngDetail from '../LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail';
import AccUserDetailAPR from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0001-DetailAPR';
import AccEquipmentDetailAPR from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0006-DetailAPR';

function ApprovalOnTimeProcess() {
  const pagedata = {
    title: 'OnTime Process',
    subtitle: 'OnTime Process 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  const [resultList] = useState([1, 2, 3, 4, 5]);

  // 새창 팝업
  const onPopupDetail = (name) => {
    const url = '/LGHV-UIX-APR/LGHV-UIX-APR-0006/:' + name;
    const width = '1280';
    const height = '760';
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }

  const [refuse, setRefuse] = useState(false);
  const [approve, setApprove] = useState(false);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <div className='search-wrap type-s'>
          <table className='search'>
            <caption>OnTime Process 검색영역</caption>
            <colgroup>
              <col style={{ width: '7%' }} />
              <col span={2} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="type">처리대상</label></th>
                <td>
                  <fieldset>
                    <legend>구분</legend>
                    <input type="checkbox" name="division" id="div_1" value="" checked />
                    <label htmlFor="div_1">검토</label>
                    <input type="checkbox" name="division" id="div_2" value="" checked />
                    <label htmlFor="div_2">결재</label>
                  </fieldset>
                </td>
                <td className='right'>
                  <span className='btn-wrap'>
                    <button className='btn btn-low btn-ref'>초기화</button>
                    <button className='btn btn-black btn-search-txt'>검색</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <button type="button" className='btn btn-low btn-md btn-exel'>엑셀</button>
            <button type="button" className='btn btn-md btn-success' onClick={() => { setApprove(true) }}>승인</button>
            <button type="button" className='btn btn-md btn-refuse' onClick={() => { setRefuse(true) }}>반려</button>
          </div>
          <Popup open={refuse} close={() => { setRefuse(false) }} header="[반려] 의견" footer={ <PopupButtons close={() => { setRefuse(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={approve} close={() => { setApprove(false) }} header="[승인] 의견" footer={ <PopupButtons close={() => { setApprove(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
        </div>
        <table className="table">
          <caption>목록: 등록번호, 작업구분, SO, 제목, 등록부서, 등록자, 등록일, 종료일, 완료예정일, 상태</caption>
          <colgroup>
            <col style={{ width: '3%' }} />
            <col span={10} />
          </colgroup>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="checkAll" id="checkAll" />
                <label htmlFor="checkAll" className='invisible'></label>
              </th>
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
                  <tr key={i} onClick={() => { onPopupDetail('wrk') }} className='link'>
                    <td onClick={ handleStopPropagation }>
                      <input type="checkbox" name={`check0${i}`} id={`check0${i}`} />
                      <label htmlFor={`check0${i}`} className='invisible'></label>
                    </td>
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
                    <td onClick={ handleStopPropagation }>
                      <input type="checkbox" name={`check1${i}`} id={`check1${i}`} />
                      <label htmlFor={`check1${i}`} className='invisible'></label>
                    </td>
                    <td>BLK00003</td>
                    <td>장애관리</td>
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
                  <tr key={i} onClick={() => { onPopupDetail('accUser') }} className='link'>
                    <td onClick={ handleStopPropagation }>
                      <input type="checkbox" name={`check2${i}`} id={`check2${i}`} />
                      <label htmlFor={`check2${i}`} className='invisible'></label>
                    </td>
                    <td>ACC20003</td>
                    <td>사용자관리</td>
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
                  <tr key={i} onClick={() => { onPopupDetail('accEq') }} className='link'>
                    <td onClick={ handleStopPropagation }>
                      <input type="checkbox" name={`check3${i}`} id={`check3${i}`} />
                      <label htmlFor={`check3${i}`} className='invisible'></label>
                    </td>
                    <td>ACC60003</td>
                    <td>장비관리</td>
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
          </tbody>
        </table>
        <ResultNoData />
        <ResultListPaging />
      </div>
    </>
  )
}

function ApprovalOnTimeProcessDetail() {
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

function PopupButtons(props) {
  return (
    <div className="btn-group">
      <button className="btn btn-lg btn-low" onClick={props.close}>취소</button>
      <button className="btn btn-lg btn-primary">확인</button>
    </div>
  )
}

export { ApprovalOnTimeProcess, ApprovalOnTimeProcessDetail };
