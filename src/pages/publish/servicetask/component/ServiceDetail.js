import TooltipMsg from '../../tooltip/tooltip';
import TooltipMsgWorkType from '../tooltipDetail/tooltip_worktype';

function ServiceDetail() {
  return (
  <>
  <div className='content-section' id='approval-line'>
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
            <td colSpan={3}>비접근제어</td>
          </tr>
          <tr>
            <th scope='row'>인프라팀/SO</th>
            <td colSpan={3}>강원인프라팀/영동방송</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td colSpan={3}>제목</td>
          </tr>
          <tr>
            <th scope='row'>요청자</th>
            <td>홍길동</td>
            <th scope='row'>검토자</th>
            <td>김길동(666666), 이길동(111111)</td>
          </tr>
          <tr>
            <th scope='row'>대상 서비스</th>
            <td colSpan={3}>
              <fieldset className='mb15'>
                <legend>대상 서비스</legend>
                <input type="checkbox" name="service" id="ser_1" value="" checked readOnly />
                <label htmlFor="ser_1">DTV</label>
                <input type="checkbox" name="service" id="ser_2" value="" disabled />
                <label htmlFor="ser_2">NET</label>
                <input type="checkbox" name="service" id="ser_3" value="" disabled />
                <label htmlFor="ser_3">VOIP</label>
                <input type="checkbox" name="service" id="ser_4" value="" disabled />
                <label htmlFor="ser_4">ATV</label>
                <input type="checkbox" name="service" id="ser_5" value="" disabled />
                <label htmlFor="ser_5" className='color-success'>VOD</label>
                <input type="checkbox" name="service" id="ser_6" value="" disabled />
                <label htmlFor="ser_6" className='color-success'>ESS</label>
                <input type="checkbox" name="service" id="ser_7" value="" disabled />
                <label htmlFor="ser_7" className='color-success'>클라우드</label>
                <input type="checkbox" name="service" id="ser_8" value="" disabled />
                <label htmlFor="ser_8" className='color-success'>전송망</label>
                <input type="checkbox" name="service" id="ser_9" value="" disabled />
                <label htmlFor="ser_9" className='color-success'>국간망</label>
                <input type="checkbox" name="service" id="ser_10" value="" disabled />
                <label htmlFor="ser_10" className='color-success'>기간망</label>
                <input type="checkbox" name="service" id="ser_11" value="" disabled />
                <label htmlFor="ser_11" className='color-success'>기반</label>
                <input type="checkbox" name="service" id="ser_12" value="" disabled />
                <label htmlFor="ser_12" className='color-success'>기타</label>
                <input type="checkbox" name="service" id="ser_13" value="" disabled />
                <label htmlFor="ser_13" className='color-success'>전체</label>
              </fieldset>
              <p className='notice color-success'>*청색 표기 대상 서비스만 선택 할 경우, 작업대상 지역은 [해당없음]으로 지정하십시오.</p>
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
              전송망
            </td>
            <th scope='row'>작업입회 여부</th>
            <td>
              입회
            </td>
          </tr>
          <tr>
            <th scope='row'>CAMS 공지여부</th>
            <td colSpan={3}>
              공지
            </td>
          </tr>
          <tr>
            <th scope='row'>작업 내용</th>
            <td colSpan={3}>
              작업내용 예시
            </td>
          </tr>
          <tr>
            <th scope='row'>파일첨부</th>
            <td colSpan={3}>
              작업 등록건에 대하여.pdf
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='content-section'>
      <h3>작업 대상 지역 및 장애범위</h3>
      <table className='table'>
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
            <th scope='col' className='color-primary'>DTV</th>
            <th scope='col' className='color-primary'>NET</th>
            <th scope='col' className='color-primary'>VOIP</th>
            <th scope='col' className='color-primary'>ATV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>영남방송</td>
            <td>yj25</td>
            <td>415</td>
            <td>134</td>
            <td>54</td>
            <td>28</td>
            <td>641</td>
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
              2023-08-08 15:00 ~ 2023-08-08 17:00
            </td>
          </tr>
          <tr>
            <th scope='row'>기업자 영향</th>
            <td>
              Y
            </td>
            <th scope='row'>장애시간</th>
            <td>
              무중단
            </td>
          </tr>
          <tr>
            <th scope='row'>작업내용</th>
            <td colSpan={3}>
              작업 내용 입력
            </td>
          </tr>
          <tr>
            <th scope='row'>작업세부</th>
            <td colSpan={3}>
              인트라/세부 경로/ 세부
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='content-section'>
      <h3>작업자 정보 (비접근제어)</h3>
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
              <div className='textarea' style={{ height: '66px' }}>
                검색/기간망지원/홍길동<br />
                테스트/기간망/김철수<br />
                예시/예시/김영희<br />
                테스트/기간망/김철수<br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='content-section'>
      <h3>작업자 정보 (접근제어)</h3>
      <div> 총 4개</div>
      <div className='over-flow-x'>
        <table className="table" style={{ width: '200%' }}>
          <caption>table caption</caption>
          <colgroup>
            <col span={4} />
            <col span={7} style={{ width: '5%' }} />
            <col span={4} />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>사용자부서</th>
              <th scope='col'>사용자</th>
              <th scope='col'>장비</th>
              <th scope='col'>OS</th>
              <th scope='col' colSpan={7}>접속Protocol</th>
              <th scope='col'>Protocol <br />접속계정</th>
              <th scope='col'>접근정책</th>
              <th scope='col'>시작일시</th>
              <th scope='col'>종료일시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>호남인프라</td>
              <td>홍길동 Hong</td>
              <td>Infra Core1</td>
              <td>Linux</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_4" value="" checked readOnly />
                <label htmlFor="ptc_4">SSH</label>
              </td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_5" value="" checked readOnly />
                <label htmlFor="ptc_5">Telnet</label>
              </td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_6" value="" checked readOnly />
                <label htmlFor="ptc_6">SFTP</label>
              </td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_7" value="" checked readOnly />
                <label htmlFor="ptc_7">FTP</label>
              </td>
              <td>admin</td>
              <td>L1</td>
              <td>2023-07-28 00:00:00</td>
              <td>2023-07-28 06:00:00</td>
            </tr>
            <tr>
              <td>호남인프라</td>
              <td>이철수 Kim</td>
              <td>Infra Core2</td>
              <td>Windows</td>
              <td></td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_2" value="" checked readOnly />
                <label htmlFor="ptc_2">RDP</label>
              </td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_3" value="" checked readOnly />
                <label htmlFor="ptc_3">Win RM</label>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>admin</td>
              <td>L0</td>
              <td>2023-07-28 00:00:00</td>
              <td>2023-07-28 06:00:00</td>
            </tr>
            <tr>
              <td>호남인프라</td>
              <td>김길동 Hong</td>
              <td>Infra Core3</td>
              <td>Network</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_4" value="" checked readOnly />
                <label htmlFor="ptc_4">SSH</label>
              </td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_5" value="" checked readOnly />
                <label htmlFor="ptc_5">Telnet</label>
              </td>
              <td></td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_7" value="" checked readOnly />
                <label htmlFor="ptc_7">FTP</label>
              </td>
              <td>admin</td>
              <td>L1</td>
              <td>2023-07-28 00:00:00</td>
              <td>2023-07-28 06:00:00</td>
            </tr>
            <tr>
              <td>호남인프라</td>
              <td>김철수 Kim</td>
              <td>Infra Core3</td>
              <td>Web</td>
              <td>
                <input type="checkbox" name="protocol" id="ptc_1" value="" checked readOnly />
                <label htmlFor="ptc_1">HTTPS</label>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>admin</td>
              <td>L0</td>
              <td>2023-07-28 00:00:00</td>
              <td>2023-07-28 06:00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className='content-section'>
      <h3>작업 종료 구분</h3>
      <table className='table table-row'>
        <caption>table caption</caption>
        <colgroup>
          <col style={{ width: '25%' }} />
          <col style={{ width: '75%' }} />
        </colgroup>
        <tbody>
          <tr>
            <th scope='col'>작업 종료 구분</th>
            <td>
              정상종료
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='content-section'>
      <h3>세부 작업 결과</h3>
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
              2023-08-08 15:00 ~ 2023-08-08 17:00
            </td>
          </tr>
          <tr>
            <th scope='row'>기업자 영향</th>
            <td>
              Y
            </td>
            <th scope='row'>장애시간</th>
            <td>
              무중단
            </td>
          </tr>
          <tr>
            <th scope='row'>작업내용</th>
            <td colSpan={3}>
              작업 내용 입력
            </td>
          </tr>
          <tr>
            <th scope='row'>작업세부</th>
            <td colSpan={3}>
              인트라/세부 경로/ 세부
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='content-section'>
      <h3>작업자 정보 결과</h3>
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
              <div className='textarea' style={{ height: '66px' }}>
                검색/기간망지원/홍길동<br />
                테스트/기간망/김철수<br />
                예시/예시/김영희<br />
                테스트/기간망/김철수<br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='content-section'>
      <h3>사업자/벤더사 작업 투입 인력</h3>
      <table className='table'>
        <caption>table caption</caption>
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '30%' }} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope='col'>회사/소속</th>
            <th scope='col'>담당자</th>
            <th scope='col'>사무실/핸드폰 번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>파트너스</td>
            <td>홍길동</td>
            <td>010-1234-5678</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>)
}

export default ServiceDetail;
