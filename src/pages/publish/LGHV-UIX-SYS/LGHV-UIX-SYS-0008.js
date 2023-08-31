import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';
import Select from 'react-select';

function SysSendMailLog() {
  const pagedata = {
    title: '로그 관리',
    subtitle: '메일발송로그',
    SubMenu: 'yes'
  }
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);

  //  토글
  const [isToggled, setToggled] = useState(false);

  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  const optionsReceptionStatus = [
    { value: 'all', label: '전체' },
    { value: '발송', label: '발송' },
    { value: '미발송', label: '미발송' }
  ];
  const [receptionStatus, setReceptionStatus] = useState(optionsReceptionStatus[0]);

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
      <div className='search-wrap'>
        <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
        </div>
        <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
           <table className='search'>
            <caption>로그 검색 정보</caption>
              <colgroup>
                <col span={10} style={{ width: '10%' }} />
              </colgroup>
            <tbody>
              <tr>
                  <th scope="row"><label htmlFor="sendId">발송 ID</label></th>
                  <td colSpan={2}>
                    <input type="text" name="sendId" id="sendId" placeholder='ID' />
                  </td>
                  <th scope="row"><label htmlFor="sendName">발송자 이릉</label></th>
                  <td colSpan={2}>
                    <input type="text" name="sendName" id="sendName" placeholder='이름' />
                  </td>
                  <th scope="row"><label htmlFor="sendMail">발송자 이메일</label></th>
                  <td colSpan={3}>
                    <input type="text" name="sendMail" id="sendMail" placeholder='' />
                  </td>
              </tr>
              <tr>
                  <th scope="row"><label htmlFor="receiverName">수신자 이름</label></th>
                  <td colSpan={2}>
                    <input type="text" name="receiverName" id="receiverName" placeholder='이름' />
                  </td>
                  <th scope="row"><label htmlFor="receiverMail">수신자 메일</label></th>
                  <td colSpan={2}>
                    <input type="text" name="receiverMail" id="receiverMail" placeholder='' />
                  </td>
                  <th><label htmlFor="receptionStatus">발송 상태</label></th>
                  <td colSpan={3}>
                  <Select defaultValue={optionsReceptionStatus[0]} value={receptionStatus} onChange={setReceptionStatus} options={optionsReceptionStatus} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                </tr>
              <tr>
                <th scope="row"><label htmlFor="mailTitle">메일 제목</label></th>
                  <td colSpan={2}>
                    <input type="text" name="mailTitle" id="mailTitle" placeholder='제목' />
                  </td>
                <th scope="row"><label htmlFor="regdate">발송 일자</label></th>
                <td colSpan={2}>
                  <div className='flex-wrap between'>
                    <span className='datepickers-wrap'>
                      <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      ~
                      <span><DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    </span>
                  </div>
                </td>
                <td colSpan={4}></td>
              </tr>
            </tbody>
          </table>
          <div className='btn-wrap right'>
              <button className='btn btn-low btn-ref'>초기화</button>
              <button className='btn btn-black btn-search-txt'>검색</button>
          </div>
        </div>
      </div>
    </div>
    <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <span className='cheked-item'><em>0</em>개 선택</span>
          <button type="button" className='btn btn-md btn-del ml10'>삭제</button>
        </div>
      </div>
      {/* 목록 영역 */}
        <table className="table">
          <caption>작업 목록 리스트</caption>
          <colgroup>
            <col span="9" />
          </colgroup>
          <thead>
            <tr>
            <th></th>
            <th>발송ID</th>
            <th>발송자 이름</th>
            <th>발송자 이메일</th>
            <th>수신자 이름</th>
            <th>수신자 메일</th>
            <th>제목</th>
            <th>발송 일자</th>
            <th>발송상태</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
                <input type="checkbox" name="ck_1" id="ck_1" />
                <label htmlFor='ck_1'></label>
            </td>
            <td>L230810000047</td>
            <td>홍길동</td>
            <td>admin@hghv.com</td>
            <td>김순이</td>
            <td>user@hghv.com</td>
            <td>[작업 진행]</td>
            <td>2023/07/12 14:00:00</td>
            <td>발송</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="ck_2" id="ck_2" />
                <label htmlFor='ck_2'></label>
            </td>
            <td>L230810000047</td>
            <td>홍길동</td>
            <td>admin@hghv.com</td>
            <td>김순이</td>
            <td>user@hghv.com</td>
            <td>[작업 진행]</td>
            <td>2023/07/12 14:00:00</td>
            <td>발송</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="ck_3" id="ck_3" />
                <label htmlFor='ck_3'></label>
            </td>
            <td>L230810000047</td>
            <td>홍길동</td>
            <td>admin@hghv.com</td>
            <td>김순이</td>
            <td>user@hghv.com</td>
            <td>[작업 진행]</td>
            <td>2023/07/12 14:00:00</td>
            <td>발송</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="ck_4" id="ck_4" />
                <label htmlFor='ck_4'></label>
            </td>
            <td>L230810000047</td>
            <td>홍길동</td>
            <td>admin@hghv.com</td>
            <td>김순이</td>
            <td>user@hghv.com</td>
            <td>[작업 진행]</td>
            <td>2023/07/12 14:00:00</td>
            <td>발송</td>
        </tr>
          </tbody>
        </table>
      <ResultNoData />
      <ResultListPaging />
    </div>
    </>
  )
}
export default SysSendMailLog;
