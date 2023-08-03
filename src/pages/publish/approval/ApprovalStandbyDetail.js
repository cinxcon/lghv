import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import { Popup1, Popup2 } from '../popup/Popup';
import PopupNotiMethod from './popupDetail/Popup_NotiMethod';
import PopupProcessHistory from './popupDetail/Popup_ProcessHistory';
import TooltipMsg from '../tooltip/tooltip';
import TooltipMsgWorkType from './tooltipDetail/tooltip_worktype';

function ApprovalStandbyDetail() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [onTime, setOnTime] = useState(false);
  const [onTimeCancel, setOnTimeCancel] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      {/* 상단 타이틀 */}
      <ContentTitle />
      {/* 상단 버튼 모음 */}
      {/* <ApprovalTopBtnGroup /> */}
      <div className="detail-top-btn-group">
        <button className='btn btn-sm' onClick={() => { setConfirm(true) }}>확인</button>
        <button className='btn btn-sm' onClick={() => { setOnTime(true) }}>OnTime반려</button>
        <button className='btn btn-sm' onClick={() => { setOnTimeCancel(true) }}>반려취소</button>
        <button className='btn btn-sm' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn btn-sm' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-sm btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Popup2 open={confirm} close={() => { setConfirm(false) }}>
        <div>결재 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={agree} close={() => { setAgree(false) }}>
        <div>결재를 합의 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={onTime} close={() => { setOnTime(false) }}>
        <div>반려 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={onTimeCancel} close={() => { setOnTimeCancel(false) }}>
        <div>반려를 취소 하시겠습니까?</div>
      </Popup2>
      <Popup1 open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup1>
      <Popup1 open={history} close={() => { setHistory(false) }} header="처리내역">
        <PopupProcessHistory />
      </Popup1>
      {/* 상세 내용 */}
      {/* <ApprovalDetailContent /> */}
      <div className='content-section'>
        <h3>결재</h3>
        <table className='table result mb15'>
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
              <td>기안</td>
              <td>2023-01-01 11:00:00</td>
              <td></td>
            </tr>
            <tr>
              <td>조정</td>
              <td>정유리(123567)</td>
              <td>대기</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>결재</td>
              <td>김철수(123456)</td>
              <td>대기</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className='table result align-left'>
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
      <div className='content-section'>
        <h3>작업개요</h3>
        <table className='table result align-left'>
          <caption>table caption</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>제목</th>
              <td colSpan={3}>
                <select name="area" id="area" readOnly>
                  <option value="a" selected="selected">선택1</option>
                  <option value="b">선택2</option>
                  <option value="c">선택3</option>
                  <option value="d">선택4</option>
                  <option value="e">선택4</option>
                </select>
                <span className='ml15'>작업제목</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>요청자</th>
              <td>홍길동</td>
              <th scope='row'>검토자</th>
              <td>김철수( 001515 )   /  김아무 ( 008282 )</td>
            </tr>
            <tr>
              <th scope='row'>대상 서비스</th>
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
                  <label htmlFor="ser_5">VOD</label>
                  <input type="checkbox" name="service" id="ser_6" value="" />
                  <label htmlFor="ser_6">ESS</label>
                  <input type="checkbox" name="service" id="ser_7" value="" />
                  <label htmlFor="ser_7">클라우드</label>
                  <input type="checkbox" name="service" id="ser_8" value="" />
                  <label htmlFor="ser_8">전송망</label>
                  <input type="checkbox" name="service" id="ser_9" value="" />
                  <label htmlFor="ser_9">국간망</label>
                  <input type="checkbox" name="service" id="ser_10" value="" />
                  <label htmlFor="ser_10">기간망</label>
                  <input type="checkbox" name="service" id="ser_11" value="" />
                  <label htmlFor="ser_11">기반</label>
                  <input type="checkbox" name="service" id="ser_12" value="" />
                  <label htmlFor="ser_12">기타</label>
                  <input type="checkbox" name="service" id="ser_13" value="" />
                  <label htmlFor="ser_13">전체</label>
                </fieldset>
              </td>
            </tr>
            <tr>
              <th scope='row'>작업구분</th>
              <td colSpan={3}>인프라팀 전결</td>
            </tr>
            <tr>
              <th scope='row'>
                <div className='tooltip-area'>
                  작업 유형
                  <TooltipMsg message={ <TooltipMsgWorkType /> } ><button className='btn-tooltip'>tooltip?</button></TooltipMsg>
                </div>
              </th>
              <td>
                <select name="area" id="area" readOnly>
                  <option value="a" selected="selected">전송망1</option>
                  <option value="b">전송망2</option>
                  <option value="c">전송망3</option>
                </select>
              </td>
              <th scope='row'>작업입회 여부</th>
              <td>
                <select name="area" id="area" readOnly>
                  <option value="a" selected="selected">입회1</option>
                  <option value="b">입회2</option>
                  <option value="c">입회3</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope='row'>CAMS 공지여부</th>
              <td colSpan={3}>공지</td>
            </tr>
            <tr>
              <th scope='row'>작업 내용</th>
              <td colSpan={3}>작업 내용 ...</td>
            </tr>
            <tr>
              <th scope='row'>파일첨부</th>
              <td colSpan={3}>파일첨부 ...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='content-section'>
        <h3>작업대상 지역</h3>
        <table className='table result'>
          <caption>table caption</caption>
          <colgroup>
            <col span={7} style={{ width: '14%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope='col' rowSpan={2}>SO</th>
              <th scope='col' rowSpan={2}>CELL</th>
              <th scope='col' colSpan={4}>가입서비스</th>
              <th scope='col' rowSpan={2}>가입자</th>
            </tr>
            <tr>
              <th scope='col'>DTV</th>
              <th scope='col'>NET</th>
              <th scope='col'>VOIP</th>
              <th scope='col' className='bd-right'>ATV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>충남방송</td>
              <td>TA123</td>
              <td>223</td>
              <td>114</td>
              <td>13</td>
              <td>10</td>
              <td>365</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='content-section'>
        <h3>세부작업 절차</h3>
        <table className='table result align-left'>
          <caption>table caption</caption>
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
              <th scope='row'>일정</th>
              <td>2023-01-01 ~ 2023-01-01</td>
              <th scope='row'>작업내용</th>
              <td>케이블파손</td>
              <th scope='row'>작업자</th>
              <td>경인인프라팀/홍길동/010-1234-1234</td>
            </tr>
            <tr>
              <th scope='row'>기업자 영향</th>
              <td>Y</td>
              <th scope='row'>작업세부</th>
              <td colSpan={3}>전송망/케이블/간선망</td>
            </tr>
            <tr>
              <th scope='row'>장애시간</th>
              <td>중단(3분)</td>
              <th scope='row'>장애범위</th>
              <td colSpan={3}>
                경인인프라/충남방송/TA11<br />
                경인인프라/충남방송/TA12<br />
                경인인프라/충남방송/TA13<br />
                경인인프라/충남방송/TA14
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='content-section'>
        <h3>사업자/벤더사 작업 투입 인력</h3>
        <table className='table result'>
          <caption>table caption</caption>
          <colgroup>
            <col span={4} style={{ width: '25%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>담당자</th>
              <th scope='col'>회사/소속</th>
              <th scope='col'>사무실</th>
              <th scope='col'>핸드폰</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>남아무개</td>
              <td>파트너스</td>
              <td></td>
              <td>010-1234-5678</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 하단 버튼 모음 */}
      {/* <ApprovalBotBtnGroup /> */}
      <div className='detail-bottom-btn-group'>
        <button className='btn btn-lg'>수정</button>
        <button className='btn btn-lg btn-primary'>결재</button>
      </div>
    </>
  )
}

export default ApprovalStandbyDetail;
