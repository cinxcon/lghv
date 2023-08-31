import PopupServiceSearch from './Popup_ServiceSearch';
import PopupServicelList from './PopupServicel_List';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupWorkOnLoad() {
  return (
    <>
      <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>불러오기</h2>
        </div>
        <PopupServiceSearch />
        <PopupServicelList />
      </div>
      </PopupPortal>
    </>
  )
}

export default PopupWorkOnLoad;
