import { useState } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

// 장비 등록
function PopupAccEqReg() {
  // SelectBox
  const optionEq1 = [
    { value: 'Linux', label: 'Linux' }
  ];
  const [eq1, setEq1] = useState(optionEq1[0]);
  const optionEq2 = [
    { value: 'Windows', label: 'Windows' }
  ];
  const [eq2, setEq2] = useState(optionEq2[0]);
  const optionEq3 = [
    { value: 'Network', label: 'Network' }
  ];
  const [eq3, setEq3] = useState(optionEq3[0]);
  const optionEq4 = [
    { value: 'Web', label: 'Web' }
  ];
  const [eq4, setEq4] = useState(optionEq4[0]);
  const optionEqType1 = [
    { value: '선택', label: '선택' }
  ];
  const [eqType1, setEqType1] = useState(optionEqType1[0]);
  const optionEqType2 = [
    { value: '선택', label: '선택' }
  ];
  const [eqType2, setEqType2] = useState(optionEqType2[0]);
  const optionEqType3 = [
    { value: '선택', label: '선택' }
  ];
  const [eqType3, setEqType3] = useState(optionEqType3[0]);
  const optionEqType4 = [
    { value: '선택', label: '선택' }
  ];
  const [eqType4, setEqType4] = useState(optionEqType4[0]);

  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  //  토글
  const [divStates, setDivStates] = useState([false, true, true, true, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
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
        <div className="content-title">
          <h2>접근제어 장비 신청 정보-신규</h2>
        </div>
        {/* 장비상세(Linux, HPUX, AIX, Solaris 시) */}
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
            <h3>장비 기본 정보 <span className='size-sm color-primary'>(Linux, HPUX, AIX, Solaris 시)</span></h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>장비 기본 정보 열기, 닫기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>기종 Linux, HPUX, AIX, Solaris에 대한 장비 기본 정보</caption>
              <colgroup>
                <col style={{ width: '12%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '10%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='userName' id='userName' placeholder='이름을 입력하세요' />
                  </td>
                  <th scope='row'><label htmlFor="ip">IP 주소</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='ip' id='ip' placeholder='IP 주소을 입력하세요' />
                  </td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eq1">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEq1[0]} value={eq1} onChange={setEq1} options={optionEq1} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="sshPort">SSH 포트번호</label></th>
                  <td>
                    <input type='text' name='sshPort' id='sshPort' />
                  </td>
                  <th scope='row'><label htmlFor="telnetPort">TELNET 포트번호</label></th>
                  <td>
                    <input type='text' name='telnetPort' id='telnetPort' />
                  </td>
                  <th scope='row'><label htmlFor="ftpPort">FTP 포트번호</label></th>
                  <td>
                    <input type='text' name='ftpPort' id='ftpPort' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="accName">접속계정이름</label></th>
                  <td>
                    <input type='text' name='accName' id='accName' />
                  </td>
                  <th scope='row'><label htmlFor="accPw">접속계정비밀번호</label></th>
                  <td>
                    <input type='text' name='accPw' id='accPw' />
                  </td>
                  <th scope='row'><label htmlFor="timeout">타임아웃(초)</label></th>
                  <td>
                    <input type='text' name='timeout' id='timeout' value={'60'} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="key">접속 계정 키</label></th>
                  <td colSpan={5}>
                    <input type='text' name='key' id='key' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="prompt">쉘프롬프트정규표현</label></th>
                  <td colSpan={5}>
                  <input type='text' name='prompt' id='prompt' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Sudo 사용자</th>
                  <td>
                    <fieldset>
                      <legend>Sudo 사용자</legend>
                      <input type="radio" name="sudo" id="sudo_yes" checked />
                      <label htmlFor="sudo_yes">Y</label>
                      <input type="radio" name="sudo" id="sudo_no" />
                      <label htmlFor="sudo_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>등록전용</th>
                  <td>
                    <fieldset>
                      <legend>등록전용</legend>
                      <input type="radio" name="reg" id="reg_yes" />
                      <label htmlFor="reg_yes">Y</label>
                      <input type="radio" name="reg" id="reg_no" checked />
                      <label htmlFor="reg_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link" id="link_yes" />
                      <label htmlFor="link_yes">Y</label>
                      <input type="radio" name="link" id="link_no" checked />
                      <label htmlFor="link_no">N</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>접속 계정 로그인 <br />테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="acclog" id="acclog_yes" />
                      <label htmlFor="acclog_yes">Y</label>
                      <input type="radio" name="acclog" id="acclog_no" checked />
                      <label htmlFor="acclog_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eqType1">기종타입</label></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEqType1[0]} value={eqType1} onChange={setEqType1} options={optionEqType1} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' className='textarea-h80'></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 장비상세(Windows 시) */}
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
            <h3>장비 기본 정보 <span className='size-sm color-primary'>(Windows 시)</span></h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>장비 기본 정보 열기, 닫기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>기종 Windows에 대한 장비 기본 정보</caption>
              <colgroup>
                <col style={{ width: '12%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '10%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='userName' id='userName' placeholder='이름을 입력하세요' />
                  </td>
                  <th scope='row'><label htmlFor="ip">IP 주소</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='ip' id='ip' placeholder='IP 주소을 입력하세요' />
                  </td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eq">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEq2[0]} value={eq2} onChange={setEq2} options={optionEq2} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="rdpPort">RDP 포트번호</label></th>
                  <td>
                    <input type='text' name='rdpPort' id='rdpPort' />
                  </td>
                  <th scope='row'><label htmlFor="WinRMPort">WinRM 포트번호</label></th>
                  <td>
                    <input type='text' name='WinRMPort' id='WinRMPort' />
                  </td>
                  <th scope='row'><label htmlFor="ftpPort">HTTPS사용여부</label></th>
                  <td>
                    <fieldset>
                      <legend>HTTPS사용여부</legend>
                      <input type="radio" name="https" id="https_yes" />
                      <label htmlFor="https_yes">Y</label>
                      <input type="radio" name="https" id="https_no" checked />
                      <label htmlFor="https_no">N</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="accName">접속계정이름</label></th>
                  <td>
                    <input type='text' name='accName' id='accName' />
                  </td>
                  <th scope='row'><label htmlFor="accPw">접속계정비밀번호</label></th>
                  <td>
                    <input type='text' name='accPw' id='accPw' />
                  </td>
                  <th scope='row'><label htmlFor="timeout">타임아웃(초)</label></th>
                  <td>
                    <input type='text' name='timeout' id='timeout' value={'60'} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="key">접속 계정 키</label></th>
                  <td colSpan={5}>
                    <input type='text' name='key' id='key' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>등록전용</th>
                  <td>
                    <fieldset>
                      <legend>등록전용</legend>
                      <input type="radio" name="reg2" id="reg_yes2" />
                      <label htmlFor="reg_yes2">Y</label>
                      <input type="radio" name="reg2" id="reg_no2" checked />
                      <label htmlFor="reg_no2">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link2" id="link_yes2" />
                      <label htmlFor="link_yes2">Y</label>
                      <input type="radio" name="link2" id="link_no2" checked />
                      <label htmlFor="link_no2">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>접속 계정 로그인 테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="acclog2" id="acclog_yes2" />
                      <label htmlFor="acclog_yes2">Y</label>
                      <input type="radio" name="acclog2" id="acclog_no2" checked />
                      <label htmlFor="acclog_no2">N</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eqType2">기종타입</label></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEqType2[0]} value={eqType2} onChange={setEqType2} options={optionEqType2} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' className='textarea-h80'></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 장비상세(Network 시) */}
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[2] ? 'under-line' : ''}`}>
            <h3>장비 기본 정보 <span className='size-sm color-primary'>(Network 시)</span></h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>장비 기본 정보 열기, 닫기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>기종 Network 대한 장비 기본 정보</caption>
              <colgroup>
                <col style={{ width: '13%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='userName' id='userName' placeholder='이름을 입력하세요' />
                  </td>
                  <th scope='row'><label htmlFor="ip">IP 주소</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='ip' id='ip' placeholder='IP 주소을 입력하세요' />
                  </td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eq">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEq3[0]} value={eq3} onChange={setEq3} options={optionEq3} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="sshPort">SSH 포트번호</label></th>
                  <td>
                    <input type='text' name='sshPort' id='sshPort' />
                  </td>
                  <th scope='row'><label htmlFor="telnetPort">TELNET 포트번호</label></th>
                  <td>
                    <input type='text' name='telnetPort' id='telnetPort' />
                  </td>
                  <th scope='row'><label htmlFor="ftpPort">FTP 포트번호</label></th>
                  <td>
                    <input type='text' name='ftpPort' id='ftpPort' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="accName">접속계정이름</label></th>
                  <td>
                    <input type='text' name='accName' id='accName' />
                  </td>
                  <th scope='row'><label htmlFor="accPw">접속계정비밀번호</label></th>
                  <td>
                    <input type='text' name='accPw' id='accPw' />
                  </td>
                  <th scope='row'><label htmlFor="timeout">타임아웃(초)</label></th>
                  <td>
                    <input type='text' name='timeout' id='timeout' value={'60'} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="key">접속 계정 키</label></th>
                  <td colSpan={5}>
                    <input type='text' name='key' id='key' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="prompt">쉘프롬프트정규표현</label></th>
                  <td colSpan={5}>
                  <input type='text' name='prompt' id='prompt' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>등록전용</th>
                  <td>
                    <fieldset>
                      <legend>등록전용</legend>
                      <input type="radio" name="reg3" id="reg_yes3" />
                      <label htmlFor="reg_yes3">Y</label>
                      <input type="radio" name="reg3" id="reg_no3" checked />
                      <label htmlFor="reg_no3">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link3" id="link_yes3" />
                      <label htmlFor="link_yes3">Y</label>
                      <input type="radio" name="link3" id="link_no3" checked />
                      <label htmlFor="link_no3">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>접속 계정 로그인 <br />테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="acclog3" id="acclog_yes3" />
                      <label htmlFor="acclog_yes3">Y</label>
                      <input type="radio" name="acclog3" id="acclog_no3" checked />
                      <label htmlFor="acclog_no3">N</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><lable htmlFor='accSync'>계정동기화 스크립트</lable></th>
                  <td>
                    <input type='text' name='accSync' id='accSync' />
                  </td>
                  <th scope='row'><label htmlFor="accAdd">계정추가 스크립트</label></th>
                  <td>
                    <input type='text' name='accAdd' id='accAdd' />
                  </td>
                  <th scope='row'><label htmlFor="accEdit">계정수정 스크립트</label></th>
                  <td>
                    <input type='text' name='accEdit' id='accEdit' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><lable htmlFor='accDel'>계정삭제 스크립트</lable></th>
                  <td>
                    <input type='text' name='accDel' id='accDel' />
                  </td>
                  <th scope='row'><label htmlFor="accPwChg">계정비밀번호변경 <br />스크립트</label></th>
                  <td>
                    <input type='text' name='accPwChg' id='accPwChg' />
                  </td>
                  <th scope='row'><label htmlFor="accLock">계정잠금 스크립트</label></th>
                  <td>
                    <input type='text' name='accLock' id='accLock' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><lable htmlFor='accUnLock'>계정잠금해제 스크립트</lable></th>
                  <td>
                    <input type='text' name='accUnLock' id='accUnLock' />
                  </td>
                  <th scope='row'><label htmlFor="os">OS버전 스크립트</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='os' id='os' />
                  </td>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eqType3">기종타입</label></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEqType3[0]} value={eqType3} onChange={setEqType3} options={optionEqType3} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' className='textarea-h80'></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 장비상세(Web 시) */}
        <div className='content-section'>
          <div className={`flex-wrap between ${divStates[3] ? 'under-line' : ''}`}>
            <h3>장비 기본 정보 <span className='size-sm color-primary'>(Web 시)</span></h3>
            <div className="btn-wrap">
              <button className={`btn-fold ${divStates[3] ? 'close' : ''}`} onClick={() => handleDivToggle(3)} id='fold-open'>장비 기본 정보 열기, 닫기</button>
            </div>
          </div>
          <div className={`toggle-box ${divStates[3] ? 'hide' : ''} `}>
            <table className='table table-row'>
              <caption>기종 Web 대한 장비 기본 정보</caption>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '12%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='userName' id='userName' placeholder='이름을 입력하세요' />
                  </td>
                  <th scope='row'><label htmlFor="ip">IP 주소</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='ip' id='ip' placeholder='IP 주소을 입력하세요' />
                  </td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eq">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEq4[0]} value={eq4} onChange={setEq4} options={optionEq4} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="httpsPort">HTTPS 포트번호</label></th>
                  <td>
                    <input type='text' name='httpsPort' id='httpsPort' />
                  </td>
                  <th scope='row'><label htmlFor="httpPort">HTTP 포트번호</label></th>
                  <td>
                    <input type='text' name='httpPort' id='httpPort' />
                  </td>
                  <th scope='row'><label htmlFor="proxy">프록시 Listen 주소</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='proxy' id='proxy' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link4" id="link_yes4" />
                      <label htmlFor="link_yes4">Y</label>
                      <input type="radio" name="link4" id="link_no4" checked />
                      <label htmlFor="link_no4">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>HTTP2 여부</th>
                  <td>
                    <fieldset>
                      <legend>HTTP2 여부</legend>
                      <input type="radio" name="http2" id="http2_yes" />
                      <label htmlFor="http2_yes">Y</label>
                      <input type="radio" name="http2" id="http2_no" checked />
                      <label htmlFor="http2_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="eqType4">기종타입</label></th>
                  <td className='bd-right-none'>
                    <Select defaultValue={optionEqType4[0]} value={eqType4} onChange={setEqType4} options={optionEqType4} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' className='textarea-h80'></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 장비 연결 정보 */}
        <div className='content-section mb24'>
          <div className={`flex-wrap between ${divStates[4] ? 'under-line' : ''}`}>
              <h3>장비 연결 정보</h3>
              <div className="btn-wrap">
                <button className={`btn-fold ${divStates[4] ? 'close' : ''}`} onClick={() => handleDivToggle(4)} id='fold-open'>장비 연결 정보 열기, 닫기</button>
              </div>
          </div>
          <div className='right'><button className='btn btn-md btn-low btn-del'>삭제</button></div>
          <div className={`mt8 toggle-box ${divStates[4] ? 'hide' : ''} `}>
            <table className='table table-row mb15'>
              <caption>table caption</caption>
              <colgroup>
                <col style={{ width: '12%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '12%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'><label htmlFor="userGroup">사용자 그룹</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <span className='input-btn-wrap'>
                      <input type='text' name='userGroup' id='userGroup' className='input_org input-search-front' />
                      <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupUserGroupSelect', 'UserGroupSelect', 1280, 800) }}>선택</button>
                    </span>
                  </td>
                  <th scope='row'><label htmlFor="eqOs">장비 OS 접속 계정</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <input type='text' name='eqOs' id='eqOs' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>활성화</th>
                  <td>
                    <fieldset>
                      <legend>활성화</legend>
                      <input type="radio" name="able" id="able_yes" checked />
                      <label htmlFor="able_yes">Y</label>
                      <input type="radio" name="able" id="able_no" />
                      <label htmlFor="able_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>접속 protocol <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <fieldset>
                      <legend>접속 protocol</legend>
                      <input type="checkbox" name="protocol" id="protocol_SSH" />
                      <label htmlFor="protocol_SSH">SSH</label>
                      <input type="checkbox" name="protocol" id="protocol_SFTP" />
                      <label htmlFor="protocol_SFTP">SFTP</label>
                      <input type="checkbox" name="protocol" id="protocol_TELNET" />
                      <label htmlFor="protocol_TELNET">TELNET</label>
                      <input type="checkbox" name="protocol" id="protocol_FTP" />
                      <label htmlFor="protocol_FTP">FTP</label>
                      <input type="checkbox" name="protocol" id="protocol_RDP" />
                      <label htmlFor="protocol_RDP">RDP</label>
                      <input type="checkbox" name="protocol" id="protocol_HTTPS" />
                      <label htmlFor="protocol_HTTPS">HTTPS</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={3}>
                    <textarea name='text' id='text'></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='right'><button className='btn btn-add'>연결 정보 추가</button></div>
          </div>
        </div>
        <div className='center'>
          <button className='btn btn-lg btn-primary'>등록</button>
        </div>
      </div>
    </PopupPortal>
  );
};

// 장비 삭제
function PopupAccEqDel() {
  // SelectBox
  const optionEq = [
    { value: 'Linux', label: 'Linux' }
  ];
  const [eq, setEq] = useState(optionEq[0]);
  const optionEqType = [
    { value: '선택', label: '선택' }
  ];
  const [eqType, setEqType] = useState(optionEqType[0]);
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>접근제어 장비 신청 정보-삭제</h2>
        </div>
        <div className='content-section'>
          <table className='table table-row'>
            <caption>장비 삭제</caption>
            <colgroup>
              <col style={{ width: '12%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '10%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <span className='input-btn-wrap'>
                      <input type='text' name='userId' id='userId' className='input-repeatcheck-front' />
                      <button className='btn btn-black'>장비조회</button>
                    </span>
                </td>
                <th scope='row'><label htmlFor="ip">IP 주소</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='ip' id='ip' value={'102.15.222.44'} readOnly />
                </td>
                <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                <td>프록시</td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="eq">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td className='bd-right-none'>
                  <Select defaultValue={optionEq[0]} value={eq} onChange={setEq} options={optionEq} className='react-select-container' classNamePrefix="react-select" isDisabled />
                </td>
                <td colSpan={4}></td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="sshPort">SSH 포트번호</label></th>
                <td>
                  <input type='text' name='sshPort' id='sshPort' value={'22'} readOnly />
                </td>
                <th scope='row'><label htmlFor="telnetPort">TELNET 포트번호</label></th>
                <td>
                  <input type='text' name='telnetPort' id='telnetPort' value={'21'} readOnly />
                </td>
                <th scope='row'><label htmlFor="ftpPort">FTP 포트번호</label></th>
                <td>
                  <input type='text' name='ftpPort' id='ftpPort' readOnly />
                </td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="accName">접속계정이름</label></th>
                <td>
                  <input type='text' name='accName' id='accName' readOnly />
                </td>
                <th scope='row'><label htmlFor="accPw">접속계정비밀번호</label></th>
                <td>
                  <input type='text' name='accPw' id='accPw' readOnly />
                </td>
                <th scope='row'><label htmlFor="timeout">타임아웃(초)</label></th>
                <td>
                  <input type='text' name='timeout' id='timeout' value={'60'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="key">접속 계정 키</label></th>
                <td colSpan={5}>
                  <input type='text' name='key' id='key' readOnly />
                </td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="prompt">쉘프롬프트정규표현</label></th>
                <td colSpan={5}>
                <input type='text' name='prompt' id='prompt' readOnly />
                </td>
              </tr>
              <tr>
                <th scope='row'>Sudo 사용자</th>
                <td>
                  <fieldset>
                    <legend>Sudo 사용자</legend>
                    <input type="radio" name="sudo" id="sudo_yes" checked readOnly />
                    <label htmlFor="sudo_yes">Y</label>
                    <input type="radio" name="sudo" id="sudo_no" disabled />
                    <label htmlFor="sudo_no">N</label>
                  </fieldset>
                </td>
                <th scope='row'>등록전용</th>
                <td>
                  <fieldset>
                    <legend>등록전용</legend>
                    <input type="radio" name="reg" id="reg_yes" disabled />
                    <label htmlFor="reg_yes">Y</label>
                    <input type="radio" name="reg" id="reg_no" checked readOnly />
                    <label htmlFor="reg_no">N</label>
                  </fieldset>
                </td>
                <th scope='row'>링크전용</th>
                <td>
                  <fieldset>
                    <legend>링크전용</legend>
                    <input type="radio" name="link" id="link_yes" disabled />
                    <label htmlFor="link_yes">Y</label>
                    <input type="radio" name="link" id="link_no" checked readOnly />
                    <label htmlFor="link_no">N</label>
                  </fieldset>
                </td>
              </tr>
              <tr>
                <th scope='row'>접속 계정 로그인 <br />테스트 무시</th>
                <td>
                  <fieldset>
                    <legend>접속 계정 로그인 테스트 무시</legend>
                    <input type="radio" name="acclog" id="acclog_yes" disabled />
                    <label htmlFor="acclog_yes">Y</label>
                    <input type="radio" name="acclog" id="acclog_no" checked readOnly />
                    <label htmlFor="acclog_no">N</label>
                  </fieldset>
                </td>
                <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                <td className='bd-right-none'>
                  <input type='text' name='session' id='session' value={0} disabled />
                </td>
                <td colSpan={2}></td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="eqType">기종타입</label></th>
                <td className='bd-right-none'>
                  <Select defaultValue={optionEqType[0]} value={eqType} onChange={setEqType} options={optionEqType} className='react-select-container' classNamePrefix="react-select" isDisabled />
                </td>
                <td colSpan={4}></td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="text">설명</label></th>
                <td colSpan={5}>
                  <div className='textarea-readonly'>테스트 입력</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='center'>
          <button className='btn btn-lg btn-primary'>삭제</button>
        </div>
      </div>
    </PopupPortal>
  );
};
export { PopupAccEqReg, PopupAccEqDel };
