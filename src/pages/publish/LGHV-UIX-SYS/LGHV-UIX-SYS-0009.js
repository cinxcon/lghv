import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';
import Select from 'react-select';

function SysSendCustomTxtMsgLog() {
  const pagedata = {
    title: '로그 관리',
    subtitle: '고객문자 발송내역',
    SubMenu: 'yes'
  }
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);

  //  토글
  const [isToggled, setToggled] = useState(false);

  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  const optionsReceptionStatus = [
    { value: 'all', label: '전체' },
    { value: '발송', label: '발송' },
    { value: '미발송', label: '미발송' }
  ];
  const optionsSearchDate = [
    { value: 'all', label: '전체' },
    { value: '발송일', label: '발송일' }
  ];
  const optionsArea = [
    { value: 'all', label: '전체' }
  ];
  const optionsWorkType = [
    { value: 'all', label: '전체' }
  ];

  const [receptionStatus, setReceptionStatus] = useState(optionsReceptionStatus[0]);
  const [searchDate, setSearchDate] = useState(optionsSearchDate[0]);
  const [area, setArea] = useState(optionsArea[0]);
  const [workType, setWorkType] = useState(optionsWorkType[0]);
  // 윈도우 팝업
  const toDetail = '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0009-Detail'

  const onPopup = () => {
    const url = toDetail;
    const popupWidth = 1280;
    const popupHeight = 800;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, '_blank', 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
      <div className='search-wrap'>
        <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
        </div>
        <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
           <table className='search'>
            <caption>로그 검색 정보</caption>
              <colgroup>
                <col span={10} style={{ width: '10%' }} />
              </colgroup>
            <tbody>
              <tr>
                  <th scope="row"><label htmlFor="title">제목</label></th>
                  <td colSpan={2}>
                    <input type="text" name="title" id="title" placeholder='ID' />
                  </td>
                  <th scope="row"><label htmlFor="regNumber">등록번호</label></th>
                  <td colSpan={3}>
                    <input type="text" name="regNumber" id="regNumber" placeholder='이름' />
                  </td>
                  <th scope="row"><label htmlFor="registrant">등록자</label></th>
                  <td colSpan={2}>
                    <input type="text" name="registrant" id="registrant" placeholder='' />
                  </td>
              </tr>
              <tr>
                  <th scope="row"><label htmlFor="registration_department">등록부서</label></th>
                  <td colSpan={2}>
                    <span className='input-btn-wrap'>
                      <span className='input input_org input-search-front'></span>
                      <button className='btn btn-black btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="receiverMail">검색 일자</label></th>
                  <td colSpan={3}>
                    <div className='flex-wrap between'>
                    <Select defaultValue={optionsSearchDate[0]} value={searchDate} onChange={setSearchDate} options={optionsSearchDate} className='react-select-container w40' classNamePrefix="react-select" />
                    <span className='datepickers-wrap ml10'>
                      <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      ~
                      <span><DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    </span>
                  </div>
                  </td>
                  <th><label htmlFor="receptionStatus">발송 여부</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionsReceptionStatus[0]} value={receptionStatus} onChange={setReceptionStatus} options={optionsReceptionStatus} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                </tr>
              <tr>
                <th scope="row"><label htmlFor="area">구역명</label></th>
                  <td colSpan={2}>
                  <Select defaultValue={optionsArea[0]} value={area} onChange={setArea} options={optionsArea} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                <th scope="row"><label htmlFor="regdate">작업 구분</label></th>
                <td colSpan={3}> <Select defaultValue={optionsWorkType[0]} value={workType} onChange={setWorkType} options={optionsWorkType} className='react-select-container' classNamePrefix="react-select" /></td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
          <div className='btn-wrap right'>
              <button className='btn btn-low btn-ref'>초기화</button>
              <button className='btn btn-black btn-search-txt'>검색</button>
          </div>
        </div>
      </div>
    </div>
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-md btn-exel'>엑셀</button>
        </div>
      </div>
      {/* 목록 영역 */}
        <table className="table">
          <caption>작업 목록 리스트</caption>
          <colgroup>
            <col span="12" />
          </colgroup>
          <thead>
          <tr>
            <th>발송 일시</th>
            <th>발송 상태</th>
            <th>대상자 수</th>
            <th>등록 번호</th>
            <th>등록 부서</th>
            <th>등록자</th>
            <th>구역명</th>
            <th>작업 구분</th>
            <th>제목</th>
            <th>작업 등록일</th>
            <th>작업 종료일</th>
            <th>상태</th>
          </tr>
          </thead>
          <tbody>
            <tr className="link" onClick={onPopup}>
              <td>2023-01-01 01:00:30</td>
              <td>발송</td>
              <td>10</td>
              <td>T050</td>
              <td>강원 인프라팀</td>
              <td>홍길동</td>
              <td>영동방송</td>
              <td>인프라팀 전결</td>
              <td>제목</td>
              <td>2023-01-01 01:00:30</td>
              <td>2023-01-01 01:00:30</td>
              <td>정상 종료</td>
            </tr>
            <tr className="link" onClick={onPopup}>
              <td>2023-01-01 01:00:30</td>
              <td>발송</td>
              <td>10</td>
              <td>T050</td>
              <td>강원 인프라팀</td>
              <td>홍길동</td>
              <td>영동방송</td>
              <td>인프라팀 전결</td>
              <td>제목</td>
              <td>2023-01-01 01:00:30</td>
              <td>2023-01-01 01:00:30</td>
              <td>정상 종료</td>
            </tr>
            <tr className="link" onClick={onPopup}>
              <td>2023-01-01 01:00:30</td>
              <td>발송</td>
              <td>10</td>
              <td>T050</td>
              <td>강원 인프라팀</td>
              <td>홍길동</td>
              <td>영동방송</td>
              <td>인프라팀 전결</td>
              <td>제목</td>
              <td>2023-01-01 01:00:30</td>
              <td>2023-01-01 01:00:30</td>
              <td>정상 종료</td>
            </tr>
            <tr className="link" onClick={onPopup}>
              <td>2023-01-01 01:00:30</td>
              <td>발송</td>
              <td>10</td>
              <td>T050</td>
              <td>강원 인프라팀</td>
              <td>홍길동</td>
              <td>영동방송</td>
              <td>인프라팀 전결</td>
              <td>제목</td>
              <td>2023-01-01 01:00:30</td>
              <td>2023-01-01 01:00:30</td>
              <td>정상 종료</td>
            </tr>
          </tbody>
        </table>
      <ResultNoData />
      <ResultListPaging />
    </div>
    </>
  )
}
export default SysSendCustomTxtMsgLog;
