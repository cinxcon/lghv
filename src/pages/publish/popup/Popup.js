/* eslint-disable */
import { useEffect } from 'react';
import './popup.css';

function Popup1(props) {
// 메인 화면 scroll 방지
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
  //   return () => {
  //     const scrollY = document.body.style.top
  //     document.body.style.cssText = 'position: ""; top: "";'
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1)
  //   }
  // }, []);

  let { open, close, header, type } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {
        open
          ? (<section className={`popup1 ${type}`}><div className="header"><h3>{header}</h3><button className="btn-close" onClick={close}>닫기</button></div><div className="main">{props.children}</div></section>)
          : null
      }
    </div>
  )
}

function Popup2(props) {
  let { open, close } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {
        open
          ? (<section className='popup2'><div className="main">{props.children}</div><div className="btn-group"><button className="btn btn-primary">확인</button><button className="btn btn-low" onClick={close}>닫기</button></div></section>)
          : null
      }
    </div>
  )
}

export { Popup1, Popup2 };