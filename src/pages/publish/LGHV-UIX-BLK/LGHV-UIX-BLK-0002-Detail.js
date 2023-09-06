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

function DisabilityMngDetail() {
  const pagedata = {
    title: '장애관리',
    subtitle: '장애상세',
    SubMenu: 'yes',
    isDetail: 'yes'
  }

  //  토글
  const [divStates, setDivStates] = useState([false, false, false, false, false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };

  const [desabilityReport, setDesabilityReport] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [print, setPrint] = useState(false);
  const [history, setHistory] = useState(false);
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
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <ContentTitle data={pagedata} />
        <div className="detail-top-btn-group">
          <button className='btn'>관리자 편집</button>
          <button className='btn'>삭제</button>
          <button className='btn btn-pop' onClick={() => { setDesabilityReport(true) }}>장애보고서</button>
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-pop' onClick={() => { setHistory(true) }}>처리내역</button>
          <button className='btn btn-print' onClick={handlePrint}>화면인쇄</button>
        </div>
        <Popup open={desabilityReport} close={() => { setDesabilityReport(false) }} header="장애보고서">
          장애보고서
        </Popup>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethodBLK />
        </Popup>
        <Popup open={print} close={() => { setPrint(false) }} header="화면인쇄">
          화면인쇄
        </Popup>
        <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
          <PopupProcessHistoryBLK />
        </Popup>
        <div className='content-section' id='approval-line'>
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
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '60%' }} />
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
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>검토</td>
                  <td>정유리(123567)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>조정</td>
                  <td>정유리(123567)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>합의</td>
                  <td>정유리(123567)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>결재</td>
                  <td>김철수(123456)</td>
                  <td><span className='color-success'>승인</span></td>
                  <td></td>
                  <td>안전에 유의하여 작업해 주세요.</td>
                </tr>
              </tbody>
            </table>
            <table className='table table-row mt20'>
                <caption>수신 정보</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '90%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>수신</th>
                    <td>김순자(111111)</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
            <h3>기본 정보</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>기본 정보 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>기본 정보</caption>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '10%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>등록번호</th>
                  <td colSpan={3}>T23080700000151 </td>
                </tr>
                <tr>
                  <th scope='row'>인프라팀/SO</th>
                  <td colSpan={3}>강원인프라팀/영동방송</td>
                </tr>
                <tr>
                  <th scope='row'>제목</th>
                  <td colSpan={3}>안동 AD16-6 긴급점검</td>
                </tr>
                <tr>
                  <th scope='row'>처리부서</th>
                  <td colSpan={3}>기술팀</td>
                </tr>
                <tr>
                  <th scope='row'>등록자</th>
                  <td>홍길동</td>
                  <th scope='row'>등록일</th>
                  <td>2023-08-16 11:00:00</td>
                </tr>
                <tr>
                  <th scope='row'>대상 서비스</th>
                  <td colSpan={3}>
                    <fieldset>
                      <legend>대상 서비스</legend>
                      <input type="checkbox" name="service" id="ser_1" value="" disabled />
                      <label htmlFor="ser_1">DTV</label>
                      <input type="checkbox" name="service" id="ser_2" value="" disabled />
                      <label htmlFor="ser_2">NET</label>
                      <input type="checkbox" name="service" id="ser_3" value="" disabled />
                      <label htmlFor="ser_3">VOIP</label>
                      <input type="checkbox" name="service" id="ser_4" value="" disabled />
                      <label htmlFor="ser_4">ATV</label>
                      <input type="checkbox" name="service" id="ser_5" value="" disabled/>
                      <label htmlFor="ser_5" className='color-info'>VOD</label>
                      <input type="checkbox" name="service" id="ser_6" value="" disabled />
                      <label htmlFor="ser_6" className='color-info'>ESS</label>
                      <input type="checkbox" name="service" id="ser_7" value="" disabled />
                      <label htmlFor="ser_7" className='color-info'>클라우드</label>
                      <input type="checkbox" name="service" id="ser_8" value="" disabled />
                      <label htmlFor="ser_8" className='color-info'>전송망</label>
                      <input type="checkbox" name="service" id="ser_9" value="" disabled />
                      <label htmlFor="ser_9" className='color-info'>국간망</label>
                      <input type="checkbox" name="service" id="ser_10" value="" disabled />
                      <label htmlFor="ser_10" className='color-info'>기간망</label>
                      <input type="checkbox" name="service" id="ser_11" value="" disabled />
                      <label htmlFor="ser_11" className='color-info'>기반</label>
                      <input type="checkbox" name="service" id="ser_12" value="" disabled />
                      <label htmlFor="ser_12" className='color-info'>기타</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>장애내용</th>
                  <td colSpan={3}>기술팀 인척_증폭기_[D869_9W]A02_74/123l</td>
                </tr>
                <tr>
                  <th scope='row'>파일첨부</th>
                  <td colSpan={3}><span className='ico_attach'>장애 등록건에 대하여.pdf</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
            <h3>장애 지역</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>장애 지역 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>장애 지역</caption>
              <colgroup>
                <col style={{ width: '15%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>장애 지역 및 가입자</th>
                  <td>
                    <div className='textarea'>
                      강원인프라팀/영동방송<br />
                      강원인프라팀/영동방송<br />
                      강원인프라팀/영동방송<br />
                      강원인프라팀/영동방송
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>가입자 수</th>
                  <td>
                    <div className='flex-wrap'>
                      <span className='input-wrap'>
                        <span>DTV</span>
                        <input type='text' value={0} readOnly />
                      </span>
                      <span className='input-wrap'>
                        <span>NET</span>
                        <input type='text' value={4} readOnly />
                      </span>
                      <span className='input-wrap'>
                        <span>VOIP</span>
                        <input type='text' value={6} readOnly />
                      </span>
                      <span className='input-wrap'>
                        <span>ATV</span>
                        <input type='text' value={0} readOnly />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[2] ? 'under-line' : ''}`}>
            <h3>기본 처리 정보</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>기본 처리 정보 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>기본 처리 정보</caption>
              <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '35%' }} />
                <col style={{ width: '15%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>등록번호</th>
                  <td>T23080700000151 </td>
                  <th scope='row'>접수자</th>
                  <td>CAMS</td>
                </tr>
                <tr>
                  <th scope='row'>상태</th>
                  <td>처리완료</td>
                  <th scope='row'>접수일시</th>
                  <td>2023-08-16 11:00:00</td>
                </tr>
                <tr>
                  <th scope='row'>장애유무</th>
                  <td>유</td>
                  <th scope='row'>장애등급</th>
                  <td>등급외</td>
                </tr>
                <tr>
                  <th scope='row'>동일장애체크</th>
                  <td colSpan={3}>
                    <input type='text' readOnly />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[3] ? 'under-line' : ''}`}>
            <h3>처리 복구 과정</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[3] ? 'close' : ''}`} onClick={() => handleDivToggle(3)} id='fold-open'>처리 복구 과정 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[3] ? 'hide' : ''} `}>
            <table className='table'>
              <caption>처리 복구 과정</caption>
              <colgroup>
                <col span={2} style={{ width: '50%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='col'>등록자</th>
                  <th scope='col'>복구 과정 내용</th>
                </tr>
                <tr>
                  <td>CAMS</td>
                  <td>GOEMT_46 복구</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[4] ? 'under-line' : ''}`}>
            <h3>상세 처리 결과</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[4] ? 'close' : ''}`} onClick={() => handleDivToggle(4)} id='fold-open'>상세 처리 결과 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[4] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>상세 처리 결과</caption>
              <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '35%' }} />
                <col style={{ width: '15%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>발생시간</th>
                  <td>Y</td>
                  <th scope='row'>복구시간(완료시간)</th>
                  <td>무중단</td>
                </tr>
                <tr>
                  <th scope='row'>장애시간</th>
                  <td></td>
                  <th scope='row'>장애귀책</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row'>장애 귀책 부서</th>
                  <td></td>
                  <th scope='row'>지식등록여부</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row'>장애 조치 코드</th>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <th scope='row'>처리 세부 내역</th>
                  <td colSpan={3}>/CAMS/모든 불량</td>
                </tr>
                <tr>
                  <th scope='row'>장애원인</th>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <th scope='row'>피해사항</th>
                  <td></td>
                  <th scope='row'>재발방지 조치대책</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[5] ? 'under-line' : ''}`}>
            <h3>투입 인력</h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[5] ? 'close' : ''}`} onClick={() => handleDivToggle(5)} id='fold-open'>투입 인력 열기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[5] ? 'hide' : ''} `}>
            <table className='table'>
              <caption>투입 인력</caption>
              <colgroup>
                <col span={2} style={{ width: '33%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='col'>회사/소속</th>
                  <th scope='col'>담당자</th>
                  <th scope='col'>사무실/핸드폰 번호</th>
                </tr>
                <tr>
                  <td>파트너스</td>
                  <td>홍길동</td>
                  <td>010-1234-5678</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PopupPortal>
  );
};
export default DisabilityMngDetail;
