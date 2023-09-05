import { useState } from 'react';

function ServiceDetail() {
  //  토글
  const [divStates, setDivStates] = useState([false, false, false, false, false, false, false, false]);

  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };
  return (
  <>
    <div className='content-section' id='approval-line'>
      <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
          <h3>결재</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>검색영역 열기</button>
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
    <div className='content-section'>
      <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
        <h3>작업 개요</h3>
        <div className="btn-wrap">
            <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>검색영역 열기</button>
        </div>
      </div>
      <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
        <table className='table table-row'>
          <caption>table caption</caption>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '30%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
          <tbody>
          <tr>
              <th scope='row'>등록번호</th>
              <td colSpan={3}>T01234567891012</td>
            </tr>
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
                  <label htmlFor="ser_5" className='color-info'>VOD</label>
                  <input type="checkbox" name="service" id="ser_6" value="" disabled />
                  <label htmlFor="ser_6" className='color-info'>ESS</label>
                  <input type="checkbox" name="service" id="ser_7" value="" disabled />
                  <label htmlFor="ser_7" className='color-info'>클라우드</label>
                  <input type="checkbox" name="service" id="ser_8" value="" disabled />
                  <label htmlFor="ser_8" className='color-info'>전송망</label>
                  <input type="checkbox" name="service" id="ser_9" value="" disabled />
                  <label htmlFor="ser_9" className='color-info'>국간망</label>
                  <input type="checkbox" name="service" id="ser_10" value="" disabled />
                  <label htmlFor="ser_10" className='color-info'>기간망</label>
                  <input type="checkbox" name="service" id="ser_11" value="" disabled />
                  <label htmlFor="ser_11" className='color-info'>기반</label>
                  <input type="checkbox" name="service" id="ser_12" value="" disabled />
                  <label htmlFor="ser_12" className='color-info'>기타</label>
                  <input type="checkbox" name="service" id="ser_13" value="" disabled />
                  <label htmlFor="ser_13" className='color-info'>전체</label>
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
                <span className='ico_attach'>작업 등록건에 대하여.pdf</span>
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
            <button className={`btn-fold ${divStates[2] ? 'close' : ''}`} onClick={() => handleDivToggle(2)} id='fold-open'>검색영역 열기</button>
        </div>
      </div>
      <div className={`toggle-box ${divStates[2] ? 'hide' : ''} `}>
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
    </div>
    <div className='content-section'>
      <div className={`flex-wrap between ${divStates[3] ? 'under-line' : ''}`}>
        <h3>세부작업 절차  <span className='color-primary'>*</span></h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[3] ? 'close' : ''}`} onClick={() => handleDivToggle(3)} id='fold-open'>검색영역 열기</button>
            </div>
        </div>
      <div className={`toggle-box ${divStates[3] ? 'hide' : ''} `}>
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
    </div>
    <div className='content-section'>
      <div className={`flex-wrap between ${divStates[4] ? 'under-line' : ''}`}>
          <h3>작업자 정보</h3>
              <div className="btn-wrap">
                  <button className={`btn-fold ${divStates[4] ? 'close' : ''}`} onClick={() => handleDivToggle(4)} id='fold-open'>검색영역 열기</button>
              </div>
          </div>
        <div className={`toggle-box ${divStates[4] ? 'hide' : ''} `}>
          <table className='table table-row'>
            <caption>table caption</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '85%' }} />
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
              <tr>
                <th scope='col'>장비정보</th>
                <td>
                  <p>사용자그룹/장비이름/장비에 속한 계정</p>
                  <p>사용자그룹/장비이름/장비에 속한 계정</p>
                  <p>사용자그룹/장비이름/장비에 속한 계정</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    <div className='content-section'>
        <div className={`flex-wrap between ${divStates[5] ? 'under-line' : ''}`}>
            <h3>작업 종료 구분</h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[5] ? 'close' : ''}`} onClick={() => handleDivToggle(5)} id='fold-open'>검색영역 열기</button>
            </div>
        </div>
        <div className={`toggle-box ${divStates[5] ? 'hide' : ''} `}>
          <table className='table table-row'>
            <caption>table caption</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '85%' }} />
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
    </div>
    <div className='content-section'>
      <div className={`flex-wrap between ${divStates[6] ? 'under-line' : ''}`}>
          <h3>세부 작업 결과</h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[6] ? 'close' : ''}`} onClick={() => handleDivToggle(6)} id='fold-open'>검색영역 열기</button>
            </div>
      </div>
      <div className={`toggle-box ${divStates[6] ? 'hide' : ''} `}>
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
    </div>
    <div className='content-section'>
      <div className={`flex-wrap between ${divStates[7] ? 'under-line' : ''}`}>
        <h3>작업자 정보 결과</h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[7] ? 'close' : ''}`} onClick={() => handleDivToggle(7)} id='fold-open'>검색영역 열기</button>
            </div>
      </div>
      <div className={`toggle-box ${divStates[7] ? 'hide' : ''} `}>
        <table className='table table-row'>
          <caption>table caption</caption>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '85%' }} />
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
            <tr>
                <th scope='col'>장비정보</th>
                <td>
                  <p>사용자그룹/장비이름/장비에 속한 계정</p>
                  <p>사용자그룹/장비이름/장비에 속한 계정</p>
                  <p>사용자그룹/장비이름/장비에 속한 계정</p>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className='content-section'>
      <div className={`flex-wrap between ${divStates[8] ? 'under-line' : ''}`}>
        <h3>사업자/벤더사 작업 투입 인력</h3>
            <div className="btn-wrap">
                <button className={`btn-fold ${divStates[8] ? 'close' : ''}`} onClick={() => handleDivToggle(8)} id='fold-open'>검색영역 열기</button>
            </div>
      </div>
      <div className={`toggle-box ${divStates[8] ? 'hide' : ''} `}>
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
    </div>
  </>)
}

export default ServiceDetail;
