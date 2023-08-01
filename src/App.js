import AppRouter from './Router';
import Header from './pages/publish/layout/Header';
import Sidebar from './pages/publish/layout/Sidebar';
import Footer from './pages/publish/layout/Footer';
import './assets/styles/common.css';
import './assets/styles/dashboard.css';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <div className='container'>
        <Sidebar></Sidebar>
        <article id='content'>
          <AppRouter />
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
      <Footer />
    </div>
  );
};

export default App;
