/* eslint-disable */
import { useEffect } from 'react';
import './popup.css';

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

  let { open, close, header, footer, type } = props;

  if (type === undefined){
    type = 'nomal';
  }
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {
        open
          ? (<section className={`popup-wrap ${type}`}><div className="header"><h3>{header}</h3><button className="btn-close" onClick={close}>닫기</button></div><div className="main">{props.children}</div><div className="footer">{footer}</div></section>)
          : null
      }
    </div>
  )
}

function Alert(props) {
  let { open, close, type } = props;
  if (type === undefined){
      type = 'yes';
  }
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {
        open
          ? (<section className='alert-wrap'><div className="main">{props.children}</div><div className="btn-group">
            {type === 'yes' ? (<button className="btn btn-lg btn-primary">확인</button>) : null } 
            <button className={`btn btn-lg ${type !== 'no' ? 'btn-low' : 'btn-primary'}`} onClick={close}>닫기</button></div></section>)
          : null
      }
    </div>
  )
}

export { Popup, Alert };