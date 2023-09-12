/* eslint-disable */
import { useEffect } from 'react';
import './popup.css';

function Popup(props) {

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
            <button className={`btn btn-lg ${type === 'yes' ? 'btn-low' : 'btn-primary'}`} onClick={close}>{type === 'yes' ? '닫기' : '확인'}</button></div></section>)
          : null
      }
    </div>
  )
}

function Notice(props) {
  let { open, close, header, id } = props;
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    console.log(value);
  }
  return (
    <>
    {open
       ? (<section className={`popup-wrap`}>
            <div className="header">
              <h3>{header}</h3>
              <button className="btn-close" onClick={close}>닫기</button>
            </div>
            <div className="main left">{props.children}</div>
            <div className="footer">
              <input type='checkbox' name={`not_today_${id}` } id={`not_today_${id}` } value={`not_today_${id}` } onChange={handleCheckboxChange} />
              <label htmlFor={`not_today_${id}` }>오늘하루 보지 않기</label>
            </div>
            </section>)
          : null
      }
    </>
  )
}

export { Popup, Alert, Notice };
