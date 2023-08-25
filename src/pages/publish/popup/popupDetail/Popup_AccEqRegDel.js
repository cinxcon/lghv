import { useState } from 'react';
import { createPortal } from 'react-dom';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

// 장비 등록
function PopupAccEqReg() {
  const [startDate, setStartDate] = useState(null);
  const [endeDate, setEndeDate] = useState(null);
  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);

  const handleStartHourIncrease = () => {
    setStartHours(prevHours => (prevHours + 1) % 24);
  };
  const handleStartHourDecrease = () => {
    setStartHours(prevHours => (prevHours - 1 + 24) % 24);
  };
  const handleStartMinuteIncrease = () => {
    setStartMinutes(prevMinutes => (prevMinutes + 1) % 60);
  };
  const handleStartMinuteDecrease = () => {
    setStartMinutes(prevMinutes => (prevMinutes - 1 + 60) % 60);
  };
  const handleEndHourIncrease = () => {
    setEndHours(prevHours => (prevHours + 1) % 24);
  };
  const handleEndHourDecrease = () => {
    setEndHours(prevHours => (prevHours - 1 + 24) % 24);
  };
  const handleEndMinuteIncrease = () => {
    setEndMinutes(prevMinutes => (prevMinutes + 1) % 60);
  };
  const handleEndMinuteDecrease = () => {
    setEndMinutes(prevMinutes => (prevMinutes - 1 + 60) % 60);
  };

  // 데이터 리스트
  const [eqType1, setEqType1] = useState('Linux');
  const [eqType2, setEqType2] = useState('Window');
  const [eqType3, setEqType3] = useState('Network');
  const [eqType4, setEqType4] = useState('Web');
  const [banWord, setBanWord] = useState('');

  const handleEqTypeChange1 = (event) => {
    setEqType1(event.target.value);
  };
  const handleEqTypeChange2 = (event) => {
    setEqType2(event.target.value);
  };
  const handleEqTypeChange3 = (event) => {
    setEqType3(event.target.value);
  };
  const handleEqTypeChange4 = (event) => {
    setEqType4(event.target.value);
  };
  const handleBanWordChange = (event) => {
    setBanWord(event.target.value);
  };

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
                <col style={{ width: '10%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '10%' }} />
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
                  <th scope='row'><label htmlFor="type">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <input type="text" list="eqType1" value={eqType1} onChange={handleEqTypeChange1} />
                    <datalist id="eqType1">
                      <option value={'Linux'} />
                      <option value={'HPUX'} />
                      <option value={'AIX'} />
                      <option value={'Solaris'} />
                    </datalist>
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
                    <input type='text' name='timeout' id='timeout' />
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
                      <input type="radio" name="sudo" id="sudo_yes" />
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
                      <input type="radio" name="reg" id="reg_no" />
                      <label htmlFor="reg_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link" id="link_yes" />
                      <label htmlFor="link_yes">Y</label>
                      <input type="radio" name="link" id="link_no" />
                      <label htmlFor="link_no">N</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>접속 계정 로그인 테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="acclog" id="acclog_yes" />
                      <label htmlFor="acclog_yes">Y</label>
                      <input type="radio" name="acclog" id="acclog_no" />
                      <label htmlFor="acclog_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                  <th scope='row'><label htmlFor="org">조직</label></th>
                  <td>
                    <input type='text' name='org' id='org' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><lable htmlFor='assetId'>자산아이디</lable></th>
                  <td>
                    <input type='text' name='assetId' id='assetId' />
                  </td>
                  <th scope='row'><label htmlFor="assetName">자산이름</label></th>
                  <td>
                    <input type='text' name='assetName' id='assetName' />
                  </td>
                  <th scope='row'><label htmlFor="assetPos">자산위치</label></th>
                  <td>
                    <input type='text' name='assetPos' id='assetPos' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="compId">구성아이디</label></th>
                  <td>
                    <input type='text' name='compId' id='compId' />
                  </td>
                  <th scope='row'><label htmlFor="compName">구성이름</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='compName' id='compName' />
                  </td>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' style={{ height: '80px' }}></textarea>
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
                <col style={{ width: '10%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '10%' }} />
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
                  <th scope='row'><label htmlFor="type">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <input type="text" list="eqType2" value={eqType2} onChange={handleEqTypeChange2} />
                    <datalist id="eqType2">
                      <option value={'Windows'} />
                    </datalist>
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
                      <input type="radio" name="https" id="https_no" />
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
                    <input type='text' name='timeout' id='timeout' />
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
                      <input type="radio" name="reg" id="reg_yes" />
                      <label htmlFor="reg_yes">Y</label>
                      <input type="radio" name="reg" id="reg_no" />
                      <label htmlFor="reg_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link" id="link_yes" />
                      <label htmlFor="link_yes">Y</label>
                      <input type="radio" name="link" id="link_no" />
                      <label htmlFor="link_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>접속 계정 로그인 테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="acclog" id="acclog_yes" />
                      <label htmlFor="acclog_yes">Y</label>
                      <input type="radio" name="acclog" id="acclog_no" />
                      <label htmlFor="acclog_no">N</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                  <th scope='row'><label htmlFor="org">조직</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='org' id='org' />
                  </td>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th scope='row'><lable htmlFor='assetId'>자산아이디</lable></th>
                  <td>
                    <input type='text' name='assetId' id='assetId' />
                  </td>
                  <th scope='row'><label htmlFor="assetName">자산이름</label></th>
                  <td>
                    <input type='text' name='assetName' id='assetName' />
                  </td>
                  <th scope='row'><label htmlFor="assetPos">자산위치</label></th>
                  <td>
                    <input type='text' name='assetPos' id='assetPos' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="compId">구성아이디</label></th>
                  <td>
                    <input type='text' name='compId' id='compId' />
                  </td>
                  <th scope='row'><label htmlFor="compName">구성이름</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='compName' id='compName' />
                  </td>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' style={{ height: '80px' }}></textarea>
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
                <col style={{ width: '10%' }} />
                <col style={{ width: '23%' }} />
                <col style={{ width: '10%' }} />
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
                  <th scope='row'><label htmlFor="type">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <input type="text" list="eqType3" value={eqType3} onChange={handleEqTypeChange3} />
                    <datalist id="eqType3">
                      <option value={'Network'} />
                    </datalist>
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
                    <input type='text' name='timeout' id='timeout' />
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
                      <input type="radio" name="reg" id="reg_yes" />
                      <label htmlFor="reg_yes">Y</label>
                      <input type="radio" name="reg" id="reg_no" />
                      <label htmlFor="reg_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link" id="link_yes" />
                      <label htmlFor="link_yes">Y</label>
                      <input type="radio" name="link" id="link_no" />
                      <label htmlFor="link_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>접속 계정 로그인 테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="acclog" id="acclog_yes" />
                      <label htmlFor="acclog_yes">Y</label>
                      <input type="radio" name="acclog" id="acclog_no" />
                      <label htmlFor="acclog_no">N</label>
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
                  <th scope='row'><label htmlFor="accPwChg">계정비밀번호변경 스크립트</label></th>
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
                  <th scope='row'><label htmlFor="org">조직</label></th>
                  <td>
                    <input type='text' name='org' id='org' />
                  </td>
                  <th scope='row'><lable htmlFor='assetId'>자산아이디</lable></th>
                  <td>
                    <input type='text' name='assetId' id='assetId' />
                  </td>
                  <th scope='row'><label htmlFor="assetName">자산이름</label></th>
                  <td>
                    <input type='text' name='assetName' id='assetName' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="assetPos">자산위치</label></th>
                  <td>
                    <input type='text' name='assetPos' id='assetPos' />
                  </td>
                  <th scope='row'><label htmlFor="compId">구성아이디</label></th>
                  <td>
                    <input type='text' name='compId' id='compId' />
                  </td>
                  <th scope='row'><label htmlFor="compName">구성이름</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='compName' id='compName' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' style={{ height: '80px' }}></textarea>
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
                  <th scope='row'><label htmlFor="type">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <input type="text" list="eqType4" value={eqType4} onChange={handleEqTypeChange4} />
                    <datalist id="eqType4">
                      <option value={'Web'} />
                    </datalist>
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
                  <th scope='row'><label htmlFor="proxy">프록시 Listen 주소</label></th>
                  <td>
                    <input type='text' name='proxy' id='proxy' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>링크전용</th>
                  <td>
                    <fieldset>
                      <legend>링크전용</legend>
                      <input type="radio" name="link" id="link_yes" />
                      <label htmlFor="link_yes">Y</label>
                      <input type="radio" name="link" id="link_no" />
                      <label htmlFor="link_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>HTTP2 여부</th>
                  <td>
                    <fieldset>
                      <legend>HTTP2 여부</legend>
                      <input type="radio" name="http2" id="http2_yes" />
                      <label htmlFor="http2_yes">Y</label>
                      <input type="radio" name="http2" id="http2_no" />
                      <label htmlFor="http2_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='session' id='session' value={0} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="org">조직</label></th>
                  <td>
                    <input type='text' name='org' id='org' />
                  </td>
                  <th scope='row'><lable htmlFor='assetId'>자산아이디</lable></th>
                  <td>
                    <input type='text' name='assetId' id='assetId' />
                  </td>
                  <th scope='row'><label htmlFor="assetName">자산이름</label></th>
                  <td>
                    <input type='text' name='assetName' id='assetName' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="assetPos">자산위치</label></th>
                  <td>
                    <input type='text' name='assetPos' id='assetPos' />
                  </td>
                  <th scope='row'><label htmlFor="compId">구성아이디</label></th>
                  <td>
                    <input type='text' name='compId' id='compId' />
                  </td>
                  <th scope='row'><label htmlFor="compName">구성이름</label></th>
                  <td className='bd-right-none'>
                    <input type='text' name='compName' id='compName' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="text">설명</label></th>
                  <td colSpan={5}>
                    <textarea name='text' id='text' style={{ height: '80px' }}></textarea>
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
          <div className={`toggle-box ${divStates[4] ? 'hide' : ''} `}>
            <table className='table table-row mb15'>
              <caption>table caption</caption>
              <colgroup>
                <col style={{ width: '12%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '12%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'><label htmlFor="userGroup">사용자 그룹</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <span className='input-btn-wrap'>
                      <input type='text' name='userGroup' id='userGroup' className='input-sz50-front' />
                      <button className='btn btn-black'onClick={() => { onPopup('/popup/PopupUserGroupSelect', 'UserGroupSelect', 1280, 800) }}>선택</button>
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
                      <input type="radio" name="able" id="able_yes" />
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
                  <th scope='row'>시간유형 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={3}>
                    <div className='flex-wrap'>
                      <div className='flex-wrap'>
                        <DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" />
                          <div className='time-select'>
                              <input type="text" value={startHours} readOnly />
                              <span>
                                  <button onClick={handleStartHourIncrease}>▲</button>
                                  <button onClick={handleStartHourDecrease}>▼</button>
                              </span>
                          </div> :
                          <div className='time-select'>
                              <input type="text" value={startMinutes} readOnly />
                              <span>
                                  <button onClick={handleStartMinuteIncrease}>▲</button>
                                  <button onClick={handleStartMinuteDecrease}>▼</button>
                              </span>
                          </div>
                      </div>
                      <span className='ml15'>~</span>
                      <div className='flex-wrap ml15'>
                        <DatePicker locale={ko} selected={endeDate} onChange={(date) => setEndeDate(date)} dateFormat="yyyy-MM-dd" />
                        <div className='time-select'>
                            <input type="text" value={endHours} readOnly />
                            <span>
                                <button onClick={handleEndHourIncrease}>▲</button>
                                <button onClick={handleEndHourDecrease}>▼</button>
                            </span>
                        </div> :
                        <div className='time-select'>
                            <input type="text" value={endMinutes} readOnly />
                            <span>
                                <button onClick={handleEndMinuteIncrease}>▲</button>
                                <button onClick={handleEndMinuteDecrease}>▼</button>
                            </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'><label htmlFor="ban">금칙어</label> <span aria-label="required" className='color-primary'>*</span></th>
                  <td className='bd-right-none'>
                    <input type="text" list="banWord" value={banWord} onChange={handleBanWordChange} />
                    <datalist id="banWord">
                      <option value={'L0'} />
                      <option value={'L1'} />
                      <option value={'L2'} />
                    </datalist>
                  </td>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={3}>
                    <textarea name='text' id='text' style={{ height: '80px' }}></textarea>
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
  // 데이터 리스트
  const [eqType1, setEqType1] = useState('Linux');

  const handleEqTypeChange1 = (event) => {
    setEqType1(event.target.value);
  };
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>장비 삭제</h2>
        </div>
        <div className='content-section'>
          <table className='table table-row'>
            <caption>장비 삭제</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '23%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '23%' }} />
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
                <th scope='row'><label htmlFor="type">기종</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td className='bd-right-none'>
                  <input type="text" list="eqType1" value={eqType1} onChange={handleEqTypeChange1} readOnly />
                  <datalist id="eqType1">
                    <option value={'Linux'} />
                    <option value={'HPUX'} />
                    <option value={'AIX'} />
                    <option value={'Solaris'} />
                  </datalist>
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
                  <input type='text' name='timeout' id='timeout' readOnly />
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
                    <input type="radio" name="reg" id="reg_yes" checked readOnly />
                    <label htmlFor="reg_yes">Y</label>
                    <input type="radio" name="reg" id="reg_no" disabled />
                    <label htmlFor="reg_no">N</label>
                  </fieldset>
                </td>
                <th scope='row'>링크전용</th>
                <td>
                  <fieldset>
                    <legend>링크전용</legend>
                    <input type="radio" name="link" id="link_yes" checked readOnly />
                    <label htmlFor="link_yes">Y</label>
                    <input type="radio" name="link" id="link_no" disabled />
                    <label htmlFor="link_no">N</label>
                  </fieldset>
                </td>
              </tr>
              <tr>
                <th scope='row'>접속 계정 로그인 테스트 무시</th>
                <td>
                  <fieldset>
                    <legend>접속 계정 로그인 테스트 무시</legend>
                    <input type="radio" name="acclog" id="acclog_yes" checked readOnly />
                    <label htmlFor="acclog_yes">Y</label>
                    <input type="radio" name="acclog" id="acclog_no" disabled />
                    <label htmlFor="acclog_no">N</label>
                  </fieldset>
                </td>
                <th scope='row'><label htmlFor="session">동시접속 세션 최대값</label></th>
                <td>
                  <input type='text' name='session' id='session' value={0} disabled />
                </td>
                <th scope='row'><label htmlFor="org">조직</label></th>
                <td>
                  <input type='text' name='org' id='org' disabled />
                </td>
              </tr>
              <tr>
                <th scope='row'><lable htmlFor='assetId'>자산아이디</lable></th>
                <td>
                  <input type='text' name='assetId' id='assetId' disabled />
                </td>
                <th scope='row'><label htmlFor="assetName">자산이름</label></th>
                <td>
                  <input type='text' name='assetName' id='assetName' disabled />
                </td>
                <th scope='row'><label htmlFor="assetPos">자산위치</label></th>
                <td>
                  <input type='text' name='assetPos' id='assetPos' disabled />
                </td>
              </tr>
              <tr>
                <th scope='row'><label htmlFor="compId">구성아이디</label></th>
                <td>
                  <input type='text' name='compId' id='compId' disabled />
                </td>
                <th scope='row'><label htmlFor="compName">구성이름</label></th>
                <td className='bd-right-none'>
                  <input type='text' name='compName' id='compName' disabled />
                </td>
                <td colSpan={2}></td>
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
          <button className='btn btn-lg btn-primary'>등록</button>
        </div>
      </div>
    </PopupPortal>
  );
};
export { PopupAccEqReg, PopupAccEqDel };
