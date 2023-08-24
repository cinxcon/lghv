import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Alert } from '../popup/Popup';
import RegistNomal from './component/RegistNomal';

function ServicetaskRegist() {
  const [clear, setClear] = useState(false);
  const [tempsave, setTempsave] = useState(false);

  const pagedata = {
    title: '작업관리',
    subtitle: '일반 작업등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  // 윈도우 팝업
  const onPopupL = (url, name) => {
    const popupWidth = 1280;
    const popupHeight = 800;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }
  const onPopupM = (url, name) => {
    const popupWidth = 700;
    const popupHeight = 500;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }

  return (
    <>
      <ContentTitle data={ pagedata } />
      <div className='content-section'>
        <div className="detail-top-btn-group">
          <span className='noti color-primary'>(*)는 필수 입력 항목 입니다.</span>
          <button className='btn btn-pop' onClick={() => { onPopupL('/popup/PopupWorkOnLoad', 'WorkOnLoad') }}>불러오기</button>
          <button className='btn btn-pop' onClick={() => { onPopupL('/popup/PopupApproval', 'Line') }}>결제선 지정</button>
          <button className='btn btn-pop' onClick={() => { onPopupM('/popup/PopupNotiMethodSet', 'NotiMethod') }}>통보방법</button>
          <button className='btn btn-ref' onClick={() => { setClear(true) }}>새로작성</button>
          <button className='btn btn-temp' onClick={() => { setTempsave(true) }}>임시저장</button>
        </div>
        <Alert open={clear} close={() => { setClear(false) }}>
          <div>저장된 내용이 사라집니다. <br /> 새로 작성 하시겠습니까?</div>
        </Alert>
        <Alert open={tempsave} close={() => { setTempsave(false) }}>
          <div>임시 저장 합니다.</div>
        </Alert>
      </div>
      <RegistNomal />
    </>
  )
}

export default ServicetaskRegist;
