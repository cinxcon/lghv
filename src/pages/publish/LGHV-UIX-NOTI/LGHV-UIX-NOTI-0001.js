import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
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
    { id: '1', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', Views: '22', Disp: 'Y' },
    { id: '2', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', Views: '22', Disp: 'Y' },
    { id: '3', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', Views: '22', Disp: 'Y' },
    { id: '4', title: '[공지] 23년 디지털 채널 개편 일정', Dep: '기간망 운영팀', Reg: '홍길동', day: '2023-04-01', Views: '22', Disp: 'Y' }
  ];

  const handleConfirmClick = () => {
    // 템플릿 선택
  }
  const [checkboxStates, setCheckboxStates] = useState(false);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [id]: checked
    }));
  };
  const selectedCount = Object.values(checkboxStates).filter(Boolean).length;

  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  // 날짜 선택

  const [startDate, setStartDate] = useState(null);

  // SelectBox
  const optionDisState = [
    { value: 'Y', label: 'Y' },
    { value: 'N', label: 'N' }
  ];
  const [disState, setDisState] = useState(optionDisState[0]);
  const optionNotify = [
    { value: '공지', label: '공지' },
    { value: '미공지', label: '미공지' }
  ];
  const [notify, setNotify] = useState(optionNotify[0]);
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupWidth = width;
    const popupHeight = height;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      {/* 검색 영역 */}
      <div className='content-section'>
        <div className='search-wrap'>
          <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
          </div>
          <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
            <table className='search'>
              <caption>table caption</caption>
              <colgroup>
                <col span={10} style={{ width: '10%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="display">노출 여부</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionDisState[0]} value={disState} onChange={setDisState} options={optionDisState} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="userId">공지여부</label></th>
                  <td colSpan={2}>
                  <Select defaultValue={optionNotify[0]} value={notify} onChange={setNotify} options={optionNotify} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="org">등록 부서</label></th>
                  <td colSpan={3}>
                    <span className='input-btn-wrap'>
                        <span className='input input_org input-search-front'></span>
                        <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="register">등록자</label></th>
                  <td colSpan={2}>
                  <input type="text" name="registrant" id="registrant" placeholder='등록자' value='' />
                  </td>
                  <th scope="row"><label htmlFor="title">제목</label></th>
                  <td colSpan={2} className='bd-right-none'>
                    <input type="text" name="subject" id="subjec" placeholder='제목' value='' />
                  </td>
                  <th scope="row"><label htmlFor="date">등록 일자</label></th>
                  <td colSpan={3}><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></td>
                </tr>
              </tbody>
            </table>
            <div className="btn-wrap right">
              <button className='btn btn-black btn-search-txt'>검색</button>
            </div>
          </div>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <span className='cheked-item'><em>{ selectedCount }</em>개 선택</span>
            <button type="button" className="btn btn-md btn-del ml10" >등록</button>
            <button type="button" className="btn btn-md btn-reg" >등록</button>
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
                    <th></th>
                    <th>번호</th>
                    <th>제목</th>
                    <th>등록부서</th>
                    <th>등록자</th>
                    <th>등록일자</th>
                    <th>조회수</th>
                    <th>노출 여부</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                <tr key={row.id} onClick={handleConfirmClick} className='link'>
                    <td>
                        <input type="checkbox" name={`service ${index}`} id={`ser_${index}`} onChange={handleCheckboxChange} />
                        <label htmlFor={`ser_${index}`} style={{ margin: '0' }}></label>
                    </td>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.Dep}</td>
                    <td>{row.Reg}</td>
                    <td>{row.day}</td>
                    <td>{row.Views}</td>
                    <td>{row.Disp}</td>
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
