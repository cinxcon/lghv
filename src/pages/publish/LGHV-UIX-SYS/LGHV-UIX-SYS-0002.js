import { useState } from 'react';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle'
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function SysUserMng() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const pagedata = {
    title: '계정관리',
    subtitle: '사용자관리',
    SubMenu: 'yes'
  }
  // SelectBox
  const optionDuty = [
    { value: '전체', label: '전체' },
    { value: '대표이사', label: '대표이사' },
    { value: '대표이사 직무대행', label: '대표이사 직무대행' }
  ];
  const [duty, setDuty] = useState(optionDuty[0]);
  const optionPosition = [
    { value: '전체', label: '전체' },
    { value: '해당없음', label: '해당없음' },
    { value: '이사', label: '이사' },
    { value: '고문', label: '고문' }
  ];
  const [position, setPosition] = useState(optionPosition[0]);
  const optionUserGubun = [
    { value: '전체', label: '전체' },
    { value: '직원', label: '직원' },
    { value: '임시직', label: '임시직' },
    { value: '계약직', label: '계약직' },
    { value: '기타', label: '기타' }
  ];
  const [userGubun, setUserGubun] = useState(optionUserGubun[0]);
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // 토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };
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
              <caption>검색 영역</caption>
              <colgroup>
                <col style={{ width: '7%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '7%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="userId">사용자ID</label></th>
                  <td>
                    <input type="text" name="userId" id="userId" />
                  </td>
                  <th scope="row"><label htmlFor="userName">이름</label></th>
                  <td>
                    <input type="text" name="userName" id="userName" />
                  </td>
                  <th scope="row"><label htmlFor="email">이메일</label></th>
                  <td>
                    <input type="text" name="email" id="email" />
                  </td>
                  <th scope="row"><label htmlFor="department">부서</label></th>
                  <td>
                    <span className='input-btn-wrap'>
                      <span className='input input_org input-search-front'></span>
                      <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="userGubun">사용자 구분</label></th>
                  <td>
                    <Select defaultValue={optionUserGubun[0]} value={userGubun} onChange={setUserGubun} options={optionUserGubun} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="duty">직책</label></th>
                  <td>
                    <Select defaultValue={optionDuty[0]} value={duty} onChange={setDuty} options={optionDuty} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="position">직급</label></th>
                  <td>
                    <Select defaultValue={optionPosition[0]} value={position} onChange={setPosition} options={optionPosition} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={2}></td>
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
            <button type="button" className="btn btn-md btn-reg" onClick={() => { onPopup('/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002-regist', 'departmentMngModi', 952, 800) }}>등록</button>
          </div>
        </div>
        <table className="table">
          <caption>사용자관리 테이블</caption>
          <colgroup>
            <col span="5" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>사용자 ID</th>
              <th scope='col'>이름</th>
              <th scope='col'>사용자 구분</th>
              <th scope='col'>소속부서</th>
              <th scope='col'>직책</th>
              <th scope='col'>직급</th>
              <th scope='col'>이메일</th>
              <th scope='col'>변경일</th>
            </tr>
          </thead>
          <tbody>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopup('/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002-detail', 'departmentMngDetail', 952, 600) }} className='link'>
                    <td>test02</td>
                    <td>홍길동</td>
                    <td>기본</td>
                    <td>정상</td>
                    <td>팀장</td>
                    <td>과장</td>
                    <td>kinglghv@lghv.co.kr</td>
                    <td>2023-01-01</td>
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

export default SysUserMng;
