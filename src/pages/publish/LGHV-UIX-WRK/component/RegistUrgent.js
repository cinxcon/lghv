import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import TooltipMsg from '../../tooltip/tooltip';
import TooltipMsgWorkType from '../tooltipDetail/tooltip_worktype';
import { Popup } from '../../popup/Popup';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import Select from 'react-select';

function UrgentWork() {
//   const [cancle, setCancle] = useState(false);
  const [regist, setRegist] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endeDate, setEndeDate] = useState(null);

  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);
  const [diviceRows, setDiviceRows] = useState([]);
  const [vendorRows, setVendorRows] = useState([]);
  const [fileRows, setFileRows] = useState([]);
  const [selectedOption, setSelectedOption] = useState('access_no');

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
  const diviceAddRow = () => {
    setDiviceRows([...diviceRows, {}]);
  };
  const diviceRemoveRow = () => {

  };
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupWidth = width;
    const popupHeight = height;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }
  const fileAddRow = () => {
    setFileRows([...fileRows, {}]);
  };
  const fileRemoveRow = () => {
    if (fileRows.length > 0) {
      const newRows = fileRows.slice(0, fileRows.length - 1);
      setFileRows(newRows);
    }
  };

  const venderAddRow = () => {
    setVendorRows([...vendorRows, {}]);
  };
  const venderRemoveRow = () => {
    if (vendorRows.length > 0) {
      const newRows = vendorRows.slice(0, vendorRows.length - 1);
      setVendorRows(newRows);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  //  토글
  const [divStates, setDivStates] = useState([false, false, false, false, false, false]);

  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };

  // 셀렉트 박스
  const optionsIfraType = [
    { value: 'all', label: '전체' },
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];
  const optionsSoType = [
    { value: 'all', label: '전체' },
    { value: 'so', label: 'SO' }
  ];
  const optionsWorkType = [
    { value: 'all', label: '전체' },
    { value: '기반', label: '기반' },
    { value: '시스템', label: '시스템' },
    { value: 'H/E', label: 'H/E' },
    { value: '전송망', label: '전송망' },
    { value: '기간망', label: '기간망' }
  ];
  const optionsPresence = [
    { value: 'all', label: '전체' },
    { value: '입회', label: '입회' },
    { value: '미입회', label: '미입회' }
  ];
  const optionsAccessPolicy = [
    { value: 'all', label: '전체' },
    { value: 'L0', label: 'L0' },
    { value: 'L1', label: 'L1' },
    { value: 'L2', label: 'L2' }
  ];
  const optionsUserGroup = [
    { value: 'all', label: '전체' }
  ];
  const optionsUser = [
    { value: 'all', label: '전체' }
  ];
  const optionsUseDevice = [
    { value: 'all', label: '전체' }
  ];

  const [infraType, setInfraType] = useState(optionsIfraType[0]);
  const [workType, setWorkType] = useState(optionsWorkType[0]);
  const [soType, setSoType] = useState(optionsSoType[0]);
  const [presenceType, setPresence] = useState(optionsPresence[0]);
  const [accessPolicy, setAccessPolicy] = useState(optionsAccessPolicy[0]);
  const [userGroup, setUserGroup] = useState(optionsUserGroup[0]);
  const [user, setUser] = useState(optionsUser[0]);
  const [useDevice, setUseDevice] = useState(optionsUseDevice[0]);

  return (
  <>
   {/* 결제선 저장 시 나타나는 항목 */}
   <div className='content-section' id='approval-line'>
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
                    <td>홍길동(009900)</td>
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
    {/* 결제선 저장 시 나타나는 항목 끝 */}
    <div className='content-section'>
        <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
            <h3>작업 개요 <span className='color-primary size-sm'>(*) 검토자 : 권역별 작업담당자 선택</span></h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>작업 개요 열기</button>
            </div>
        </div>
        <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
            <table className='table table-row'>
                <caption>작업 개요 정보</caption>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '40%' }} />
                </colgroup>
                <tbody>
                <tr>
                    <th scope='row'>구분 <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <fieldset>
                            <legend>대상 서비스</legend>
                            <input type="radio" name="access-control" id="control_no" value="access_no" checked={selectedOption === 'access_no'} onChange={handleOptionChange} />
                            <label htmlFor="control_no">비접근제어</label>
                            <input type="radio" name="access-control" id="control_yes" value="access_yes" checked={selectedOption === 'access_yes'} onChange={handleOptionChange} />
                            <label htmlFor="control_yes">접근제어</label>
                        </fieldset>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>인프라팀/SO <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <div className='flex-wrap between'>
                            <span className='half'>
                                <Select defaultValue={optionsIfraType[0]} value={infraType} onChange={setInfraType} options={optionsIfraType} className='react-select-container' classNamePrefix="react-select" />
                            </span>
                            <span className='half'>
                                <Select defaultValue={optionsSoType[0]} value={soType} onChange={setSoType} options={optionsSoType} className='react-select-container' classNamePrefix="react-select" />
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>제목 <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <input type='text' name='title' id='title' placeholder='작업제목' />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>요청자</th>
                    <td>홍길동</td>
                    <th scope='row'>검토자 <span className='color-primary'>*</span></th>
                    <td>
                        <div className='flex-wrap between'>
                            <span className='input-btn-wrap'>
                                <span className='input input_org input-search-front'></span>
                                {/* <button className='btn btn-black btn-search ml10' onClick={() => { onPopup('/popup/PopupReviewer', 'Reviewer', '1200', '800') }}>선택</button> */}
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>대상 서비스  <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <fieldset>
                            <legend>대상 서비스</legend>
                            <input type="checkbox" name="service" id="ser_1" value="" />
                            <label htmlFor="ser_1">DTV</label>
                            <input type="checkbox" name="service" id="ser_2" value="" />
                            <label htmlFor="ser_2">NET</label>
                            <input type="checkbox" name="service" id="ser_3" value="" />
                            <label htmlFor="ser_3">VOIP</label>
                            <input type="checkbox" name="service" id="ser_4" value="" />
                            <label htmlFor="ser_4">ATV</label>
                            <input type="checkbox" name="service" id="ser_5" value="" />
                            <label htmlFor="ser_5" className='color-info'>VOD</label>
                            <input type="checkbox" name="service" id="ser_6" value="" />
                            <label htmlFor="ser_6" className='color-info'>ESS</label>
                            <input type="checkbox" name="service" id="ser_7" value="" />
                            <label htmlFor="ser_7" className='color-info'>클라우드</label>
                            <input type="checkbox" name="service" id="ser_8" value="" />
                            <label htmlFor="ser_8" className='color-info'>전송망</label>
                            <input type="checkbox" name="service" id="ser_9" value="" />
                            <label htmlFor="ser_9" className='color-info'>국간망</label>
                            <input type="checkbox" name="service" id="ser_10" value="" />
                            <label htmlFor="ser_10" className='color-info'>기간망</label>
                            <input type="checkbox" name="service" id="ser_11" value="" />
                            <label htmlFor="ser_11" className='color-info'>기반</label>
                            <input type="checkbox" name="service" id="ser_12" value="" />
                            <label htmlFor="ser_12" className='color-info'>기타</label>
                            <input type="checkbox" name="service" id="ser_13" value="" />
                            <label htmlFor="ser_13" className='color-info'>전체</label>
                        </fieldset>
                        <ul className='list-desc'>
                            <li className='color-info'>청색 표기 대상 서비스만 선택 할 경우, 작업대상 지역은 [해당없음]으로 지정하십시오.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>작업구분  <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <fieldset>
                            <legend>작업구분</legend>
                            <input type="radio" name="pre-approved" id="infra_approved" value="" defaultChecked={true} />
                            <label htmlFor="infra_approved">인프라팀 전결</label>
                            <input type="radio" name="pre-approved" id="platform_approved" value="" />
                            <label htmlFor="platform_approved">플랫폼 운영담당 전결</label>
                        </fieldset>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>
                    <div className='tooltip-area'>
                        작업 유형 <span className='color-primary'>*</span>
                        <TooltipMsg message={ <TooltipMsgWorkType /> } ><button className='btn-tooltip'>tooltip?</button></TooltipMsg>
                    </div>
                    </th>
                    <td>
                    <Select defaultValue={optionsWorkType[0]} value={workType} onChange={setWorkType} options={optionsWorkType} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                    <th scope='row'>작업입회 여부</th>
                    <td>
                    <Select defaultValue={optionsPresence[0]} value={presenceType} onChange={setPresence} options={optionsPresence} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>CAMS 공지여부 <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                    <fieldset>
                        <legend>공지여부</legend>
                        <input type="radio" name="pre-notice" id="notice_yes" value="" defaultChecked={true} />
                        <label htmlFor="notice_yes">공지</label>
                        <input type="radio" name="pre-notice" id="notice_no" value="" />
                        <label htmlFor="notice_no">미공지</label>
                    </fieldset>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>작업 내용</th>
                    <td colSpan={3}>
                        <div className='work-content'>
                            <div className='btn-wrap'>
                                <button type='button' className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupTemplate', 'Template', '1200', '800') }}>템플릿 불러오기</button>
                            </div>
                            <div className='template'>
                                <CKEditor
                                editor={ CustomEditor }
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={ editor => {
                                // You can store the "editor" and use when it is needed
                                  console.log('Editor is ready to use!', editor);
                                } }
                                onChange={ (event, editor) => {
                                  const data = editor.getData();
                                  console.log({ event, editor, data });
                                } }
                                onBlur={ (event, editor) => {
                                  console.log('Blur.', editor);
                                } }
                                onFocus={ (event, editor) => {
                                  console.log('Focus.', editor);
                                } }
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>파일첨부</th>
                    <td colSpan={3}>
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
                        <ul className='list-desc'>
                            <li>구성도, 상세 시나리오 등을 첨부(예시)</li>
                            <li className='color-primary'>업로드 할 수 있는 파일의 용량은 총 20MB 입니다.</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className='content-section'>
        <div className={`flex-wrap between ${divStates[2] ? 'under-line' : ''}`}>
            <h3>작업 대상 지역 및 장애범위  <span className='color-primary'>*</span></h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>작업 대상 지역 및 장애범위 열기</button>
            </div>
        </div>
        <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
            <div className="btn-wrap right mb15">
                <button type='button' className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupCell', 'cell', '1200', '800') }}>CELL 등록</button>
            </div>
            <table className='table'>
                <caption>table caption</caption>
                <colgroup>
                <col span={7} />
                </colgroup>
                <thead>
                <tr>
                    <th scope='col' rowSpan={2}>SO</th>
                    <th scope='col' rowSpan={2}>CELL / 기기 / 광</th>
                    <th scope='col' colSpan={4}>가입서비스</th>
                    <th scope='col' rowSpan={2}>가입자</th>
                </tr>
                <tr>
                    <th scope='col' className='color-primary'>DTV</th>
                    <th scope='col' className='color-primary'>NET</th>
                    <th scope='col' className='color-primary'>VOIP</th>
                    <th scope='col' className='color-primary'>ATV</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className='content-section'>
        <div className={`flex-wrap between ${divStates[3] ? 'under-line' : ''}`}>
            <h3>세부작업 절차  <span className='color-primary'>*</span></h3>
                <div className="btn-wrap">
                    <button className={`btn-fold ${divStates[3] ? 'close' : ''}`} onClick={() => handleDivToggle(3)} id='fold-open'>세부작업 절차 열기</button>
                </div>
            </div>
        <div className={`toggle-box ${divStates[3] ? 'hide' : ''} `}>
            <table className='table table-row'>
                <caption>table caption</caption>
                <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                </colgroup>
                <tbody>
                <tr>
                    <th scope='row'>일정</th>
                    <td colSpan={3}>
                        <div className='flex-wrap'>
                            <div className='date-time-wrap'>
                                <DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" />
                                    <div className='time-select'>
                                        <input type="text" value={startHours} readOnly />
                                        <span>
                                            <button onClick={handleStartHourIncrease}>증가</button>
                                            <button onClick={handleStartHourDecrease} className='down'>감소</button>
                                        </span>
                                    </div> :
                                    <div className='time-select'>
                                        <input type="text" value={startMinutes} readOnly />
                                        <span>
                                            <button onClick={handleStartMinuteIncrease}>증가</button>
                                            <button onClick={handleStartMinuteDecrease} className='down'>감소</button>
                                        </span>
                                    </div>
                            </div>
                            <span className='ml15'>~</span>
                            <div className='date-time-wrap ml15'>
                                <DatePicker locale={ko} selected={endeDate} onChange={(date) => setEndeDate(date)} dateFormat="yyyy-MM-dd" />
                                    <div className='time-select'>
                                        <input type="text" value={endHours} readOnly />
                                        <span>
                                            <button onClick={handleEndHourIncrease}>증가</button>
                                            <button onClick={handleEndHourDecrease} className='down'>감소</button>
                                        </span>
                                    </div> :
                                    <div className='time-select'>
                                        <input type="text" value={endMinutes} readOnly />
                                        <span>
                                            <button onClick={handleEndMinuteIncrease}>증가</button>
                                            <button onClick={handleEndMinuteDecrease} className='down'>감소</button>
                                        </span>
                                    </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>기업자 영향</th>
                    <td>
                        <fieldset>
                            <legend>가입자영향</legend>
                            <input type="radio" name="pre-effect" id="effect_yes" value="" defaultChecked={true} />
                            <label htmlFor="effect_yes">Y</label>
                            <input type="radio" name="pre-effect" id="effect_no" value="" />
                            <label htmlFor="effect_no">N</label>
                        </fieldset>
                    </td>
                    <th scope='row'>장애시간</th>
                    <td>
                        <fieldset>
                            <legend>가입자영향</legend>
                            <input type="radio" name="disconnected-state" id="uninterrupted" value="" defaultChecked={true} />
                            <label htmlFor="uninterrupted">무중단</label>
                            <input type="radio" name="disconnected-state" id="momentary_disconnection" value="" />
                            <label htmlFor="momentary_disconnection">순단</label>
                            <input type="radio" name="disconnected-state" id="discontinued" value="" />
                            <label htmlFor="discontinued">중단</label>
                            ( <input type='text' name='uninterrupted_time' id='uninterrupted_time' style={{ width: '40px', height: '22px' }} /> 분 )
                        </fieldset>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>작업내용</th>
                    <td colSpan={3}>
                        <input type='text' name='work-content' id='work_content' />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>작업세부</th>
                    <td colSpan={3}>
                       <span className='input-btn-wrap'>
                       <span className='input input_org input-search-front'></span>
                        <button className='btn btn-black btn-search' onClick={() => { onPopup('/popup/PopupWorkDeteail', 'workDeteail', '460', '700') }}>작업세부 찾기</button>
                       </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className='content-section'>
        <div className={`flex-wrap between ${divStates[4] ? 'under-line' : ''}`}>
            <h3>작업자 정보 <span className='color-primary'>*</span></h3>
                <div className="btn-wrap">
                    <button className={`btn-fold ${divStates[4] ? 'close' : ''}`} onClick={() => handleDivToggle(4)} id='fold-open'>작업자 정보 열기</button>
                </div>
            </div>
        <div className={`toggle-box ${divStates[4] ? 'hide' : ''} `}>
            <table className='table table-row'>
                <caption>작업자 정보</caption>
                {selectedOption === 'access_no' && (
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '90%' }} />
                </colgroup>)}
                {selectedOption === 'access_yes' && (
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '30%' }} />
                </colgroup>)}
                <tbody>
                {selectedOption === 'access_no' && (
                <tr>
                    <th>작업자</th>
                    <td>
                        <div className='input-btn-wrap'>
                            <select name='work_list' id='work_list' multiple className='worker-box over-flow-y'>
                                <option>동부미디어국/홍길동/010-2345-6789</option>
                                <option>동부미디어국/홍길동/010-2345-6789</option>
                                <option>동부미디어국/홍길동/010-2345-6789</option>
                                <option>동부미디어국/홍길동/010-2345-6789</option>
                            </select>
                            <div>
                                <button type='button' className='btn-plus-28' onClick={() => { onPopup('/popup/PopupWorker', 'workDeteail', '1280', '800') }}>작업자 팝업 열기</button><br />
                                <button type='button' className='btn-minus-28 mt6'>빼기</button>
                            </div>
                        </div>
                    </td>
                </tr>)}
                {selectedOption === 'access_yes' && (
                <tr>
                    <th>사용자 그룹 <span className='color-primary'>*</span></th>
                    <td>
                        <Select defaultValue={optionsUserGroup[0]} value={userGroup} onChange={setUserGroup} options={optionsUserGroup} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                    <th>사용자</th>
                    <td>
                        <Select defaultValue={optionsUser[0]} value={user} onChange={setUser} options={optionsUser} className='react-select-container' classNamePrefix="react-select" />
                    </td>
                    <th>장비<button type='button' className='btn btn-low ml10'>예외</button></th>
                    <td>
                        <span className="input-btn-wrap">
                         <Select defaultValue={optionsUseDevice[0]} value={useDevice} onChange={setUseDevice} options={optionsUseDevice} styles={{ width: '80%' }} className='react-select-container' classNamePrefix="react-select" />
                         <button type="button" className="btn btn-add" onClick={diviceAddRow}>추가</button>
                        </span>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
            {selectedOption === 'access_yes' && (
            <div className='device-list'>
            <div className='flex-wrap between'>
                <div>총 2개</div>
                <div className='btn-wrap'>
                    <button type='button' name='worker-delete' id='worker_delete' className='btn btn-md btn-low btn-copy'>복사</button>
                    <button type='button' name='worker-delete' id='worker_delete' className='btn btn-md btn-low btn-del' onClick={diviceRemoveRow}>삭제</button>
                </div>
            </div>
            <div className='worker-list-wrap over-flow-x over-flow-y'>
                <div className='flex-wrap align-start' style={{ width: '130%' }}>
                    <table className='table mt8 fix-table' style={{ width: '30%' }}>
                        <caption>고정 영역</caption>
                        <colgroup>
                            <col span={5} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope='col' rowSpan={2}></th>
                                <th scope='col' rowSpan={2}>사용자부서</th>
                                <th scope='col' rowSpan={2}>사용자</th>
                                <th scope='col' rowSpan={2}>장비</th>
                                <th scope='col' rowSpan={2}>OS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" name="list_1" id="list_1" value="" />
                                    <label htmlFor="list_1"></label>
                                </td>
                                <td>호남인프라</td>
                                <td>
                                홍길동 Hong
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>Infra Core1</option>
                                    </select>
                                </td>
                                <td>Linux</td>
                        </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" name="list_2" id="list_2" value="" />
                                    <label htmlFor="list_2"></label>
                                </td>
                                <td>호남인프라</td>
                                <td>
                                홍길동 Hong
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>Infra Core1</option>
                                    </select>
                                </td>
                                <td>Linux</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" name="list_3" id="list_3" value="" />
                                    <label htmlFor="list_3"></label>
                                </td>
                                <td>호남인프라</td>
                                <td>
                                홍길동 Hong
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>Infra Core1</option>
                                    </select>
                                </td>
                                <td>Linux</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" name="list_4" id="list_4" value="" />
                                    <label htmlFor="list_4"></label>
                                </td>
                                <td>호남인프라</td>
                                <td>
                                홍길동 Hong
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>Infra Core1</option>
                                    </select>
                                </td>
                                <td>Linux</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table mt8" style={{ width: '100%' }}>
                        <caption>장비목록</caption>
                        <colgroup>
                            <col span={8} style={{ width: '5%' }} />
                            <col span={4} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope='col' ></th>
                                <th scope='col' colSpan={7}>접속Protocol</th>
                                <th scope='col' rowSpan={2}>Protocol <br />접속계정</th>
                                <th scope='col'>접근정책</th>
                                <th scope='col'>시작일시</th>
                                <th scope='col'>종료일시</th>
                                </tr>
                                <tr>
                                <td scope='col'>
                                    All
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_1" id="ck_1" value="" checked />
                                    <label htmlFor="ck_1"></label>
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_2" id="ck_2" value="" checked />
                                    <label htmlFor="ck_2"></label>
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_3" id="ck_3" value="" checked />
                                    <label htmlFor="ck_3"></label>
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_4" id="ck_4" value="" checked />
                                    <label htmlFor="ck_4"></label>
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_5" id="ck_5" value="" checked />
                                    <label htmlFor="ck_5"></label>
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_6" id="ck_6" value="" checked />
                                    <label htmlFor="ck_6"></label>
                                </td>
                                <td scope='col'>
                                    <input type="checkbox" name="ck_7" id="ck_7" value="" checked />
                                    <label htmlFor="ck_7"></label>
                                </td>
                                <td scope='col'>
                                    <div className='input-btn-wrap'>
                                        <Select defaultValue={optionsAccessPolicy[0]} value={accessPolicy} onChange={setAccessPolicy} options={optionsAccessPolicy} className='react-select-container' classNamePrefix="react-select" menuPosition={'fixed'} />
                                        <button type='button' className='btn btn-md'>적용</button>
                                    </div>
                                </td>
                                <td scope='col'>
                                    <div className='date-time-wrap sm'>
                                            <DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" className='time' />
                                                <div className='time-select'>
                                                    <input type="text" value={startHours} readOnly />
                                                    <span>
                                                        <button onClick={handleStartHourIncrease}>증가</button>
                                                        <button onClick={handleStartHourDecrease} className='down'>감소</button>
                                                    </span>
                                                </div> :
                                                <div className='time-select'>
                                                    <input type="text" value={startMinutes} readOnly />
                                                    <span>
                                                        <button onClick={handleStartMinuteIncrease}>증가</button>
                                                        <button onClick={handleStartMinuteDecrease} className='down'>감소</button>
                                                    </span>
                                                </div>
                                        </div>
                                    <button type='button' className='btn btn-md'>적용</button>
                                </td>
                                <td scope='col'>
                                    <div className='date-time-wrap sm'>
                                            <DatePicker locale={ko} selected={endeDate} onChange={(date) => setEndeDate(date)} dateFormat="yyyy-MM-dd" />
                                                <div className='time-select'>
                                                    <input type="text" value={endHours} readOnly />
                                                    <span>
                                                        <button onClick={handleEndHourIncrease}>증가</button>
                                                        <button onClick={handleEndHourDecrease} className='down'>감소</button>
                                                    </span>
                                                </div> :
                                                <div className='time-select'>
                                                    <input type="text" value={endMinutes} readOnly />
                                                    <span>
                                                        <button onClick={handleEndMinuteIncrease}>증가</button>
                                                        <button onClick={handleEndMinuteDecrease} className='down'>감소</button>
                                                    </span>
                                                </div>
                                        </div>
                                    <button type='button' className='btn btn-md'>적용</button>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" name="all_1" id="all_1" value="" checked/>
                                    <label htmlFor="all_1"></label>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="checkbox" name="protocol" id="ptc_4" value="" checked />
                                    <label htmlFor="ptc_4">SSH</label>
                                </td>
                                <td>
                                    <input type="checkbox" name="protocol" id="ptc_5" value="" checked />
                                    <label htmlFor="ptc_5">Telnet</label>
                                </td>
                                <td>
                                    <input type="checkbox" name="protocol" id="ptc_6" value="" checked />
                                    <label htmlFor="ptc_6">SFTP</label>
                                </td>
                                <td>
                                    <input type="checkbox" name="protocol" id="ptc_7" value="" checked />
                                    <label htmlFor="ptc_7">FTP</label>
                                </td>
                                <td>admin</td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>L1</option>
                                    </select>
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>2023-07-28 00:00:00</option>
                                    </select>
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>2023-07-28 00:00:00</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" name="all_2" id="all_2" value="" checked/>
                                    <label htmlFor="all_2"></label>
                                </td>
                                <td>
                                    <input type="checkbox" name="protocol" id="ptc_1" value="" checked />
                                    <label htmlFor="ptc_1">HTTPS</label>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>admin</td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>L0</option>
                                    </select>
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>2023-07-28 00:00:00</option>
                                    </select>
                                </td>
                                <td>
                                    <select name='' id='' className='type-t'>
                                        <option>2023-07-28 00:00:00</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                    <td>
                                        <input type="checkbox" name="all_3" id="all_3" value="" checked/>
                                        <label htmlFor="all_3"></label>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="protocol" id="ptc_1" value="" checked />
                                        <label htmlFor="ptc_1">HTTPS</label>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>admin</td>
                                    <td>
                                        <select name='' id='' className='type-t'>
                                            <option>L0</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name='' id='' className='type-t'>
                                            <option>2023-07-28 00:00:00</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name='' id='' className='type-t'>
                                            <option>2023-07-28 00:00:00</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="all_4" id="all_4" value="" checked/>
                                        <label htmlFor="all_4"></label>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="protocol" id="ptc_1" value="" checked />
                                        <label htmlFor="ptc_1">HTTPS</label>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>admin</td>
                                    <td>
                                        <select name='' id='' className='type-t'>
                                            <option>L0</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name='' id='' className='type-t'>
                                            <option>2023-07-28 00:00:00</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name='' id='' className='type-t'>
                                            <option>2023-07-28 00:00:00</option>
                                        </select>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)}
        </div>
    </div>
    <div className='content-section'>
        <div className={`flex-wrap between ${divStates[5] ? 'under-line' : ''}`}>
            <h3>사업자/벤더사 작업 투입 인력</h3>
                <div className="btn-wrap">
                    <button className={`btn-fold ${divStates[5] ? 'close' : ''}`} onClick={() => handleDivToggle(5)} id='fold-open'>사업자/벤더사 열기</button>
                </div>
            </div>
        <div className={`toggle-box ${divStates[5] ? 'hide' : ''} `}>
            <div className="btn-wrap right mb15"><button type="button" className="btn btn-low btn-md btn-add" onClick={venderAddRow}>추가</button></div>
            <table className='table'>
                <caption>table caption</caption>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '30%' }} />
                    <col style={{ width: '30%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                <tr>
                    <th scope='col'></th>
                    <th scope='col'>담당자</th>
                    <th scope='col'>회사/소속</th>
                    <th scope='col'>핸드폰</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td><input type='text' name='cooperation_worker' id='cooperation_worker' /></td>
                    <td><input type='text' name='cooperation_company' id='cooperation_company' /></td>
                    <td><input type='text' name='cooperation_office' id='cooperation_office' /></td>
                </tr>
                {vendorRows.map((vendorRows, index) => (
                <tr key={index}>
                    <td><button type='button' name='worker-delete' id='worker_delete' className='btn-del-28' onClick={venderRemoveRow}>삭제</button></td>
                    <td><input type='text' name='cooperation_worker' id='cooperation_worker' /></td>
                    <td><input type='text' name='cooperation_company' id='cooperation_company' /></td>
                    <td><input type='text' name='cooperation_office' id='cooperation_office' /></td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    <div className="detail-bottom-btn-group">
        {/* <button className="btn btn-lg btn-low" onClick={() => { setCancle(true) }}>취소</button>
        <Alert open={cancle} close={() => { setCancle(false) }} >
          <div>취소 하시겠습니까?</div>
        </Alert> */}
        <button className="btn btn-lg btn-primary" onClick={() => { setRegist(true) }}>자가승인</button>
        <Popup open={regist} close={() => { setRegist(false) }} header="긴급작업등록" footer={ <PopupButtons close={() => { setRegist(false) }} /> } type={'sm'}>
          <p className='center mb15'>작업을 자가 승인 하시겠습니까?</p>
          <textarea></textarea>
          <ul className="list-desc left">
            <li className="color-primary">검토 완료시 바로 권한을 획득합니다.</li>
          </ul>
        </Popup>
    </div>

    </>)
}

function PopupButtons(props) {
  return (
      <div className="btn-group">
        <button className="btn btn-lg btn-low" onClick={props.close}>취소</button>
        <button className="btn btn-lg btn-primary">확인</button>
      </div>
  )
}

export default UrgentWork;
