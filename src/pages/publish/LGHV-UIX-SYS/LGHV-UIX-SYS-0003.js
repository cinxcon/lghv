import { useState } from 'react';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle'
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function SysUnsubscribeUserMng() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  const pagedata = {
    title: '계정관리',
    subtitle: '수신거부 사용자 관리',
    SubMenu: 'yes'
  }
  // SelectBox
  const optionGubun = [
    { value: '선택', label: '선택' },
    { value: '사용자명 ', label: '사용자명 ' },
    { value: '사용자ID', label: '사용자ID' },
    { value: '부서명', label: '부서명' },
    { value: '부서', label: '부서' }
  ];
  const [gubun, setGubun] = useState(optionGubun[0]);
  return (
    <>
      <ContentTitle data={pagedata} />
      {/* 검색 영역 */}
      <div className='content-section'>
        <div className='search-wrap type-s'>
          <table className='search'>
            <caption>검색</caption>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '65%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <td>
                  <input type="text" id="detailAddress" name="detailAddress" />
                </td>
                <td className="right">
                  <span className='btn-wrap'>
                    <button className='btn btn-black btn-search-txt'>검색</button>
                    <button className='btn'>등록</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 사용자 선택 영역 */}
      <div className='content-section'>
        <h3>사용자 선택</h3>
        <div className='search-wrap type-s'>
          <table className='search'>
            <caption>검색</caption>
            <colgroup>
              <col style={{ width: '3%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '70%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>검색</th>
                <td>
                  <Select defaultValue={optionGubun[0]} value={gubun} onChange={setGubun} options={optionGubun} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <td>
                  <input type="text" id="detailAddress" name="detailAddress" />
                </td>
                <td className="right">
                  <span className='btn-wrap'>
                    <button className='btn btn-black btn-search-txt'>검색</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt16'>
          <div className='btn-wrap right'>
            <span className='cheked-item'><em>0</em>개 선택</span>
            <button type="button" className='btn btn-md ml10'>선택등록</button>
            <button type="button" className='btn btn-low btn-md btn-del'>삭제</button>
          </div>
        </div>
        <table className="table mt8">
          <caption>사용자 선택 테이블</caption>
          <colgroup>
            <col span="8" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>
                <input type="checkbox" name="check" />
                <label htmlFor="check" style={{ margin: '0' }}></label>
              </th>
              <th scope='col'>사용자명</th>
              <th scope='col'>사용자ID</th>
              <th scope='col'>부서명</th>
              <th scope='col'>부서ID</th>
              <th scope='col'>전화번호</th>
              <th scope='col'>이메일</th>
              <th scope='col'>계정상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
                <label style={{ margin: '0' }}></label>
              </td>
              <td>홍길동</td>
              <td>0025111</td>
              <td>동부판매추진팀</td>
              <td>N00G00215</td>
              <td>010-4444-2222</td>
              <td>test@lghv.net</td>
              <td><span className='color-success'>계정활성</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <span className='cheked-item'><em>1</em>개 선택</span>
            <button type="button" className='btn btn-low btn-md btn-del ml10'>삭제</button>
          </div>
        </div>
        <table className="table">
          <caption>수신거부 사용자관리 테이블</caption>
          <colgroup>
            <col span="9" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>
                <input type="checkbox" name="checkAll" id="checkAll" />
                <label htmlFor="checkAll" style={{ margin: '0' }}></label>
              </th>
              <th scope='col'>사용자명</th>
              <th scope='col'>사용자ID</th>
              <th scope='col'>부서명</th>
              <th scope='col'>부서ID</th>
              <th scope='col'>전화번호</th>
              <th scope='col'>이메일</th>
              <th scope='col'>계정상태</th>
              <th scope='col'>거부등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr className='checked'>
              <td>
                <input type="checkbox" name="check1" id="check1" checked />
                <label htmlFor="check1" style={{ margin: '0' }}></label>
              </td>
              <td>홍길동</td>
              <td>0025111</td>
              <td>동부판매추진팀</td>
              <td>N00G00215</td>
              <td>010-4444-2222</td>
              <td>test@lghv.net</td>
              <td><span className='color-disable'>비활성</span></td>
              <td>2023-09-11 14:24:30</td>
            </tr>
            {
              resultList.map(function(a, i) {
                return (
                <tr key={i}>
                  <td>
                    <input type="checkbox" name="check2" id="check2" />
                    <label htmlFor="check2" style={{ margin: '0' }}></label>
                  </td>
                  <td>홍길동</td>
                  <td>0025111</td>
                  <td>동부판매추진팀</td>
                  <td>N00G00215</td>
                  <td>010-4444-2222</td>
                  <td>test@lghv.net</td>
                  <td><span className='color-success'>계정활성</span></td>
                  <td>2023-09-11 14:24:30</td>
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

export default SysUnsubscribeUserMng;
