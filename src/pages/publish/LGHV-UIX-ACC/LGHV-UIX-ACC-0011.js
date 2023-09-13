/* eslint-disable */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ContentTitle from '../layout/ContentTitle';
import { Popup } from '../popup/Popup';
import { PopupNotiMethodACC } from '../popup/popupDetail/Popup_NotiMethod';
import { PopupProcessHistoryBLK } from '../popup/popupDetail/Popup_ProcessHistory';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function AccPolicyRegist() {
  const [resultList] = useState([1, 2, 3]);
  const pagedata = {
    title: '접근제어',
    subtitle: '접근제어 정책 등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // 팝업
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);
  const [redo, setRedo] = useState(false);
  //  토글
  const [divStates, setDivStates] = useState([false, false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <ContentTitle data={pagedata} />
        <div className="detail-top-btn-group">
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-pop' onClick={() => { setHistory(true) }}>처리내역</button>
          <button className='btn btn-print' onClick={handlePrint}>화면인쇄</button>
        </div>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethodACC />
        </Popup>
        <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
          <PopupProcessHistoryBLK />
        </Popup>
        {/* 결재선 지정 */}
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
            <h3>결재</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>결재 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>결제 라인 정보</caption>
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '5%' }} />
                <col style={{ width: '15%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>구분</th>
                  <th scope='col'>결재자</th>
                  <th scope='col'>상태</th>
                  <th scope='col'>결재일시</th>
                  <th scope='col'>의견</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>기안</td>
                  <td>홍길동(123456)</td>
                  <td>기안</td>
                  <td>2023-01-01 11:00:00</td>
                  <td></td>
                </tr>
                <tr>
                  <td rowSpan={2}>합의</td>
                  <td>박길동(aggdd)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td>2023-01-01 11:00:00</td>
                  <td></td>
                </tr>
                <tr>
                  <td>최길동(choi)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td>2023-01-01 12:00:00</td>
                  <td></td>
                </tr>
                <tr>
                  <td>결재</td>
                  <td>박길동(aggdd)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td>2023-01-02 11:00:00</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table className='table table-row mt20'>
              <caption>합의 수신 정보</caption>
              <colgroup>
                <col style={{ width: '5%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>수신</th>
                  <td>김길동(bb3456), 홍길동(test)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
            <h3>사용자 관리 기안</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>사용자 관리 기안 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>사용자 관리 기안</caption>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>등록번호</th>
                  <td>T20230912005252</td>
                </tr>
                <tr>
                  <th scope='row'>제목</th>
                  <td>접근제어 정책 상세 제목</td>
                </tr>
                <tr>
                  <th scope='row'>기안 내용</th>
                  <td>
                    <div>접근제어 정책 상세 내용</div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>파일 첨부</th>
                  <td><span className='ico_attach'>접근제어.pdf</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[2] ? 'under-line' : ''}`}>
            <h3>접근제어 정책 등록</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>접근제어 정책 등록 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
            <div className='right btn-wrap'>
              <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupAccPolicyDetail', 'detail', 1280, 400) }}>조회</button>
            </div>
            <table className='table table-td-left mt8'>
            <caption>접근제어 정책 등록: 사용자부서, 사용자, 장비, OS</caption>
              <colgroup>
                <col span={4} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>사용자부서</th>
                  <th scope='col'>사용자</th>
                  <th scope='col'>장비</th>
                  <th scope='col'>OS</th>
                </tr>
              </thead>
              <tbody>
              {
                resultList.map(function(a, i) {
                  return (
                    <tr key={i}>
                      <td>호남인프라</td>
                      <td>홍길동 Hong</td>
                      <td>Infra Core1</td>
                      <td>Linux</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
        </div>

        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[2] ? 'under-line' : ''}`}>
            <h3>API 신청정보</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>API 신청정보 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
            <div className="content-section">
              <table className='table'>
                <caption>API 신청정보</caption>
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
        </div>
      </div>
    </PopupPortal>
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

export default AccPolicyRegist;
