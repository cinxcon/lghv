/* eslint-disable */
import { useState } from 'react';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle'
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';
import { Alert } from '../popup/Popup';

function SysUnsubscribeUserMng() {
  const pagedata = {
    title: '계정관리',
    subtitle: '수신거부 사용자 관리',
    SubMenu: 'yes'
  }
  const [userList] = useState([1, 2]);
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const [success] = useState([<span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>, <span className='color-success'>계정활성</span>, <span className='color-disable'>비활성</span>]);
  const [del, setDel] = useState(false);
  const [add, setAdd] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [checkedCount, setCheckedCount] = useState(0);
  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode.parentNode, target.value, target.checked);
    console.log(checkedItems)
    console.log(isChecked)
    console.log(checkedItems.size)
  };
  const checkedItemHandler = (row, i, isChecked) => {
    if (isChecked) {
      checkedItems.add(i);
      setCheckedItems(checkedItems);
      setCheckedCount(checkedItems.size);
      row.classList.add('checked');
    } else if (!isChecked && checkedItems.has(i)) {
      checkedItems.delete(i);
      setCheckedItems(checkedItems);
      setCheckedCount(checkedItems.size);
      row.classList.remove('checked');
    }
    return checkedItems;
  }
  const [isChecked2, setIsChecked2] = useState(false);
  const [checkedItems2, setCheckedItems2] = useState(new Set());
  const [checkedCount2, setCheckedCount2] = useState(0);
  const checkHandler2 = ({ target }) => {
    setIsChecked2(!isChecked2);
    checkedItemHandler2(target.parentNode.parentNode, target.value, target.checked);
    console.log(checkedItems2)
    console.log(isChecked2)
    console.log(checkedItems2.size)
  };
  const checkedItemHandler2 = (row, j, isChecked2) => {
    if (isChecked2) {
      checkedItems2.add(j);
      setCheckedItems2(checkedItems2);
      setCheckedCount2(checkedItems2.size);
      row.classList.add('checked');
    } else if (!isChecked2 && checkedItems2.has(j)) {
      checkedItems2.delete(j);
      setCheckedItems2(checkedItems2);
      setCheckedCount2(checkedItems2.size);
      row.classList.remove('checked');
    }
    return checkedItems2;
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
            <span className='cheked-item'><b>{checkedCount2}</b>개 선택</span>
            <button type="button" className='btn btn-md ml10' onClick={() => { setAdd(true) }}>선택등록</button>
            <button type="button" className='btn btn-low btn-md btn-del'>삭제</button>
          </div>
          <Alert open={add} close={() => { setAdd(false) }}>
            <div>수신거부 사용자를 등록하시겠습니까?</div>
          </Alert>
        </div>
        <table className="table mt8">
          <caption>사용자 선택 테이블</caption>
          <colgroup>
            <col style={{ width: '4%' }} />
            <col span="7" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>
                <input type="checkbox" name="checkAll" id='checkAll' />
                <label htmlFor='checkAll' className='invisible'></label>
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
            {
              userList.map(function(a, i) {
                return (
                  <tr key={`user${i}`}>
                    <td>
                      <input type="checkbox" name={`user${i}`} id={`user${i}`} value={`user${i}`} onChange={(e) => checkHandler2(e)} />
                      <label htmlFor={`user${i}`} className='invisible'>선택</label>
                    </td>
                    <td>홍길동</td>
                    <td>0025111</td>
                    <td>동부판매추진팀</td>
                    <td>N00G00215</td>
                    <td>010-4444-2222</td>
                    <td>test@lghv.net</td>
                    <td><span className='color-success'>계정활성</span></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <span className='cheked-item'><b>{checkedCount}</b>개 선택</span>
            <button type="button" className='btn btn-low btn-md btn-del ml10' onClick={() => { setDel(true) }}>삭제</button>
          </div>
          <Alert open={del} close={() => { setDel(false) }}>
            <div>수신거부 사용자를 삭제하시겠습니까?</div>
          </Alert>
        </div>
        <table className="table">
          <caption>수신거부 사용자관리 테이블</caption>
          <colgroup>
            <col style={{ width: '4%' }} />
            <col span="8" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>
                <input type="checkbox" name="check1All" id="check1All" />
                <label htmlFor="check1All" className='invisible'></label>
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
            {
              resultList.map(function(a, i) {
                return (
                <tr key={i}>
                  <td className='center'>
                    <input type="checkbox" name={i} id={i} value={i} onChange={(e) => checkHandler(e)} />
                    <label htmlFor={i} className='invisible'>선택</label>
                  </td>
                  <td>홍길동</td>
                  <td>0025111</td>
                  <td>동부판매추진팀</td>
                  <td>N00G00215</td>
                  <td>010-4444-2222</td>
                  <td>test@lghv.net</td>
                  <td><span className='color-success'>{success[i]}</span></td>
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
