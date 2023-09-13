import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function AccUser() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  const pagedata = {
    title: '접근제어',
    subtitle: '사용자 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());
  // SelectBox
  const optionAccState = [
    { value: '정상', label: '정상' },
    { value: '잠금', label: '잠금' }
  ];
  const [accState, setAccState] = useState(optionAccState[0]);
  const optionUserGroup = [
    { value: '그룹1', label: '그룹1' },
    { value: '그룹2', label: '그룹2' }
  ];
  const [userGroup, setUserGroup] = useState(optionUserGroup[0]);

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
              <caption>검색: 이름, 아이디, 조직, 계정상태, 그룹, 사용기간</caption>
              <colgroup>
                <col style={{ width: '7%' }} />
                <col span={2} style={{ width: '14%' }} />
                <col style={{ width: '7%' }} />
                <col span={2} style={{ width: '14%' }} />
                <col style={{ width: '6%' }} />
                <col span={3} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="userName">이름</label></th>
                  <td colSpan={2}>
                    <input type="text" name="userNamet" id="userName" />
                  </td>
                  <th scope="row"><label htmlFor="userId">아이디</label></th>
                  <td colSpan={2}>
                    <input type="text" name="userId" id="userId" />
                  </td>
                  <th scope="row"><label htmlFor="org">조직</label></th>
                  <td colSpan={3}>
                    <input type="text" name="org" id="org" />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="accstate">계정상태</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionAccState[0]} value={accState} onChange={setAccState} options={optionAccState} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="userGroup ">그룹</label></th>
                  <td colSpan={2} className='bd-right-none'>
                    <Select defaultValue={optionUserGroup[0]} value={userGroup} onChange={setUserGroup} options={optionUserGroup} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="usedate">사용기간 시작일</label></th>
                  <td colSpan={2} className='bg-right-none'>
                    <div className='flex-wrap between'>
                      <span className='datepickers-wrap'>
                        <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                        ~
                        <span><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} startDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      </span>
                    </div>
                  </td>
                  <th scope="row"><label htmlFor="usedate">사용기간 종료일</label></th>
                  <td colSpan={2} className='bg-right-none'>
                    <div className='flex-wrap between'>
                      <span className='datepickers-wrap'>
                        <span><DatePicker locale={ko} selected={startDate2} onChange={(date) => setStartDate2(date)} startDate2={startDate2} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                        ~
                        <span><DatePicker locale={ko} selected={endDate2} onChange={(date) => setEndDate2(date)} startDate={endDate2} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      </span>
                    </div>
                  </td>
                  <td colSpan={4}></td>
                </tr>
              </tbody>
            </table>
            <div className="btn-wrap right">
              <button className='btn btn-low btn-ref'>초기화</button>
              <button className='btn btn-black btn-search-txt'>검색</button>
            </div>
          </div>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
        </div>
        <table className="table">
          <caption>table caption</caption>
          <colgroup>
            <col span="9" />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2} scope='col'>아이디</th>
              <th rowSpan={2} scope='col'>이름</th>
              <th rowSpan={2} scope='col'>조직</th>
              <th rowSpan={2} scope='col'>직함</th>
              <th rowSpan={2} scope='col'>그룹</th>
              <th rowSpan={2} scope='col'>이메일</th>
              <th colSpan={2} scope='col'>사용기간</th>
              <th rowSpan={2} scope='col'>상태</th>
            </tr>
            <tr>
              <th scope='col'>시작</th>
              <th scope='col' className='bd-right'>종료</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-Detail', 'detail', '1280', '420') }} className='link'>
              <td>S102020</td>
              <td>홍길동</td>
              <td>기간망운영팀</td>
              <td>과장</td>
              <td>그룹1</td>
              <td>test01@lghv.co.kr</td>
              <td>2023-01-01</td>
              <td>2023-01-01</td>
              <td><span className='color-success'>정상</span></td>
            </tr>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-Detail', 'detail', '1280', '420') }} className='link'>
                    <td>S102020</td>
                    <td>홍길동</td>
                    <td>기간망운영팀</td>
                    <td>과장</td>
                    <td>그룹1</td>
                    <td>test01@lghv.co.kr</td>
                    <td>2023-01-01</td>
                    <td>2023-01-01</td>
                    <td><span className='color-disable'>잠금</span></td>
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

export default AccUser;
