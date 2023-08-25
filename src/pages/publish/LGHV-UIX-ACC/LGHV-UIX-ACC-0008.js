/* eslint-disable */
import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup, Alert } from '../popup/Popup';

// LGHV-UIX-ACC-0008 장비 등록 AccEquipmentRegist
function AccEquipmentRegist() {
  const pagedata = {
    title: '접근제어',
    subtitle: '장비 등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  // 새창 팝업
  const onPopupLarge = (url, name, popupHeight) => {
    const popupWidth = 1280;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }

  // 팝업
  const [tempsave, setTempsave] = useState(false);

  //  토글
  const [divStates, setDivStates] = useState([false, false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <div className="detail-top-btn-group">
          <button className='btn btn-pop' onClick={() => { onPopupLarge('/popup/PopupLine', 'Line', 800) }}>결제선 지정</button>
          <button className='btn btn-temp' onClick={() => { setTempsave(true) }}>임시저장</button>
        </div>
        <Alert open={tempsave} close={() => { setTempsave(false) }}>
          <div>임시 저장 합니다.</div>
        </Alert>
      </div>
      {/* 결재선 지정 */}
      <div className='content-section'>
        <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
          <h3>결재</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>결재 열기</button>
          </div>
        </div>
        <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
          <div className='flex-wrap between align-start'>
              <table className='table half'>
                <caption>결제 라인 정보</caption>
                <colgroup>
                  <col style={{ width: '8%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '12%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '40%' }} />
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
                    <td>검토</td>
                    <td>박길동(aggdd)</td>
                    <td><span className='color-success'>승인</span></td>
                    <td>2023-01-02 11:00:00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>조정</td>
                    <td>박길동(aggdd)</td>
                    <td><span className='color-success'>승인</span></td>
                    <td>2023-01-02 11:00:00</td>
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
              <table className='table table-row half'>
                <caption>합의 수신 정보</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '90%' }} />
                </colgroup>
                <tbody>
                <tr>
                  <th scope='row'>합의</th>
                  <td>홍길동(123456), 박길동(aggdd)</td>
                </tr>
                <tr>
                  <th scope='row'>수신</th>
                  <td>김길동(bb3456), 홍길동(test)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='content-section'>
        <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
          <h3>장비 관리 기안</h3>
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
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope='row'>기안 내용</th>
                <td>
                  <textarea></textarea>
                </td>
              </tr>
              <tr>
                <th scope='row'>기안 첨부</th>
                <td>
                  <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="기안첨부" />
                  <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                    <input type="text"className="i-file-name"id="noIndex1"title="기안첨부"readOnly=""/>
                    <span className="input-addon">
                      <label htmlFor="File" className="btn">찾아보기</label>
                    </span>
                    <span className="input-addon">
                      <button className="btn btn-low">추가</button>
                    </span>
                    <span className="input-addon">
                      <button className="btn btn-low">삭제</button>
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
          <h3>접근제어 장비 신청 정보</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>장비 관리 기안 열기</button>
          </div>
        </div>
        <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
          <div className='right'>
            <button className='btn' onClick={() => { onPopupLarge('/popup/PopupAccEqReg', 'AccEqReg', 800) }}>신규</button>
            <button className='btn ml4' onClick={() => { onPopupLarge('/popup/PopupAccEqDel', 'AccEqDel', 800) }}>삭제</button>
          </div>
          <table className='table mt8'>
          <caption>접근제어 장비명 검색: 장비명, IP 주소, 기종, 종류, 상태</caption>
            <colgroup>
              <col style={{ width: '5%' }} />
              <col span={5} />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'><input type='checkbox' /></th>
                <th scope='col'>장비명</th>
                <th scope='col'>IP 주소</th>
                <th scope='col'>기종</th>
                <th scope='col'>종류</th>
                <th scope='col'>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button class="btn-del-28">삭제</button></td>
                <td>InfraCore1</td>
                <td>102.15.222.44</td>
                <td>Linux</td>
                <td>프록시</td>
                <td>신규</td>
              </tr>
              <tr>
                <td><button class="btn-del-28">삭제</button></td>
                <td>InfraCore1</td>
                <td>102.15.222.44</td>
                <td>Linux</td>
                <td>프록시</td>
                <td>삭제</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AccEquipmentRegist;
