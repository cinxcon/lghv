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
      <Footer />
    </div>
  );
};

export default App;
