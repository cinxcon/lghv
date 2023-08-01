import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;
const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      // 로그인 API 엔드포인트 URL (가정)
      const loginApiUrl = 'http://172.30.1.41:8080/member/login'; // 실제 API URL을 사용하세요.
      const userId = 'hjjpj'; // 사용자 이름은 사용자가 입력하도록 처리해야 합니다.
      const password = 'jaejin83'; // 비밀번호도 사용자가 입력하도록 처리해야 합니다.
      // 로그인 요청을 보냅니다. (가정: 로그인 성공 시 서버에서 토큰 또는 세션을 제공)
      const loginResponse = await axios.get(loginApiUrl, {
        params: {
          userId,
          password
        }
      });

      console.log(loginResponse);
      Cookies.set('sessionId', loginResponse.data.sessionId, { expires: 1 }); // 쿠키 1일 동안 유지
      // 로그인 성공 처리
      setIsLoggedIn(true);
    } catch (error) {
      console.error('로그인 또는 데이터 가져오기 실패:', error);
      setError('로그인에 문제가 발생했습니다.');
    }
  };
  const handleLogin2 = async () => {
    try {
      const dataApiUrl = 'http://172.30.1.41:8080/getUserInfo'; // 실제 API URL을 사용하세요.
      const response = await axios.get(dataApiUrl);
      setUserData(response.data);
      console.log(userData);
    } catch (error) {
      console.error('로그인 또는 데이터 가져오기 실패:', error);
      setError('로그인에 문제가 발생했습니다.');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (<button onClick={handleLogin}>로그인</button>) : <p>로그인 성공!</p>}
      <button onClick={handleLogin2} className='mt50'>회원정보</button>{error && <p>{error}</p>}
    </div>
  );
};

export default LoginButton;
