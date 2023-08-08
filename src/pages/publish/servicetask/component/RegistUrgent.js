import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TooltipMsg from '../../tooltip/tooltip';
import TooltipMsgWorkType from '../tooltipDetail/tooltip_worktype';
import { Popup } from '../../popup/Popup';
import PopupReviewer from '../../popup/popupDetail/Popup_Reviewer';
import DatePicker from 'react-datepicker';

function urgent() {
  // 등록부서 팝업
  const [ontree, setOnTree] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endeDate, setEndeDate] = useState(null);

  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);
  const [rows, setRows] = useState([]);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

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
  const workerAddRow = () => {
    setRows([...rows, {}]);
  };
  const workerRemoveRow = () => {
    if (rows.length > 0) {
      const newRows = rows.slice(0, rows.length - 1);
      setRows(newRows);
    }
  };

  return (<>
    <div className='content-section'>
    <table className='table result align-left'>
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
                    <input type="radio" name="access-control" id="control_no" value="" defaultChecked={true} />
                    <label htmlFor="control_no">비접근제어</label>
                    <input type="radio" name="access-control" id="control_yes" value="" />
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
                <div className='flex-wrap between'>
                    <span className='input input_org'>{selectedItem}</span>
                    <button className='btn ml10' onClick={() => { setOnTree(true) }}>선택</button>
                    <Popup open={ontree} close={() => { setOnTree(false) }} header="결제 지정" type={'lg'}>
                        <PopupReviewer onItemSelected={handleItemSelected} />
                    </Popup>
                </div>
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
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3">ATV</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>VOD</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>ESS</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>클라우드</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>전송망</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>국간망</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>기간망</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>기반</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>기타</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3" className='color-success'>전체</label>
                </fieldset>
                <p className='notice color-success'>*청색 표기 대상 서비스만 선택 할 경우, 작업대상 지역은 [해당없음]으로 지정하십시오.</p>
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
                    <div className='btn-wrap'><button type='buttn' className='btn btn-black'>탬플릿 추가</button></div>
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
                      <span className="input-addon ml10">
                          <label htmlFor="File" className="btn btn-black">첨부</label>
                      </span>
                      <span className="input-addon ml10">
                          <button className="btn">삭제</button>
                      </span>
                </div>
                <p className="color-gray">
                  *구성도, 상세 시나리오 등을 첨부(예시)
                </p>
                <p>
                  * 업로드 할 수 있는 파일의 용량은 총 20MB 입니다.
                </p>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    <div className='content-section'>
    <div className='flex-wrap between mb15'>
        <h3>작업 대상 지역 및 장애범위</h3>
        <div className="btn-wrap"><button type="button" className="btn">셀등록</button></div>
    </div>
    <table className='table result'>
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
            <th scope='col'>DTV</th>
            <th scope='col'>NET</th>
            <th scope='col'>VOIP</th>
            <th scope='col'>ATV</th>
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
    <div className='content-section'>
    <h3>세부작업 절차</h3>
    <table className='table result align-left'>
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
                    ( <input type='text' name='uninterrupted_time' id='uninterrupted_time' className='sm' /> 분 )
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
                <input type='text' name='work-detail' id='work_detail' />
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    <div className='content-section'>
        <h3>작업자 정보</h3>
        <table className='table result align-left'>
            <caption>table caption</caption>
            <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '75%' }} />
            </colgroup>
            <tbody>
            <tr>
                <th scope='col'>작업자</th>
                <td>
                    <div className='flex-wrap'>
                        <ul>
                            <li> <input type='text' name='field_worker' id='field_worker' /></li>
                        </ul>
                        <button type='button' className='btn ml15'>+</button>
                        <button type='button' className='btn ml15'>-</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div className='content-section'>
        <div className='flex-wrap between mb15'>
            <h3>사업자/벤더사 작업 투입 인력</h3>
            <div className="btn-wrap"><button type="button" className="btn" onClick={workerAddRow}>추가</button></div>
        </div>
        <table className='table result'>
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
                <td></td>
            </tr>
            {rows.map((row, index) => (
            <tr key={index}>
                <td><input type='text' name='cooperation_worker' id='cooperation_worker' /></td>
                <td><input type='text' name='cooperation_company' id='cooperation_company' /></td>
                <td><input type='text' name='cooperation_office' id='cooperation_office' /></td>
                <td><button type='button' name='worker-delete' id='worker_delete' className='btn' onClick={workerRemoveRow}>삭제</button></td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
    <div className="detail-bottom-btn-group">
        <button className="btn btn-lg">임시저장</button>
        <button className="btn btn-lg btn-primary">등록</button>
    </div>

    </>)
}

export default urgent;
