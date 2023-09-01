import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Alert } from '../../popup/Popup';
const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}
function PopupNotiMethodSet({ onItemSelected }) {
  const [regist, setRegist] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    sms_department: false,
    email_department: false,
    sms_reviewer: false,
    email_reviewer: false,
    sms_subscriber: false,
    email_subscriber: false,
    sms_DMC: false,
    email_DMC: false
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [id]: checked
    }));
  };

  const handleButtonClick = () => {
    const selectedCheckboxes = Object.keys(checkboxStates).filter(
      (checkboxId) => checkboxStates[checkboxId]
    );
    const areAllUnchecked = Object.values(checkboxStates).every((state) => !state);
    if (areAllUnchecked) {
      setRegist(true)
    } else {
      console.log('Selected checkboxes:', selectedCheckboxes);
    }
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
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>통보방법</h2>
        </div>
        <table className="popup-table">
          <caption>통보방법 지정</caption>
          <colgroup>
            <col span={4} style={{ width: '25%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">대상</th>
              <th scope="col">SMS</th>
              <th scope="col">E-MAIL</th>
              <th scope="col">알림톡</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>등록자 / 소속팀</td>
              <td>
                <input type="checkbox" name="department" id="sms_department" checked={checkboxStates.sms_department} onChange={handleCheckboxChange} />
                <label htmlFor="sms_department" className='invisible'>SMS</label>
              </td>
              <td>
                <input type="checkbox" name="department" id="email_department" checked={checkboxStates.email_department} onChange={handleCheckboxChange} />
                <label htmlFor="email_department" className='invisible' >E-MAIL</label>
              </td>
              <td>
                <input type="checkbox" name="department" id="talk_department" checked={checkboxStates.talk_department} onChange={handleCheckboxChange} />
                <label htmlFor="talk_department" className='invisible' >알림톡</label>
              </td>
            </tr>
            <tr>
              <td>검토자</td>
              <td>
                <input type="checkbox" name="reviewer" id="sms_reviewer" checked={checkboxStates.sms_reviewer} onChange={handleCheckboxChange}/>
                <label htmlFor="sms_reviewer" className='invisible' >SMS</label>
              </td>
              <td>
                <input type="checkbox" name="reviewer" id="email_reviewer" checked={checkboxStates.email_reviewer} onChange={handleCheckboxChange} />
                <label htmlFor="email_reviewer" className='invisible' >E-MAIL</label>
              </td>
              <td>
                <input type="checkbox" name="reviewer" id="talk_reviewer" checked={checkboxStates.talk_reviewer} onChange={handleCheckboxChange} />
                <label htmlFor="talk_reviewer" className='invisible' >알림톡</label>
              </td>
            </tr>
            <tr>
              <td>결제자</td>
              <td>
                <input type="checkbox" name="approval" id="sms_approval" checked={checkboxStates.sms_approval} onChange={handleCheckboxChange} />
                <label htmlFor="sms_approval" className='invisible' >SMS</label>
              </td>
              <td>
                <input type="checkbox" name="approval" id="email_approval" checked={checkboxStates.email_approval} onChange={handleCheckboxChange} />
                <label htmlFor="email_approval" className='invisible' >E-MAIL</label>
              </td>
              <td>
                <input type="checkbox" name="approval" id="talk_approval" checked={checkboxStates.talk_approval} onChange={handleCheckboxChange} />
                <label htmlFor="talk_approval" className='invisible' >알림톡</label>
              </td>
            </tr>
            <tr>
              <td>수신자</td>
              <td>
                <input type="checkbox" name="receiver" id="sms_receiver" checked={checkboxStates.sms_receiver} onChange={handleCheckboxChange} />
                <label htmlFor="sms_receiver" className='invisible' >SMS</label>
              </td>
              <td>
                <input type="checkbox" name="receiver" id="email_receiver" checked={checkboxStates.email_receiver} onChange={handleCheckboxChange} />
                <label htmlFor="email_receiver" className='invisible' >E-MAIL</label>
              </td>
              <td>
                <input type="checkbox" name="receiver" id="talk_receiver" checked={checkboxStates.talk_receiver} onChange={handleCheckboxChange} />
                <label htmlFor="talk_receiver" className='invisible' >알림톡</label>
              </td>
            </tr>
            <tr>
              <td>가입자</td>
              <td>
                <input type="checkbox" name="subscriber" id="sms_subscriber" checked={checkboxStates.sms_subscriber} onChange={handleCheckboxChange} />
                <label htmlFor="sms_subscriber" className='invisible' >SMS</label>
              </td>
              <td>
                <input type="checkbox" name="subscriber" id="email_subscriber" checked={checkboxStates.email_subscriber} onChange={handleCheckboxChange} />
                <label htmlFor="email_subscriber" className='invisible' >E-MAIL</label>
              </td>
              <td>
                <input type="checkbox" name="subscriber" id="talk_subscriber" checked={checkboxStates.talk_subscriber} onChange={handleCheckboxChange} />
                <label htmlFor="talk_subscriber" className='invisible' >알림톡</label>
              </td>
            </tr>
           </tbody>
        </table>
        <ul className="list-primary">
          <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시길 바랍니다.</li>
        </ul>
        <div className='btn-wrap center mt20'>
          <button onClick={handleButtonClick} className='btn btn-lg btn-primary'>확인</button>
          <Alert open={regist} close={() => { setRegist(false) }} type={'no'}>
            <div>통보방법을 지정해주세요.</div>
          </Alert>
        </div>
      </div>
      </PopupPortal>
    </>
  )
}

export default PopupNotiMethodSet;
