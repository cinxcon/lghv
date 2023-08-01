import { useEffect } from 'react';
import ApprovalOrgTree from './Comp_ApprovalOrgTree';

const Popup = ({ onClose, onItemSelected }) => {
  // 메인 화면 scroll 방지
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = 'position: ""; top: "";'
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, []);

  return (
    <div className='openModal modal'>
      <section className='popup1 orgtree'>
        <div className="header">
          <h3>조직검색</h3>
          <button className="btn-close" onClick={onClose}>닫기</button>
        </div>
        <div className="main">
          <ApprovalOrgTree onItemSelected={onItemSelected} onClose={onClose} />
        </div>
      </section>
    </div>
  );
};

export default Popup;
