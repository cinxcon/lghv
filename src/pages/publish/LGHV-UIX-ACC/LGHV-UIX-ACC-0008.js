import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Alert } from '../popup/Popup';

function AccEquipmentRegist() {
  const pagedata = {
    title: '접근제어',
    subtitle: '장비 등록',
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
  const [tempsave, setTempsave] = useState(false);
  const [regist, setRegist] = useState(false);

  //  토글
  const [divStates, setDivStates] = useState([false, false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };

  const [fileRows, setFileRows] = useState([]);
  const fileAddRow = () => {
    setFileRows([...fileRows, {}]);
  };
  const fileRemoveRow = () => {
    if (fileRows.length > 0) {
      const newRows = fileRows.slice(0, fileRows.length - 1);
      setFileRows(newRows);
    }
  };

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className="detail-top-btn-group">
        <button className='btn btn-pop' onClick={() => { onPopup('/popup/PopupApproval', 'Line', 1280, 800) }}>결제선 지정</button>
        <button className='btn btn-temp' onClick={() => { setTempsave(true) }}>임시저장</button>
      </div>
      <Alert open={tempsave} close={() => { setTempsave(false) }}>
        <div>임시 저장 합니다.</div>
      </Alert>
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
                  <textarea className='textarea-h80'></textarea>
                </td>
              </tr>
              <tr>
                <th scope='row'>기안 첨부</th>
                <td>
                  <div className='file-wrap'>
                    <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="파일첨부" />
                    <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                      <input type="text"className="i-file-name"id="noIndex1"title="파일첨부"readOnly=""/>
                      <span className="input-addon">
                        <label htmlFor="File" className="btn">찾아보기</label>
                      </span>
                      <span className="input-addon">
                        <button className="btn btn-low" onClick={fileAddRow}>추가</button>
                      </span>
                      <span className="input-addon">
                        <button className="btn btn-low" onClick={fileRemoveRow}>삭제</button>
                      </span>
                    </div>
                  </div>
                  {fileRows.map((fileRows, index) => (
                    <div className='file-wrap mt8' key={index}>
                      <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="파일첨부" />
                      <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                        <input type="text"className="i-file-name"id="noIndex1"title="파일첨부"readOnly=""/>
                        <span className="input-addon">
                          <label htmlFor="File" className="btn">찾아보기</label>
                        </span>
                        <span className="input-addon">
                        <button className="btn btn-low" onClick={fileAddRow}>추가</button>
                        </span>
                        <span className="input-addon">
                          <button className="btn btn-low" onClick={fileRemoveRow}>삭제</button>
                        </span>
                      </div>
                    </div>
                  ))}
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
          <div className='right btn-wrap'>
            <button className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupAccEqReg', 'AccEqReg', 1280, 800) }}>신규</button>
            <button className='btn btn-low btn-md btn-del' onClick={() => { onPopup('/popup/PopupAccEqDel', 'AccEqDel', 1280, 800) }}>삭제</button>
          </div>
          <table className='table table-row mt8'>
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
                <td><button className="btn-del-28">삭제</button></td>
                <td>InfraCore1</td>
                <td>102.15.222.44</td>
                <td>Linux</td>
                <td>프록시</td>
                <td><span className='color-new'>신규</span></td>
              </tr>
              <tr>
                <td><button className="btn-del-28">삭제</button></td>
                <td>InfraCore1</td>
                <td>102.15.222.44</td>
                <td>Linux</td>
                <td>프록시</td>
                <td><span className='color-delete'>삭제</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='detail-bottom-btn-group mt20 mb15'>
        <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
      </div>
      <Alert open={regist} close={() => { setRegist(false) }}>
        <div>기안을 등록하시겠습니까?</div>
      </Alert>
    </>
  )
}

export default AccEquipmentRegist;
