import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/common/LGHV_logo.png';
import { Popup } from '../popup/Popup';

const Header = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const logout = () => {
    alert('로그 아웃 하시겠습니까?');
  }
  const [userInfo] = useState('홍길동 (hong1234)');
  const [detailinfo, setDetailinfo] = useState(false);
  const tDate = `${year}-${month}-${date} ${hours} : ${minutes}`;

  return (
    <header>
      <div className='header-wrap'>
          <Link to ="/" className='logo'><img src={logoImage} alt="LG HelloVision" /></Link>
        <div className='user-info'>
          <button type='button' className='btn btn-circle' onClick={ () => { setDetailinfo(true) }}>i</button>
          <div className='user ml10'>
          사용자 : <span>{userInfo}</span> <span>{tDate}</span>
            <Link to="/mypage" className='ml10 underline'>마이 페이지</Link>
           </div>
          <button type='button' className='logout-btn' onClick={logout}>로그아웃</button>
        </div>
      </div>
       <Popup open={detailinfo} close={() => { setDetailinfo(false) }} header="사용자정보" type={'sm'} >
            <table className='table'>
              <tbody>
              <tr>
                <th>사용자ID</th>
                <td>200</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>홍길동</td>
              </tr>
              <tr>
                <th>사용자 구분</th>
                <td>직원</td>
              </tr>
              <tr>
                <th>소속부서</th>
                <td>경영관리담당/CFO/CRO/대표이사/LG HelloVision/</td>
              </tr>
              <tr>
                <th>직책</th>
                <td>팀장</td>
              </tr>
              <tr>
                <th>직급</th>
                <td>E1</td>
              </tr>
              <tr>
                <th>사무실 전화번호</th>
                <td>070-1234-5678</td>
              </tr>
              <tr>
                <th>휴대폰</th>
                <td>010-1234-5678</td>
              </tr>
              <tr>
                <th>등록일</th>
                <td>2023-09-08 5:30</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>AAA@lghv.net</td>
              </tr>
              <tr>
                <th>메모</th>
                <td>메모 내용</td>
              </tr>
              <tr>
                <th>관리자 여부</th>
                <td>관리자</td>
              </tr>
              </tbody>
            </table>
        </Popup>
    </header>
  );
};

export default Header;
