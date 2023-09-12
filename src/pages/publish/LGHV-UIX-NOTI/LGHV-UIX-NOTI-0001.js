import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function NoticeList() {
  const pagedata = {
    title: '공지사항',
    subtitle: '공지사항 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const data = [
    { id: 'T111111121', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', sday: '2023-04-01', eday: '2023-05-01' },
    { id: 'T111111122', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', sday: '2023-04-01', eday: '2023-05-01' },
    { id: 'T111111123', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', sday: '2023-04-01', eday: '2023-05-01' },
    { id: 'T111111124', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', sday: '2023-04-01', eday: '2023-05-01' }
  ];

  const [checkboxStates, setCheckboxStates] = useState(false);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [id]: checked
    }));
  };
  const selectedCount = Object.values(checkboxStates).filter(Boolean).length;
  const onPopup = (url) => {
    const popupWidth = 1280;
    const popupHeight = 800;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, 'Detail', 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      {/* 검색 영역 */}
      <div className='content-section'>
        <div className='search-wrap type-s'>
            <table className='search'>
                <caption>템플릿 리스트</caption>
                  <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '95%' }} />
                  </colgroup>
                <tbody>
                  <tr>
                      <th scope="row"><label htmlFor="title">제목</label></th>
                      <td>
                      <span className='input-btn-wrap'>
                          <input type="text" name="title" id="title" className='input' placeholder='제목' />
                          <button className='btn btn-low btn-ref ml15'>초기화</button>
                          <button className='btn btn-black btn-search-txt'>검색</button>
                      </span>
                      </td>
                  </tr>
                </tbody>
            </table>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <span className='cheked-item'><em>{ selectedCount }</em>개 선택</span>
            <button type="button" className="btn btn-md btn-del ml10" >삭제</button>
          </div>
        </div>
        <table className="popup-table center">
                <caption>공지사항 정보 영역</caption>
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                <tr>
                    <th rowSpan={2}><input type="checkbox" name='all_check' id='all_check' onChange={handleCheckboxChange} />
                        <label htmlFor='all_check' className="invisible">전체 선택</label></th>
                    <th rowSpan={2}>번호</th>
                    <th rowSpan={2}>제목</th>
                    <th rowSpan={2}>등록부서</th>
                    <th rowSpan={2}>등록자</th>
                    <th rowSpan={2}>등록일자</th>
                    <th colSpan={2}>게시일시</th>
                </tr>
                <tr>
                  <th>시작일시</th>
                  <th>종료일시</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                <tr key={row.id} className='link'>
                    <td>
                        <input type="checkbox" name={`service ${index}`} id={`ser_${index}`} onChange={handleCheckboxChange} />
                        <label htmlFor={`ser_${index}`} style={{ margin: '0' }} className="invisible">선택</label>
                    </td>
                    <td>{row.id}</td>
                    <td onClick={() => { onPopup('/LGHV-UIX-NOTI/LGHV-UIX-NOTI-0001-Detail') }} >{row.title}</td>
                    <td>{row.Dep}</td>
                    <td>{row.Reg}</td>
                    <td>{row.day}</td>
                    <td>{row.sday}</td>
                    <td>{row.eday}</td>
                </tr>))}
                </tbody>
            </table>
        <ResultNoData />
        <ResultListPaging />
      </div>
    </>
  )
}

export default NoticeList;
