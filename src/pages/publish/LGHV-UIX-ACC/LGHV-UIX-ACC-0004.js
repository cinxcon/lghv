/* eslint-disable */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

// LGHV-UIX-ACC-0004 사용자(사용자 및 그룹) 조회
function AccUserList(props) {
  // const location = useLocation();
  // const { data, toDetail, currentStatus } = props;

  // const pathData = data;
  // useEffect(() => {
  //   pathData.isDetail = 'yes';
  // }, [pathData]);

  // const pagedata = {
  //   title: '결재관리',
  //   subtitle: '결재 대기함',
  //   SubMenu: 'yes',
  //   isDetail: 'yes'
  // }

  // input clear
  const [useridValue, setUseridValue] = useState('');
  const onUseridInput = (e) => setUseridValue(e.target.value);
  const onUseridClear = () => {
    setUseridValue('');
  }
  const [usernameValue, setUsernameValue] = useState('');
  const onUsernameInput = (e) => setUsernameValue(e.target.value);
  const onUsernameClear = () => {
    setUsernameValue('');
  }

  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  return (
    <>
      {/* <ContentTitle data={pagedata} /> */}
      사용자(사용자 및 그룹) 조회
      {/* <div className='content-section'>
        <div className='search-wrap'>
          <table className='search'>
            <caption>아이디, 이름, 상태 항목의 검색 영역</caption>
            <colgroup>
              <col style={{ width: '7%' }} />
              <col style={{ width: '25%' }} />
              <col style={{ width: '7%' }} />
              <col style={{ width: '25%' }} />
              <col style={{ width: '7%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="userid">아이디</label></th>
                <td>
                  <span className='input-clear-wrap'>
                    <input type="text" name="userid" id="userid" placeholder='아이디' value={useridValue} onInput={onUseridInput} />
                    <button type="button" className='clear-search-button' onClick={onUseridClear}>삭제</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor="username">이름</label></th>
                <td>
                  <span className='input-clear-wrap'>
                    <input type="text" name="username" id="username" placeholder='이름' value={usernameValue} onInput={onUsernameInput} />
                    <button type="button" className='clear-search-button' onClick={onUsernameClear}>삭제</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor="userstate">상태</label></th>
                <td>
                  <span>
                    <select name="userstate" id="userstate">
                      <option value="a">정상</option>
                      <option value="b">계정잠금</option>
                      <option value="c">기간만료</option>
                      <option value="c">신규신청</option>
                      <option value="c">반려</option>
                    </select>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="search-btn-wrap">
          <button className='btn btn-low'>초기화</button>
          <button className='btn btn-black ml10'>검색</button>
        </div>
      </div>
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <Link to={toUserRegist} state={pathData} className='btn btn-primary'>사용자 등록</Link>
            <Link className='btn btn-primary'>사용자 등록</Link>
          </div>
        </div> *}
        {/* 목록 영역 */}
        {/* <table className="table result">
          <caption>사용자 목록: 아아디, 이름, 상태, 조직, 직함, 이메일 정보</caption>
          <colgroup>
            <col span="6" />
          </colgroup>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>상태</th>
              <th>조직</th>
              <th>직함</th>
              <th>이메일</th>
            </tr>
          </thead>
          <tbody>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i}>
                    <td>test02</td>
                    <td>정준주</td>
                    <td>정상</td>
                    <td>기간망운영팀</td>
                    <td>과장</td>
                    <td>kinglghv@lghv.co.kr</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <ResultNoData />
        <ResultListPaging />
      </div> */}
    </>
  )
}

export default AccUserList;
