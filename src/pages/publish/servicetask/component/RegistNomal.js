import { useState } from 'react';
import TooltipMsg from '../../tooltip/tooltip';
import TooltipMsgWorkType from '../tooltipDetail/tooltip_worktype';
import { Popup1 } from '../../popup/Popup';
import PopupTree from '../popupDetail/ApprovalOrgTree/Popup_ApprovalOrgTree';

function nomal() {
  // 등록부서 팝업
  const [onLoad, setOnLoad] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };
  return (<>
    <div className='content-section'>
    <h3>작업개요</h3>
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
            <input type='text' placeholder='작업제목' />
            </td>
        </tr>
        <tr>
            <th scope='row'>요청자</th>
            <td>홍길동</td>
            <th scope='row'>검토자</th>
            <td>
                <span className='input input_org'>{selectedItem}</span>
                <button className='btn' onClick={() => { setOnLoad(true) }}>선택</button>
                <Popup1 open={onLoad} close={() => { setOnLoad(false) }} header="결제 지정">
                    <PopupTree onItemSelected={handleItemSelected} />
                </Popup1>
            </td>
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
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">ATV</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">VOD</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">ESS</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">클라우드</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">전송망</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">국간망</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">기간망</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">기반</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">기타</label>
                <input type="checkbox" name="service" id="ser_3" value="" />
                <label htmlFor="ser_3">전체</label>
            </fieldset>
            </td>
        </tr>
        <tr>
            <th scope='row'>작업구분</th>
            <td colSpan={3}>인프라팀 전결</td>
        </tr>
        <tr>
            <th scope='row'>
            작업 유형
            <TooltipMsg message={ <TooltipMsgWorkType /> } direction="right"><button>tooltip?</button></TooltipMsg>
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
            <td colSpan={3}>공지</td>
        </tr>
        <tr>
            <th scope='row'>작업 내용</th>
            <td colSpan={3}>작업 내용 작업 내용</td>
        </tr>
        <tr>
            <th scope='row'>파일첨부</th>
            <td colSpan={3}>파일첨부 파일첨부</td>
        </tr>
        </tbody>
    </table>
    </div>
    <div className='content-section'>
    <h3>작업대상 지역</h3>
    <table className='table result align-left'>
        <caption>table caption</caption>
        <colgroup>
        <col span={7} />
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
            <th scope='col'>ATV</th>
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
    <table className='table result align-left'>
        <caption>table caption</caption>
        <colgroup>
        <col span={4} />
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

    </>)
}

export default nomal;
