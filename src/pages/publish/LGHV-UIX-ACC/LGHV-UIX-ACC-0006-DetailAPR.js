import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Popup } from '../popup/Popup';
import { PopupNotiMethodBLK } from '../popup/popupDetail/Popup_NotiMethod';
import { PopupProcessHistoryBLK } from '../popup/popupDetail/Popup_ProcessHistory';
import ContentTitle from '../layout/ContentTitle';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function AccEquipmentDetailAPR() {
  const [resultList] = useState([1, 2, 3, 4]);
  const pagedata = {
    title: '장비관리 상세',
    subtitle: '',
    SubMenu: 'yes',
    isDetail: 'yes'
  }

  //  토글
  const [divStates, setDivStates] = useState([false, false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };

  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }

  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);
  const [refuse, setRefuse] = useState(false);
  const [approve, setApprove] = useState(false);
  const [redo, setRedo] = useState(false);
  const [regist, setRegist] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  const handleModify = () => {
    window.close();
    window.open('/LGHV-UIX-ACC/LGHV-UIX-ACC-0008');
  };

  return (
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
          <PopupNotiMethodBLK />
        </Popup>
        <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
          <PopupProcessHistoryBLK />
        </Popup>
        {/* 결재선 지정 */}
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
            <h3>결재</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>검색영역 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>결제 라인 정보</caption>
              <colgroup>
                <col style={{ width: '7%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '7%' }} />
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
                  <td>홍길동(009900)</td>
                  <td>기안</td>
                  <td>2023-01-01 11:00:00</td>
                  <td></td>
                </tr>
                <tr>
                  <td>검토</td>
                  <td>정유리(123567)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td>2023-01-02 11:00:00</td>
                  <td>안전에 유의하여 작업해 주세요.</td>
                </tr>
                <tr>
                  <td>조정</td>
                  <td>김철수(123456)</td>
                  <td><span className='color-fail'>반려</span></td>
                  <td>2023-01-02 11:00:00</td>
                  <td>작업 자세히 기입 바랍니다.</td>
                </tr>
                <tr>
                  <td>합의</td>
                  <td>김철수(123456)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>결재</td>
                  <td>김철수(123456)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table className='table table-row mt20'>
              <caption>수신 정보</caption>
              <colgroup>
                <col style={{ width: '7%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>수신</th>
                  <td>김순자(111111), 김철수(123456)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
            <h3>장비 기안 정보</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>장비 관리 기안 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>장비 관리 기안 정보</caption>
              <colgroup>
                <col style={{ width: '20%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>제목</th>
                  <td>장비 사용에 대한 기안</td>
                </tr>
                <tr>
                  <th scope='row'>요청자 </th>
                  <td>홍길동 (hongkil0922)</td>
                </tr>
                <tr>
                  <th scope='row'>기안 내용</th>
                  <td>
                    <div className='worker-box h66 over-flow-y'>
                      장비 사용에 대한 기안 결재 요청건  입니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>기안 첨부</th>
                  <td><span className='ico_attach'>장애 등록건에 대하여.pdf</span></td>
                </tr>
              </tbody>
            </table>
            <table className='table mt16'>
              <caption>접근제어 장비명 검색: 이름, 종류, 기종, 주소, 포트상태</caption>
              <colgroup>
                <col span={5} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>이름</th>
                  <th scope='col'>종류</th>
                  <th scope='col'>기종</th>
                  <th scope='col'>주소</th>
                  <th scope='col'>포트상태</th>
                </tr>
              </thead>
              <tbody>
              {
                resultList.map(function(a, i) {
                  return (
                    <tr key={i} onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0006', 'detail', '1280', '760') }} className='link'>
                      <td>InfraCore1</td>
                      <td>프록시</td>
                      <td>Linux</td>
                      <td>102.15.222.44</td>
                      <td>SSH, Telnet, SFTP, FTP</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
        </div>
        <div className="content-section">
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
        <div className='content-section'>
          <div className='detail-bottom-btn-group'>
            {/* 결재함에서 넘어 갈 때: 결재대기, 완료, 반려 시 */}
            <button className='btn btn-lg btn-low' onClick={() => { setRefuse(true) }}>반려</button>
            <button className='btn btn-lg btn-primary' onClick={() => { setApprove(true) }}>승인</button>
            {/* 결재함에서 넘어 갈 때: 공람문서 */}<br /><br />
            <button className='btn btn-lg btn-low' onClick={ handleModify }>수정</button>
            <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
          </div>
          <Popup open={refuse} close={() => { setRefuse(false) }} header="[반려] 의견" footer={ <PopupButtons close={() => { setRefuse(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={approve} close={() => { setApprove(false) }} header="[승인] 의견" footer={ <PopupButtons close={() => { setApprove(false) }} /> } type={'sm'}>
            <textarea></textarea>
          </Popup>
          <Popup open={regist} close={() => { setRegist(false) }} header="일반작업 등록" footer={ <PopupButtons close={() => { setRegist(false) }} /> } type={'sm'}>
            사용자 품의를 등록 하시겠습니까?
          </Popup>
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

export default AccEquipmentDetailAPR;
