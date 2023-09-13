import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup, Alert } from '../popup/Popup';
import RegistUrgent from './component/RegistUrgent';

function ServicetaskRegistUrgent() {
  const [selectedOptionLine, setSelectedOptionLine] = useState('manager_line');
  const [line, setLine] = useState(false);
  const [clear, setClear] = useState(false);
  const [tempsave, setTempsave] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOptionLine(event.target.value);
  };
  const openLinePop = () => {
    const lineData = selectedOptionLine;
    console.log(lineData);
    onPopup('/popup/PopupApproval', 'Line', '1200', '800');
    setLine(false);
  }

  const pagedata = {
    title: '작업관리',
    subtitle: '일반 작업등록',
    SubMenu: 'yes',
    isDetail: 'no',
    isUserRegist: 'yes'
  }
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupWidth = width;
    const popupHeight = height;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }

  return (
    <>
      <ContentTitle data={ pagedata } />
        <div className="detail-top-btn-group">
          <span className='noti color-primary'>(*)는 필수 입력 항목 입니다.</span>
          <button className='btn btn-pop' onClick={() => { onPopup('/popup/PopupWorkOnLoad', 'WorkOnLoad', '1200', '800') }}>불러오기</button>
          <button className='btn btn-pop' onClick={() => { setLine(true); }}>결제선 지정</button>
          <button className='btn btn-pop btn-pop-primary' onClick={() => { onPopup('/popup/PopupNotiMethodSet', 'NotiMethod', '800', '500') }}>통보방법</button>
          <button className='btn btn-ref' onClick={() => { setClear(true) }}>새로작성</button>
          <button className='btn btn-temp' onClick={() => { setTempsave(true) }}>임시저장</button>
        </div>
        <Popup open={line} close={() => { setLine(false) }} header="결재선 지정" type={'sm'} >
          <div className='center mt20'>
              <input type="radio" name="manager-line" id="manager_line" value="manager_line" checked={selectedOptionLine === 'manager_line'} onChange={handleOptionChange} />
              <label htmlFor="manager_line">담당자지정</label>
              <input type="radio" name="manager-line" id="team_line" value="team_line" checked={selectedOptionLine === 'team_line'} onChange={handleOptionChange} />
              <label htmlFor="team_line">팀결재선지정</label>
              <div className="btn-group">
              <button className="btn btn-lg btn-primary" onClick={() => { openLinePop() }}>확인</button>
              <button className="btn btn-lg btn-low" onClick={() => { setLine(false) }}>취소</button>
            </div>
          </div>
        </Popup>
        <Alert open={clear} close={() => { setClear(false) }}>
          <div>저장된 내용이 사라집니다. <br /> 새로 작성 하시겠습니까?</div>
        </Alert>
        <Alert open={tempsave} close={() => { setTempsave(false) }}>
          <div>임시 저장 합니다.</div>
        </Alert>
      <RegistUrgent />
    </>
  )
}

export default ServicetaskRegistUrgent;
