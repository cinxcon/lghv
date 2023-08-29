import { useState } from 'react';
import { createPortal } from 'react-dom';
import ContentTitle from '../layout/ContentTitle';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function AccEquipmentDetail() {
  const pagedata = {
    title: '접근제어 장비 정보',
    subtitle: '',
    SubMenu: 'yes',
    isDetail: 'yes'
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
        <ContentTitle data={pagedata} />
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
                <col style={{ width: '11%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>이름 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>InfraCore1</td>
                  <th scope='row'>IP 주소 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>102.15.222.44</td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'>기종 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={5}>Linux</td>
                </tr>
                <tr>
                  <th scope='row'>SSH 포트번호</th>
                  <td>22</td>
                  <th scope='row'>TELNET 포트번호</th>
                  <td>23</td>
                  <th scope='row'>FTP 포트번호</th>
                  <td>24</td>
                </tr>
                <tr>
                  <th scope='row'>접속계정이름</th>
                  <td>admin</td>
                  <th scope='row'>타임아웃(초)</th>
                  <td colSpan={3}>60</td>
                </tr>
                <tr>
                  <th scope='row'>접속 계정 키</th>
                  <td colSpan={5}>
                    <input type='text' disabled />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>쉘프롬프트정규표현</th>
                  <td colSpan={5}>
                    <input type='text' disabled />
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
                  <th scope='row'>접속 계정 로그인 <br/>테스트 무시</th>
                  <td>
                    <fieldset>
                      <legend>접속 계정 로그인 테스트 무시</legend>
                      <input type="radio" name="sudo" id="sudo_yes" checked readOnly />
                      <label htmlFor="sudo_yes">Y</label>
                      <input type="radio" name="sudo" id="sudo_no" disabled />
                      <label htmlFor="sudo_no">N</label>
                    </fieldset>
                  </td>
                  <th scope='row'>동시접속 세션 최대값</th>
                  <td>0</td>
                  <th scope='row'>조직</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>자산아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산이름</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산위치</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>구성아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>구성이름</th>
                  <td colSpan={3}><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={5}>테스트 등록</td>
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
                <col style={{ width: '11%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>이름 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>InfraCore5</td>
                  <th scope='row'>IP 주소 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>102.15.222.44</td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'>기종 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={5}>Windows</td>
                </tr>
                <tr>
                  <th scope='row'>RDP 포트번호</th>
                  <td>3366</td>
                  <th scope='row'>WinRM 포트번호</th>
                  <td>5897</td>
                  <th scope='row'>HTTPS사용여부</th>
                  <td>Y</td>
                </tr>
                <tr>
                  <th scope='row'>접속계정이름</th>
                  <td>admin</td>
                  <th scope='row'>타임아웃(초)</th>
                  <td colSpan={3}>80</td>
                </tr>
                <tr>
                  <th scope='row'>접속 계정 키</th>
                  <td colSpan={5}>
                    <input type='text' disabled />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>등록전용</th>
                  <td>N</td>
                  <th scope='row'>링크전용</th>
                  <td>N</td>
                  <th scope='row'>접속 계정 로그인 <br />테스트 무시</th>
                  <td>N</td>
                </tr>
                <tr>
                  <th scope='row'>동시접속 세션 최대값</th>
                  <td><input type='text' value={0} disabled /></td>
                  <th scope='row'>조직</th>
                  <td colSpan={3}><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>자산아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산이름</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산위치</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>구성아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>구성이름</th>
                  <td colSpan={3}><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={5}>테스트 등록</td>
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
              <caption>기종 Network 에 대한 장비 기본 정보</caption>
              <colgroup>
                <col style={{ width: '12%' }} />
                <col style={{ width: '21%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '21%' }} />
                <col style={{ width: '12%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>이름 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>InfraCore5</td>
                  <th scope='row'>IP 주소 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>102.15.222.44</td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'>기종 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={5}>Network</td>
                </tr>
                <tr>
                  <th scope='row'>SSH 포트번호</th>
                  <td>25</td>
                  <th scope='row'>TELNET 포트번호</th>
                  <td>26</td>
                  <th scope='row'>FTP 포트번호</th>
                  <td>27</td>
                </tr>
                <tr>
                  <th scope='row'>접속계정이름</th>
                  <td>root</td>
                  <th scope='row'>타임아웃(초)</th>
                  <td colSpan={3}>0</td>
                </tr>
                <tr>
                  <th scope='row'>접속 계정 키</th>
                  <td colSpan={5}>
                    <input type='text' disabled />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>쉘프롬프트정규표현</th>
                  <td colSpan={5}>
                    <input type='text' disabled />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>등록전용</th>
                  <td>N</td>
                  <th scope='row'>링크전용</th>
                  <td>N</td>
                  <th scope='row'>접속 계정 로그인 <br/>테스트 무시</th>
                  <td>N</td>
                </tr>
                <tr>
                  <th scope='row'>동시접속 세션 최대값</th>
                  <td colSpan={5}><input type='text' value={0} disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>계정동기화 스크립트</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>계정추가 스크립트</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>계정수정 스크립트</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>계정삭제 스크립트</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>계정비밀번호변경 <br/>스크립트</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>계정잠금 스크립트</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>계정잠금해제 스크립트</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>OS버전 스크립트</th>
                  <td colSpan={3}><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>조직</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산이름</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>자산위치</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>구성아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>구성이름</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={5}>테스트 등록</td>
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
              <caption>기종 Web 에 대한 장비 기본 정보</caption>
              <colgroup>
                <col style={{ width: '11%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '11%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>이름 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>InfraCore6</td>
                  <th scope='row'>IP 주소 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>102.15.222.44</td>
                  <th scope='row'>종류 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>프록시</td>
                </tr>
                <tr>
                  <th scope='row'>기종 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={5}>Web</td>
                </tr>
                <tr>
                  <th scope='row'>HTTPS 포트번호</th>
                  <td>2023</td>
                  <th scope='row'>프록시 Listen 주소 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={3}>55</td>
                </tr>
                <tr>
                  <th scope='row'>링크전용</th>
                  <td>N</td>
                  <th scope='row'>HTTP2 여부</th>
                  <td>N</td>
                  <th scope='row'>동시접속 세션 최대값</th>
                  <td><input type='text' value={0} disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>조직</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>자산이름</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>자산위치</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>구성아이디</th>
                  <td><input type='text' disabled /></td>
                  <th scope='row'>구성이름</th>
                  <td><input type='text' disabled /></td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={5}>테스트 등록</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 장비 연결 정보 */}
        <div className='content-section'>
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
                <col style={{ width: '11%' }} />
                <col style={{ width: '37%' }} />
                <col style={{ width: '11%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>사용자 그룹 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>group1</td>
                  <th scope='row'>장비에 속한 계정 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>admin</td>
                </tr>
                <tr>
                  <th scope='row'>활성화</th>
                  <td>Y</td>
                  <th scope='row'>접속 protocol <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <fieldset>
                      <legend>접속 protocol</legend>
                      <input type="checkbox" name="protocol" id="protocol_SSH" checked readOnly />
                      <label htmlFor="protocol_SSH">SSH</label>
                      <input type="checkbox" name="protocol" id="protocol_SFTP" disabled />
                      <label htmlFor="protocol_SFTP">SFTP</label>
                      <input type="checkbox" name="protocol" id="protocol_TELNET" checked readOnly />
                      <label htmlFor="protocol_TELNET">TELNET</label>
                      <input type="checkbox" name="protocol" id="protocol_FTP" checked readOnly />
                      <label htmlFor="protocol_FTP">FTP</label>
                      <input type="checkbox" name="protocol" id="protocol_RDP" disabled />
                      <label htmlFor="protocol_RDP">RDP</label>
                      <input type="checkbox" name="protocol" id="protocol_HTTPS" disabled />
                      <label htmlFor="protocol_HTTPS">HTTPS</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>시간유형 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={3}>2023-08-12 11:00 - 2023-08-12 23:00</td>
                </tr>
                <tr>
                  <th scope='row'>금칙어 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={3}>L0</td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={3}>장비 연결 정보</td>
                </tr>
              </tbody>
            </table>
            <table className='table table-row'>
              <caption>table caption</caption>
              <colgroup>
                <col style={{ width: '11%' }} />
                <col style={{ width: '37%' }} />
                <col style={{ width: '11%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>사용자 그룹 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>group2</td>
                  <th scope='row'>장비에 속한 계정 <span aria-label="required" className='color-primary'>*</span></th>
                  <td>root</td>
                </tr>
                <tr>
                  <th scope='row'>활성화</th>
                  <td>Y</td>
                  <th scope='row'>접속 protocol <span aria-label="required" className='color-primary'>*</span></th>
                  <td>
                    <fieldset>
                      <legend>접속 protocol</legend>
                      <input type="checkbox" name="protocol" id="protocol_SSH" checked readOnly />
                      <label htmlFor="protocol_SSH">SSH</label>
                      <input type="checkbox" name="protocol" id="protocol_SFTP" disabled />
                      <label htmlFor="protocol_SFTP">SFTP</label>
                      <input type="checkbox" name="protocol" id="protocol_TELNET" checked readOnly />
                      <label htmlFor="protocol_TELNET">TELNET</label>
                      <input type="checkbox" name="protocol" id="protocol_FTP" checked readOnly />
                      <label htmlFor="protocol_FTP">FTP</label>
                      <input type="checkbox" name="protocol" id="protocol_RDP" disabled />
                      <label htmlFor="protocol_RDP">RDP</label>
                      <input type="checkbox" name="protocol" id="protocol_HTTPS" disabled />
                      <label htmlFor="protocol_HTTPS">HTTPS</label>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>시간유형 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={3}>2023-08-12 11:00 - 2023-08-12 23:00</td>
                </tr>
                <tr>
                  <th scope='row'>금칙어 <span aria-label="required" className='color-primary'>*</span></th>
                  <td colSpan={3}>L2</td>
                </tr>
                <tr>
                  <th scope='row'>설명</th>
                  <td colSpan={3}>장비 연결 정보</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='center'>
          <button className='btn btn-lg btn-primary'>등록</button>
        </div>
      </div>
    </PopupPortal>
  )
}

export default AccEquipmentDetail;
