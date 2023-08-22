import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/common/LGHV_logo.png';

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
  const tDate = `${year}-${month}-${date} ${hours} : ${minutes}`;

  return (
    <header>
      <div className='header-wrap'>
          <Link to ="/" className='logo'><img src={logoImage} alt="LG HelloVision" /></Link>
        <div className='user-info'>
          <div className='user'>
          사용자 : <span>{userInfo}</span> <span>{tDate}</span>
            <Link to="/mypage" className='ml10 underline'>마이 페이지</Link>
           </div>
          <button type='button' className='logout-btn' onClick={logout}>로그아웃</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
