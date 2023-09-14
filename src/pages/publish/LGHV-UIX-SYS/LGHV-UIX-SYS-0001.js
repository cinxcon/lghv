import { useState } from 'react';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle'
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function SysDepartmentMng() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const pagedata = {
    title: '계정관리',
    subtitle: '부서관리',
    SubMenu: 'yes'
  }
  // SelectBox
  const optionDepGubun = [
    { value: '기타', label: '기타' },
    { value: '고객센터', label: '고객센터' },
    { value: '부서-팀', label: '부서-팀' }
  ];
  const [depGubun, setDepGubun] = useState(optionDepGubun[0]);
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      {/* 검색 영역 */}
      <div className='content-section'>
        <div className='search-wrap type-s'>
          <table className='search'>
            <caption>검색</caption>
            <colgroup>
              <col style={{ width: '6%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '6%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '6%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '6%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="depName">부서명</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor="address">주소</label></th>
                <td>
                  <input type="text" id="address" name="address" />
                </td>
                <th scope="row"><label htmlFor="depGubun">부서구분</label></th>
                <td>
                  <Select defaultValue={optionDepGubun[0]} value={depGubun} onChange={setDepGubun} options={optionDepGubun} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <th scope="row"><label htmlFor="detailAddress">상세주소</label></th>
                <td>
                  <input type="text" id="detailAddress" name="detailAddress" />
                </td>
                <td className="right">
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
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
        </div>
        <table className="table">
          <caption>부서관리 테이블</caption>
          <colgroup>
            <col span="5" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>부서</th>
              <th scope='col'>부서경로</th>
              <th scope='col'>부서</th>
              <th scope='col'>부서구분</th>
              <th scope='col'>변경일</th>
            </tr>
          </thead>
          <tbody>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopup('/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001-detail', 'departmentMngDetail', 952, 520) }} className='link'>
                    <td>경영지원팀</td>
                    <td>경영지원팀</td>
                    <td>C10202034</td>
                    <td>부서-팀</td>
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

export default SysDepartmentMng;
