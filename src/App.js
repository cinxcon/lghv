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
          <AppRouter />
          <Footer />
        </article>
      </div>
  </>)
}

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
