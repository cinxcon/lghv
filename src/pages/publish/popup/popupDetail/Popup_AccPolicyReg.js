import { useState } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { Alert } from '../Popup';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupAccPolicyReg() {
  const [startDate, setStartDate] = useState(null);
  const [endeDate, setEndeDate] = useState(null);
  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);
  const [diviceRows, setDiviceRows] = useState([]);
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
  // 셀렉트 박스
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
  const [accessPolicy, setAccessPolicy] = useState(optionsAccessPolicy[0]);
  const [userGroup, setUserGroup] = useState(optionsUserGroup[0]);
  const [user, setUser] = useState(optionsUser[0]);
  const [useDevice, setUseDevice] = useState(optionsUseDevice[0]);
  const [regist, setRegist] = useState(false);
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
          <h2>접근제어 정책 등록</h2>
        </div>
        <div className='content-section'>
          <table className='table table-row'>
            <caption>작업자 정보</caption>
            <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '30%' }} />
            </colgroup>
            <tbody>
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
            </tbody>
          </table>
          <div className='device-list'>
            <div className='flex-wrap between'>
              <div className='total-view'>총 <b>2</b>개</div>
              <div className='btn-wrap'>
                <button type='button' name='worker-delete' id='worker_delete' className='btn btn-md btn-low btn-copy'>복사</button>
                <button type='button' name='worker-delete' id='worker_delete' className='btn btn-md btn-low btn-del'>삭제</button>
              </div>
            </div>
            <div className='worker-list-wrap over-flow-x over-flow-y'>
              <div className='flex-wrap align-start' style={{ width: '155%' }}>
                <table className='table mt8 fix-table' style={{ width: '30%' }}>
                  <caption>고정 영역</caption>
                  <colgroup>
                    <col span={5} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope='col' rowSpan={2}>
                        <input type="checkbox" name="list_all" id="list_all" value="" />
                        <label htmlFor="list_all"></label>
                      </th>
                      <th scope='col' rowSpan={2}>사용자부서</th>
                      <th scope='col' rowSpan={2}>사용자</th>
                      <th scope='col' rowSpan={2}>장비</th>
                      <th scope='col' rowSpan={2} className='bd-right'>OS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" name="list_1" id="list_1" value="" />
                        <label htmlFor="list_1"></label>
                      </td>
                      <td>호남인프라</td>
                      <td>홍길동 Hong</td>
                      <td>
                        <select name='' id='' className='type-t'>
                          <option>Infra Core1</option>
                        </select>
                      </td>
                      <td className='bd-right'>Linux</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="list_2" id="list_2" value="" />
                        <label htmlFor="list_2"></label>
                      </td>
                      <td>호남인프라</td>
                      <td>홍길동 Hong</td>
                      <td>
                        <select name='' id='' className='type-t'>
                          <option>Infra Core1</option>
                        </select>
                      </td>
                      <td className='bd-right'>Linux</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="list_3" id="list_3" value="" />
                        <label htmlFor="list_3"></label>
                      </td>
                      <td>호남인프라</td>
                      <td>홍길동 Hong</td>
                      <td>
                        <select name='' id='' className='type-t'>
                          <option>Infra Core1</option>
                        </select>
                      </td>
                      <td className='bd-right'>Linux</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="list_4" id="list_4" value="" />
                        <label htmlFor="list_4"></label>
                      </td>
                      <td>호남인프라</td>
                      <td>홍길동 Hong</td>
                      <td>
                        <select name='' id='' className='type-t'>
                          <option>Infra Core1</option>
                        </select>
                      </td>
                      <td className='bd-right'>Linux</td>
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
          </div>
        </div>
        <div className='center mt20'>
          <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
        </div>
        <Alert open={regist} close={() => { setRegist(false) }}>
          <div>기안을 등록하시겠습니까?</div>
        </Alert>
      </div>
    </PopupPortal>
  );
};

export default PopupAccPolicyReg;
