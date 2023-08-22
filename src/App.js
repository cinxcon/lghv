import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRouter from './Router';
import Header from './pages/publish/layout/Header';
import Sidebar from './pages/publish/layout/Sidebar';
import Footer from './pages/publish/layout/Footer';
import DynamicStyle from './assets/dynamicStyle';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className='app'>
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
          <AppRouter />
          <Footer />
        </article>
      </div>
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
    <div>
      <div className="login-container">
        <h2>Login Page</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default App;
