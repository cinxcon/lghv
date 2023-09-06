import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const handleRegClick = () => navigate('/LGHV-UIX-ACC/LGHV-UIX-ACC-0007');
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
  // 날짜 선택
  const [selectedStday, setSelectedStday] = useState('st_user');
  const handleStdayChange = (event) => {
    setSelectedStday(event.target.value);
    const currentDate = new Date();
    // 오늘 날짜
    if (event.target.value === 'st_user') {
      setStartDate(null);
      setEndDate(null);
    }
    // 오늘 날짜
    if (event.target.value === 'st_day') {
      setStartDate(new Date());
      setEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'st_week') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate(weekAgo);
      setEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'st_month') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate(oneMonthAgo);
      setEndDate(new Date());
    }
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // input clear
  const [userName, setUserNameValue] = useState('');
  const onUserNameInput = (e) => setUserNameValue(e.target.value);
  const onUserNameClear = () => {
    setUserNameValue('');
  }
  const [userIdValue, setUserIdValue] = useState('');
  const onUserIdInput = (e) => setUserIdValue(e.target.value);
  const onUserIdClear = () => {
    setUserIdValue('');
  }
  const [orgValue, setOrgValue] = useState('');
  const onOrgInput = (e) => setOrgValue(e.target.value);
  const onOrgClear = () => {
    setOrgValue('');
  }
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
              <caption>table caption</caption>
              <colgroup>
                <col span={10} style={{ width: '10%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="userName">이름</label></th>
                  <td colSpan={2}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="userNamet" id="userName" placeholder='이름' value={userName} onInput={onUserNameInput} />
                      <button type="button" className='clear-search-button' onClick={onUserNameClear}>삭제</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="userId">아이디</label></th>
                  <td colSpan={2}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="userId" id="userId" placeholder='아이디' value={userIdValue} onInput={onUserIdInput} />
                      <button type="button" className='clear-search-button' onClick={onUserIdClear}>삭제</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="org">조직</label></th>
                  <td colSpan={3}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="org" id="org" placeholder='조직' value={orgValue} onInput={onOrgInput} />
                      <button type="button" className='clear-search-button' onClick={onOrgClear}>삭제</button>
                    </span>
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
                  <th scope="row"><label htmlFor="usedate">사용기간</label></th>
                  <td colSpan={5} className='bg-right-none'>
                    <div className='flex-wrap between'>
                      <span className='datepickers-wrap'>
                        <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                        ~
                        <span><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} startDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      </span>
                      <span className='radiobtn-wrap'>
                        <fieldset>
                          <legend>날짜 선택</legend>
                            <input type='radio' name='start-date' id='st_day' value="st_day" checked={selectedStday === 'st_day'} onChange={handleStdayChange}/>
                            <label htmlFor='st_day' className='type-btn'>하루</label>
                            <input type='radio' name='start-date' id='st_week' value="st_week" checked={selectedStday === 'st_week'} onChange={handleStdayChange}/>
                            <label htmlFor='st_week' className='type-btn'>일주일</label>
                            <input type='radio' name='start-date' id='st_month' value="st_month" checked={selectedStday === 'st_month'} onChange={handleStdayChange}/>
                            <label htmlFor='st_month' className='type-btn'>한달</label>
                            <input type='radio' name='start-date' id='st_user' value="st_user" checked={selectedStday === 'st_user'} onChange={handleStdayChange}/>
                            <label htmlFor='st_user' className='type-btn'>사용자 지정</label>
                          </fieldset>
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
          <div className='btn-wrap'>
            <button type="button" className="btn btn-md btn-reg" onClick={ handleRegClick }>등록</button>
          </div>
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
            <tr onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-Detail', 'detail', '1280', '760') }} className='link'>
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
                  <tr key={i} onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0001-Detail', 'detail', '1280', '760') }} className='link'>
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
