import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TooltipMsg from '../../tooltip/tooltip';
import TooltipMsgWorkType from '../tooltipDetail/tooltip_worktype';
import { Popup } from '../../popup/Popup';
import PopupReviewer from '../../popup/popupDetail/Popup_Reviewer';
import PopupTemplate from '../../popup/popupDetail/Popup_Template';
import PopupCell from '../../popup/popupDetail/Popup_Cell';
import PopupWorkDeteail from '../../popup/popupDetail/Popup_WorkDeteail';
import PopupWorker from '../../popup/popupDetail/Popup_Worker';
import PopupDivice from '../../popup/popupDetail/Popup_Divice';
import DatePicker from 'react-datepicker';

function nomal() {
  // 팝업
  const [reviwer, setReviwer] = useState(false);
  const [template, setTemplate] = useState(false);
  const [cell, setCell] = useState(false);
  const [workDeteail, setWorkDeteail] = useState(false);
  const [worker, setWorker] = useState(false);
  const [device, setDevice] = useState(false);

  const [selectedItem, setSelectedItem] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endeDate, setEndeDate] = useState(null);

  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);
  const [diviceRows, setDiviceRows] = useState([]);
  const [vendorRows, setVendorRows] = useState([]);
  const [selectedOption, setSelectedOption] = useState('access_yes');
  const [selectedCell, setSelectedCell] = useState('');
  const [selectedWorkDeteail, setSelectedWorkDeteail] = useState('');
  const [selectedWorker, setSelectedWorker] = useState('');
  const [selectedDevice, setSelectedDevice] = useState([]);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
    setReviwer(false);
  };
  const handleTemplateSelected = () => {
    setTemplate(false);
  }
  const handleCellSelected = (cell) => {
    setCell(false);
    setSelectedCell(cell);
  }
  const handleWorkDeteailSelected = (name) => {
    setWorkDeteail(false);
    setSelectedWorkDeteail(name);
  }

  const handleWorkerSelected = (name) => {
    setWorker(false);
    setSelectedWorker(name);
  }
  const handleDeviceSelected = (device) => {
    setDevice(false);
    setSelectedDevice(device);
  }

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
    if (diviceRows.length > 0) {
      const newRows = diviceRows.slice(0, diviceRows.length - 1);
      setDiviceRows(newRows);
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
  console.log(selectedDevice);
  return (
  <>
   {/* 결제선 저장 시 나타나는 항목 */}
   <div className='content-section' id='approval-line' style={{ visibility: 'hidden', height: '0', margin: '0' }}>
    <h3>결재</h3>
        <table className='table mb15'>
            <caption>table caption</caption>
            <colgroup>
            <col span={5} style={{ width: '20%' }} />
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
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>조정</td>
                <td>정유리(123567)</td>
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
        <table className='table table-row'>
            <caption>table caption</caption>
            <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '90%' }} />
            </colgroup>
            <tbody>
            <tr>
                <th scope='row'>합의</th>
                <td>김영희(666666)</td>
            </tr>
            <tr>
                <th scope='row'>수신</th>
                <td>김순자(111111)</td>
            </tr>
            </tbody>
        </table>
    </div>
    {/* 결제선 저장 시 나타나는 항목 끝 */}
    <div className='content-section'>
    <table className='table table-row'>
        <caption>table caption</caption>
        <colgroup>
        <col style={{ width: '20%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '30%' }} />
        </colgroup>
        <tbody>
        <tr>
            <th scope='row'>구분</th>
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
            <th scope='row'>제목</th>
            <td colSpan={3}>
            <select name="area" id="area">
                <option value="">선택</option>
            </select>&nbsp;
            <input type='text' name='title' id='title' placeholder='작업제목' />
            </td>
        </tr>
        <tr>
            <th scope='row'>요청자</th>
            <td>홍길동</td>
            <th scope='row'>검토자</th>
            <td>
                <span className='input-btn-wrap'>
                    <span className='input input_org input-search-front'>{selectedItem}</span>
                    <button className='btn btn-search' onClick={() => { setReviwer(true) }}>선택</button>
                </span>
                <Popup open={reviwer} close={() => { setReviwer(false) }} header="검토자 지정" type={'lg'}>
                    <PopupReviewer onItemSelected={handleItemSelected} />
                </Popup>
            </td>
        </tr>
        <tr>
            <th scope='row'>대상 서비스</th>
            <td colSpan={3}>
                <fieldset className='mb15'>
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
                <p className='notice color-info'>*청색 표기 대상 서비스만 선택 할 경우, 작업대상 지역은 [해당없음]으로 지정하십시오.</p>
            </td>
        </tr>
        <tr>
            <th scope='row'>작업구분</th>
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
                작업 유형
                <TooltipMsg message={ <TooltipMsgWorkType /> } ><button className='btn-tooltip'>tooltip?</button></TooltipMsg>
            </div>
            </th>
            <td>
            <select name="area" id="area">
                <option value="">전송망</option>
            </select>
            </td>
            <th scope='row'>작업입회 여부</th>
            <td>
            <select name="area" id="area">
                <option value="">입회</option>
            </select>
            </td>
        </tr>
        <tr>
            <th scope='row'>CAMS 공지여부</th>
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
                        <button type='button' className='btn btn-pop btn-md' onClick={() => { setTemplate(true) }}>탬플릿 불러오기</button>
                        <Popup open={template} close={() => { setTemplate(false) }} header="템플릿 불러오기" type={'lg'}>
                            <PopupTemplate onItemSelected={handleTemplateSelected} />
                        </Popup>
                    </div>
                    <div className='template'>
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
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
                <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="파일첨부" />
                <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                    <input type="text"className="i-file-name"id="noIndex1"title="파일첨부"readOnly=""/>
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
                <ul className='list-desc'>
                    <li>구성도, 상세 시나리오 등을 첨부(예시)</li>
                    <li className='color-primary'>업로드 할 수 있는 파일의 용량은 총 20MB 입니다.</li>
                </ul>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    <div className='content-section'>
    <h3>작업 대상 지역 및 장애범위</h3>
    <div className="btn-wrap right">
        <button type='button' className='btn btn-pop btn-md' onClick={() => { setCell(true) }}>CELL 등록</button>
        <Popup open={cell} close={() => { setCell(false) }} header="CELL 등록" type={'lg'}>
            <PopupCell onItemSelected={handleCellSelected} />
        </Popup>
    </div>
    <table className='table mt8'>
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
            <td>{selectedCell}</td>
            <td>{selectedCell}</td>
            <td>{selectedCell}</td>
            <td>{selectedCell}</td>
            <td>{selectedCell}</td>
            <td>{selectedCell}</td>
            <td>{selectedCell}</td>
        </tr>
        </tbody>
    </table>
    </div>
    <div className='content-section'>
    <h3>세부작업 절차</h3>
    <table className='table table-row'>
        <caption>table caption</caption>
        <colgroup>
        <col style={{ width: '15%' }} />
        <col style={{ width: '35%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '35%' }} />
        </colgroup>
        <tbody>
        <tr>
            <th scope='row'>일정</th>
            <td colSpan={3}>
                <div className='flex-wrap'>
                    <div className='flex-wrap'>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" />
                            <div className='time-select'>
                                <button onClick={handleStartHourIncrease} className='btn-up'></button>
                                <input type="text" value={startHours} readOnly />
                                <button onClick={handleStartHourDecrease} className='btn-down'></button>
                            </div> :
                            <div className='time-select'>
                                <button onClick={handleStartMinuteIncrease} className='btn-up'></button>
                                <input type="text" value={startMinutes} readOnly />
                                <button onClick={handleStartMinuteDecrease} className='btn-down'></button>
                            </div>
                    </div>
                    <span className='ml15'>~</span>
                    <div className='flex-wrap ml15'>
                        <DatePicker selected={endeDate} onChange={(date) => setEndeDate(date)} dateFormat="yyyy-MM-dd" />
                            <div className='time-select'>
                                <button onClick={handleEndHourIncrease} className='btn-up'>▲</button>
                                <input type="text" value={endHours} readOnly />
                                <button onClick={handleEndHourDecrease} className='btn-down'>▼</button>
                            </div> :
                            <div className='time-select'>
                                <button onClick={handleEndMinuteIncrease} className='btn-up'>▲</button>
                                <input type="text" value={endMinutes} readOnly />
                                <button onClick={handleEndMinuteDecrease} className='btn-down'>▼</button>
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
                    <label htmlFor="effect_yes">공지</label>
                    <input type="radio" name="pre-effect" id="effect_no" value="" />
                    <label htmlFor="effect_no">미공지</label>
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
                    <span className='input input_org input-search-front'>{selectedWorkDeteail}</span>
                    <button className='btn btn-search' onClick={() => { setWorkDeteail(true) }}>선택</button>
                </span>
                <Popup open={workDeteail} close={() => { setWorkDeteail(false) }} header="작업세부" type={'sm'}>
                    <PopupWorkDeteail onItemSelected={handleWorkDeteailSelected} />
                </Popup>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
     {selectedOption === 'access_no' && (
        <div className='content-section'>
            <h3>작업자 정보</h3>
            <table className='table table-row'>
                <caption>table caption</caption>
                <colgroup>
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '75%' }} />
                </colgroup>
                <tbody>
                <tr>
                    <th scope='col'>작업자</th>
                    <td>
                        <span className='input-btn-wrap'>
                            <span className='input input_org'>{selectedWorker}</span>
                            <button className='btn-plus-28' onClick={() => { setWorker(true) }}>더하기</button>
                            <button type='button' className='btn-minus-28'>빼기</button>
                        </span>
                        <Popup open={worker} close={() => { setWorker(false) }} header="작업자 불러오기" type={'lg'}>
                            <PopupWorker onItemSelected={handleWorkerSelected} />
                        </Popup>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
     )}

    {selectedOption === 'access_yes' && (
        <div className='content-section'>
            <h3> 작업자 정보</h3>
            <div className="btn-wrap right"><button type="button" className="btn btn-low btn-md btn-add" onClick={diviceAddRow}>추가</button></div>
            <table className='table table-row mt8'>
                <caption>table caption</caption>
                <colgroup>
                    <col style={{ width: '100%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td className='non-pading'>
                            <dl className='flex-wrap'>
                            <dt scope='col'>작업자</dt>
                                <dd>
                                    <span className='input-btn-wrap'>
                                        <span className='input input_org'>{selectedWorker}</span>
                                        <button type='button' className='btn-plus-28' onClick={() => { setWorker(true) }}>더하기</button>
                                        <button type='button' className='btn-minus-28'>빼기</button>
                                    </span>
                                    <Popup open={worker} close={() => { setWorker(false) }} header="작업자 불러오기" type={'lg'}>
                                        <PopupWorker onItemSelected={handleWorkerSelected} />
                                    </Popup>
                                </dd>
                            </dl>
                            <dl className='flex-wrap'>
                                <dt scope='col'>장비정보</dt>
                                <dd>
                                    <span className='input-btn-wrap'>
                                        <span className='input input_org input-search-front'>{selectedDevice.join(', ')}</span>
                                        <button className='btn btn-search' onClick={() => { setDevice(true) }}>선택</button>
                                    </span>
                                    <Popup open={device} close={() => { setDevice(false) }} header="장비정보 불러오기" type={'lg'}>
                                        <PopupDivice onItemSelected={handleDeviceSelected} />
                                    </Popup>
                                </dd>
                            </dl>
                        </td>
                    </tr>
                    {diviceRows.map((diviceRows, index) => (
                        <tr key={index}>
                            <td className='non-pading'>
                                <dl className='flex-wrap'>
                                <dt scope='col'>작업자</dt>
                                    <dd>
                                        <span className='input input_org' style={{ width: '88%' }}>{selectedWorker}</span>
                                        <button type='button' className='btn-plus-28' onClick={() => { setWorker(true) }}>더하기</button>
                                        <button type='button' className='btn-minus-28'>빼기</button>
                                    </dd>
                                </dl>
                                <dl className='flex-wrap'>
                                    <dt scope='col'>장비정보</dt>
                                    <dd>
                                        <span className='input input_org' style={{ width: '97%' }}>
                                            {selectedDevice.join(', ')}
                                        </span>
                                        <button className='btn btn-search ml10' onClick={() => { setDevice(true) }}>선택</button>
                                        <button type='button' name='worker-delete' id='worker_delete' className='btn' onClick={diviceRemoveRow}>삭제</button>
                                    </dd>
                                </dl>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}

    <div className='content-section'>
        <h3>사업자/벤더사 작업 투입 인력</h3>
        <div className="btn-wrap right mt8">
            <button type="button" className="btn btn-low btn-md btn-add" onClick={venderAddRow}>추가</button>
        </div>
        <table className='table mt8'>
            <caption>table caption</caption>
            <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
            <tr>
                <th scope='col'>담당자</th>
                <th scope='col'>회사/소속</th>
                <th scope='col'>핸드폰</th>
                <th scope='col'>삭제</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type='text' name='cooperation_worker' id='cooperation_worker' /></td>
                <td><input type='text' name='cooperation_company' id='cooperation_company' /></td>
                <td><input type='text' name='cooperation_office' id='cooperation_office' /></td>
                <td><button className='btn-del-28'>삭제</button></td>
            </tr>
            {vendorRows.map((vendorRows, index) => (
            <tr key={index}>
                <td><input type='text' name='cooperation_worker' id='cooperation_worker' /></td>
                <td><input type='text' name='cooperation_company' id='cooperation_company' /></td>
                <td><input type='text' name='cooperation_office' id='cooperation_office' /></td>
                <td><button type='button' name='worker-delete' id='worker_delete' className='btn-del-28' onClick={venderRemoveRow}>삭제</button></td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
    <div className="detail-bottom-btn-group">
        <button className="btn btn-lg btn-low">취소</button>
        <button className="btn btn-lg btn-primary">등록</button>
    </div>

    </>)
}

export default nomal;
