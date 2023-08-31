import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function SysPsnInfoInquiryLog() {
  const pagedata = {
    title: '로그 관리',
    subtitle: '개인정보조회로그',
    SubMenu: 'yes'
  }
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
      <div className='search-wrap type-s'>
          <table className='search'>
            <caption>로그 검색 정보</caption>
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '65%' }} />
              </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="regdate">기간</label></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='datepickers-wrap'>
                      <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      ~
                      <span><DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    </span>
                    </div>
                </td>
                <td>
                  <div className='right'>
                      <button className='btn btn-low btn-ref'>초기화</button>
                      <button className='btn btn-black btn-search-txt ml10'>검색</button>
                  </div>
                  </td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
      </div>
      {/* 목록 영역 */}
        <table className="table">
          <caption>작업 목록 리스트</caption>
          <colgroup>
            <col span="6" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>조회 내용</th>
              <th>조회 화면</th>
              <th>조회자</th>
              <th>조회구분</th>
              <th>조회 일자</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>고객 정보 10,000건 조회</td>
            <td>SMS 수신거부 가입자 관리</td>
            <td>홍길동(012312)</td>
            <td>화면 조회</td>
            <td>2023/07/12 14:00:00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>고객 정보 10,000건 조회</td>
            <td>SMS 수신거부 가입자 관리</td>
            <td>홍길동(012312)</td>
            <td>엑셀 출력</td>
            <td>2023/07/12 14:00:00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>고객 정보 10,000건 조회</td>
            <td>SMS 수신거부 가입자 관리</td>
            <td>홍길동(012312)</td>
            <td>화면 조회</td>
            <td>2023/07/12 14:00:00</td>
          </tr>
          <tr>
            <td>4</td>
            <td>고객 정보 10,000건 조회</td>
            <td>SMS 수신거부 가입자 관리</td>
            <td>홍길동(012312)</td>
            <td>엑셀 출력</td>
            <td>2023/07/12 14:00:00</td>
          </tr>
          <tr>
            <td>5</td>
            <td>고객 정보 10,000건 조회</td>
            <td>SMS 수신거부 가입자 관리</td>
            <td>홍길동(012312)</td>
            <td>화면 조회</td>
            <td>2023/07/12 14:00:00</td>
          </tr>
          <tr>
            <td>6</td>
            <td>고객 정보 10,000건 조회</td>
            <td>SMS 수신거부 가입자 관리</td>
            <td>홍길동(012312)</td>
            <td>엑셀 출력</td>
            <td>2023/07/12 14:00:00</td>
          </tr>
          </tbody>
        </table>
      <ResultNoData />
      <ResultListPaging />
    </div>
    </>
  )
}
export default SysPsnInfoInquiryLog;
