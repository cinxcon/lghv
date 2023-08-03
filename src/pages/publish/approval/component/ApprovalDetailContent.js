import TooltipMsg from '../../tooltip/tooltip';
import TooltipMsgWorkType from '../tooltipDetail/tooltip_worktype';

function ApprovalDetailContent() {
  return (
    <>
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
                  <option value="a">선택</option>
                  <option value="b">중앙방송</option>
                  <option value="c">중부산방송</option>
                  <option value="d">해운대방송</option>
                  <option value="e">금정방송</option>
                  <option value="f">경남방송</option>
                  <option value="g">가야방송</option>
                  <option value="h">마산방송</option>
                  <option value="i">동구방송</option>
                  <option value="j">수성방송</option>
                  <option value="k">신라방송</option>
                  <option value="l">영남방송</option>
                  <option value="m">기술담당</option>
                  <option value="n">호남방송</option>
                  <option value="o">아라방송</option>
                  <option value="p">전북방송</option>
                  <option value="q">강원방송</option>
                  <option value="r">영동방송</option>
                  <option value="s">영서방송</option>
                  <option value="t">양천방송</option>
                  <option value="u">은평방송</option>
                  <option value="v">나라방송</option>
                  <option value="w">부천방송</option>
                  <option value="x">김포방송</option>
                  <option value="y">북인천방송</option>
                  <option value="z" selected>충남방송</option>
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
                  <input type="checkbox" name="service" id="ser_1" value="" checked readOnly />
                  <label htmlFor="ser_1">DTV</label>
                  <input type="checkbox" name="service" id="ser_2" value="" checked readOnly />
                  <label htmlFor="ser_2">NET</label>
                  <input type="checkbox" name="service" id="ser_3" value="" checked readOnly />
                  <label htmlFor="ser_3">VOIP</label>
                  <input type="checkbox" name="service" id="ser_4" value="" checked readOnly />
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
              <td colSpan={3}>
                <div className='textarea'>
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                  작업 내용 <br />
                </div>
              </td>
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
    </>
  )
}

export default ApprovalDetailContent;
