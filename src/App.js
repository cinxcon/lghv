import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRouter from './Router';
import Header from './pages/publish/layout/Header';
import Sidebar from './pages/publish/layout/Sidebar';
import Footer from './pages/publish/layout/Footer';
import DynamicStyle from './assets/dynamicStyle';
import WorkInfo from './pages/publish/layout/WorkInfo';
import logoImage from './assets/images/common/LGHV_logo_28.png';
import loginVisaul from './assets/images/common/login_visaul.png';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className='App'>
      <DynamicStyle/>
      { isLoggedIn ? (<Main/>) : (<LoginPage />) }
    </div>
  );
};

const Main = () => {
  return (<>
    <Header></Header>
     <div className='container'>
        <Sidebar></Sidebar>
        <article id='content'>
          <WorkInfo />
          <AppRouter />
        </article>
      </div>
      <Footer />
  </>)
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = [
    {
      email: 'user1@example.com',
      password: 'password1'
    },
    {
      email: 'user2@example.com',
      password: 'password2'
    }
    // 더 많은 사용자 정보를 추가할 수 있습니다.
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const authenticatedUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (authenticatedUser) {
    // 로그인 성공 시 /welcome 페이지로 이동
    // 로그인 성공 시 localStorage에 로그인 상태 저장
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
    } else {
      // 로그인 실패 시 처리 (예: 에러 메시지 표시)
      console.log('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-container flex-wrap between">
          <div className="login-kv">
              <h2 className="logo"><img src={logoImage} alt="LG HelloVision" /></h2>
              <p>Total Operation <br />Management System</p>
              <div className="img-wrap"><img src={loginVisaul} alt="" /></div>
          </div>
          <div className="login-info">
              <label htmlFor="user-id" className="invisible">Email:</label>
              <input type="text" id="user-id" required placeholder="아이디" value={email} onChange={handleEmailChange} />
              <label htmlFor="password" className="invisible">Password:</label>
              <input type="password" id="password" required placeholder="비밀 번호" value={password} onChange={handlePasswordChange} />
              <button type="button" className="btn btn-black" onClick={handleLogin}>로그인</button>
          </div>
      </div>
    </div>
  );
};

export default App;
