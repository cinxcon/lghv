import PopupServiceSearch from './Popup_ServiceSearch';
import PopupServicelList from './PopupServicel_List';
import { createPortal } from 'react-dom';
function PopupWorkOnLoad() {
  const PopupPortal = ({ children }) => {
    const el = document.getElementById('popup-root');
    return createPortal(children, el)
  }

  return (
    <>
      <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <PopupServiceSearch />
        <PopupServicelList />
      </div>
      </PopupPortal>
    </>
  )
}

export default PopupWorkOnLoad;
