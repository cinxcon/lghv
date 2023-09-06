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
import { Alert, Popup } from './pages/publish/popup/Popup';

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
  const [clear, setClear] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);
  const [send, setSend] = useState(false);
  const [passwordold, setPasswordold] = useState(false);
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

  const handleChangPassword = () => {
    setPasswordold(false);
    setIsChangePass(true);
  }
  const sendMail = () => {
    setClear(false);
    setSend(true);
  }

  return (
    <div className="login-wrap">
      <div className="login-container">
        <div className='flex-wrap between'>
          <div className="login-kv">
              <h2 className="logo"><img src={logoImage} alt="LG HelloVision" /></h2>
              <p>Total Operation <br />Management System</p>
              <div className="img-wrap"><img src={loginVisaul} alt="" /></div>
          </div>
          <div className="login-info">
            <h2 className='tit'>{!isChangePass ? '로그인' : '비밀번호 변경' } </h2>
            { !isChangePass
              ? (<div>
                  <input type="text" id="user-id" required placeholder="아이디" value={email} onChange={handleEmailChange} />
                  <input type="password" id="password" required placeholder="비밀 번호" value={password} onChange={handlePasswordChange} className='error' />
                  <p className='error-msg'>
                      비밀번호를 5회 이상 틀리셨습니다.<br />비밀번호 초기화를 통해 비밀번호를 초기화 해주세요.
                  </p>
                </div>)
              : (<div>
                  <input type='password' name='resent_password' id='resent_password' placeholder='현재 비밀번호' />
                  <input type='password' name='now_password' id='now_password' placeholder='변경 비밀번호' />
                  <input type='password' name='set_password' id='set_password' className='error' placeholder='변경 비밀번호 확인' />
                  <p className='error-msg'>
                    비밀번호가 일치하지 않습니다. 다시 확인해주세요.
                  </p>
                </div>)
            }
              <button type="button" className="btn btn-black login-btn" onClick={handleLogin}>로그인</button>
            {!isChangePass
              ? (<div className='mt20'>
                  <span>비밀번호를 잊으셨나요?</span>
                  <button className="reset-link" onClick={() => { setClear(true) }}>비밀번호 초기화</button>
                  {/* 팝업 확인 용 */}
                  <button className="reset-link" onClick={() => { setPasswordold(true) }}>비밀번호 6개월</button>
                  {/* 팝업 확인 용 */}
                </div>)
              : (null)
            }
          </div>
        </div>
        <div className='copy-right'>
          <p>Copyright © 2023 LGHV Company. All rights reserved.</p>
        </div>
      </div>
      <Popup open={clear} close={() => { setClear(false) }} header="비밀번호 초기화" type={'sm'}>
          <p className='center mb15'>초기화 된 비밀번호는 Toms에 등록 된 E-mail로 전송 됩니다.</p>
          <input type='text' name='reset_id' id='reset_id' className='mb15' placeholder='아이디' />
          <input type='text' name='reset_email' id='reset_email' className='mb15' placeholder='Email' />
          <div className="btn-group center">
            <button className="btn btn-lg btn-low" onClick={() => { setClear(false) }}>취소</button>
            <button className="btn btn-lg btn-primary" onClick={() => { sendMail() }}>확인</button>
          </div>
      </Popup>
      <Alert open={send} close={() => { setSend(false) }} type={'no'}>
        <div> 0000@0000.000 로<br />  메일을 발송하였습니다.</div>
      </Alert>
      <Popup open={passwordold} close={() => { setPasswordold(false) }} header="비밀번호변경" type={'sm'}>
          <div className="result-nodata">
            <i></i>
            <p>비밀번호를 변경한지 6개월이 지났습니다. <br /> 지금 비밀번호를 변경하시겠습니까?</p>
          </div>
          <div className="btn-group center">
            <button type="button" className="btn btn-black btn-lg" onClick={handleChangPassword}>비밀번호 변경하기</button>
          </div>
      </Popup>
      <Alert open={send} close={() => { setSend(false) }} type={'no'}>
        <p><strong>0000@0000.000</strong>로<br />메일을 발송하였습니다.</p>
        <p><strong>0000@0000.000</strong>로<br /><span className='color-error'>메일 전송을 실패</span>하였습니다.</p>
      </Alert>
    </div>
  );
};

export default App;
