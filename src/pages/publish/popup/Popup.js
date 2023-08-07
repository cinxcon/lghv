/* eslint-disable */
import { useEffect } from 'react';
import './popup.css';
import nomal from '../servicetask/component/RegistNomal';

function Popup(props) {
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

  if (type === undefined){
    type = 'nomal';
  }
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {
        open
          ? (<section className={`popup-wrap ${type}`}><div className="header"><h3>{header}</h3><button className="btn-close" onClick={close}>닫기</button></div><div className="main">{props.children}</div></section>)
          : null
      }
    </div>
  )
}

function Alert(props) {
  let { open, close } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {
        open
          ? (<section className='alert-wrap'><div className="main">{props.children}</div><div className="btn-group"><button className="btn btn-primary">확인</button><button className="btn btn-low" onClick={close}>닫기</button></div></section>)
          : null
      }
    </div>
  )
}

export { Popup, Alert };