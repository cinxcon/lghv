import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup } from '../popup/Popup';
import { PopupNotiMethodWRK } from '../popup/popupDetail/Popup_NotiMethod';
import { PopupProcessHistory } from '../popup/popupDetail/Popup_ProcessHistory';
import ServiceDetail from './component/ServiceDetail';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}
function ServicetaskDetail({ wrk }) {
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);
  const [workStop, setWorkStop] = useState();
  const [workCancel, setWorkCancel] = useState();
  const [workFin, setWorkFin] = useState();
  const [workExtend, setWorkExtend] = useState();
  const [refuse, setRefuse] = useState(false);
  const [approve, setApprove] = useState(false);
  const [redo, setRedo] = useState(false);
  const [registNm, setRegistNm] = useState(false);
  const [registUr, setRegistUr] = useState(false);
  const pagedata = {
    title: '작업관리',
    subtitle: '작업상세',
    SubMenu: 'yes',
    isDetail: 'yes',
    goDetail: 'wrk'
  }
  const handlePrint = () => {
    window.print();
  };
  const handleModify = () => {
    window.close();
    window.open('/LGHV-UIX-WRK/LGHV-UIX-WRK-0001');
  };
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
        <ContentTitle data={pagedata} />
          <div className="detail-top-btn-group">
            <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
            <button className='btn btn-pop' onClick={() => { setHistory(true) }}>처리내역</button>
            <button className='btn btn-print' onClick={handlePrint}>화면인쇄</button>
          </div>
          <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
            <PopupNotiMethodWRK />
          </Popup>
          <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
            <PopupProcessHistory />
          </Popup>
          <ServiceDetail />
          <div className='detail-bottom-btn-group'>
            <div>
              <button className='btn btn-lg bnt-low' onClick={() => { setWorkStop(true) }}>작업중단</button>
              <button className='btn btn-lg bnt-low' onClick={() => { setWorkCancel(true) }}>작업취소</button>
              <button className='btn btn-lg' onClick={() => { setWorkExtend(true) }}>작업연장</button>
              <button className='btn btn-lg btn-primary' onClick={() => { setWorkFin(true) }}>작업완료</button>
            </div>
            {/* 결재함에서 넘어 갈 때: 결재대기, 완료, 반려 시 */}
            <div className='mt6'>
              <button className='btn btn-lg btn-low' onClick={() => { setRefuse(true) }}>반려</button>
              <button className='btn btn-lg btn-primary' onClick={() => { setApprove(true) }}>승인</button>
            </div>
            {/* 결재함에서 넘어 갈 때: 공람문서 */}
            <div className='mt6'>
              <button className='btn btn-lg btn-low' onClick={ handleModify }>수정</button>
              <button className='btn btn-lg btn-primary' onClick={() => { setRegistNm(true) }}>등록</button>
              <button className='btn btn-lg btn-primary' onClick={() => { setRegistUr(true) }}>등록(긴급)</button>
            </div>
          </div>
          <Popup open={workStop} close={() => { setWorkStop(false) }} header="[작업중단] 의견" footer={ <PopupButtons close={() => { setWorkStop(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={workCancel} close={() => { setWorkCancel(false) }} header="[작업취소] 의견" footer={ <PopupButtons close={() => { setWorkCancel(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={workFin} close={() => { setWorkFin(false) }} header="[작업완료] 의견" footer={ <PopupButtons close={() => { setWorkFin(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={workExtend} close={() => { setWorkExtend(false) }} header="[작업연장] 의견" footer={ <PopupButtons close={() => { setWorkExtend(false) }} /> } type={'sm'}>
            <div className='mb15'>
              <input type="radio" name="time" id="time_1" />
              <label htmlFor="time_1">1시간</label>
              <input type="radio" name="time" id="time_2" />
              <label htmlFor="time_2">2시간</label>
              <input type="radio" name="time" id="time_3" />
              <label htmlFor="time_3">3시간</label>
            </div>
            <textarea></textarea>
          </Popup>
          <Popup open={refuse} close={() => { setRefuse(false) }} header="[반려] 의견" footer={ <PopupButtons close={() => { setRefuse(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={approve} close={() => { setApprove(false) }} header="[승인] 의견" footer={ <PopupButtons close={() => { setApprove(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={registNm} close={() => { setRegistNm(false) }} header="일반작업 등록" footer={ <PopupButtons close={() => { setRegistNm(false) }} /> } type={'sm'}>
            작업을 등록 하시겠습니까?
          </Popup>
          <Popup open={registUr} close={() => { setRegistUr(false) }} header="긴급작업 등록" footer={ <PopupButtons close={() => { setRegistUr(false) }} /> } type={'sm'}>
            작업을 자가승인 하시겠습니까?
          </Popup>
          <div className="content-section mt40">
            <table className='table'>
              <caption>api 신청정보</caption>
              <colgroup>
                <col span={6} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>순번</th>
                  <th scope='col'>API 신청정보</th>
                  <th scope='col'>전송일시</th>
                  <th scope='col' colSpan={2}>성공여부</th>
                  <th scope='col'>재실행</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>홍길동 Hong</td>
                  <td>2023-08-29 12:00:00</td>
                  <td>Y</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>홍길동 Hong</td>
                  <td>2023-08-29 12:00:00</td>
                  <td></td>
                  <td>N</td>
                  <td>
                    <button type="button" className="btn-txt-underline" onClick={() => { setRedo(true) }}>재실행</button>
                    <Popup open={redo} close={() => { setRedo(false) }} header="[API 신청정보] 재실행" footer={ <PopupButtons close={() => { setRedo(false) }} /> } type={'sm'}>
                      <strong className="center mb15">API 신청을 재실행하시겠습니까?</strong>
                      <textarea></textarea>
                    </Popup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </PopupPortal>
    </>
  )
}

function PopupButtons(props) {
  return (
    <div className="btn-group">
      <button className="btn btn-lg btn-low" onClick={props.close}>취소</button>
      <button className="btn btn-lg btn-primary">확인</button>
    </div>
  )
}

export default ServicetaskDetail;
