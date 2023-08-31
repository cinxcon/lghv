import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function SysConnectLog() {
  const pagedata = {
    title: '로그 관리',
    subtitle: '접속 로그',
    SubMenu: 'yes'
  }
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);

  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };
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
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                <tbody>
                    <tr>
                        <th scope="row"><label htmlFor="logId">Log ID</label></th>
                        <td colSpan={2}>
                            <input type="text" name="logId" id="logId" placeholder='Log ID' />
                        </td>
                        <th scope="row"><label htmlFor="userId">사용자 ID</label></th>
                        <td colSpan={2}>
                            <input type="text" name="userId" id="userId" placeholder='사용자ID' />
                        </td>
                        <th scope="row"><label htmlFor="ipadress">IP 주소</label></th>
                        <td colSpan={3}>
                            <input type="text" name="ipadress" id="ipadress" placeholder='000.000.000.000' />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="method">접속 방법</label></th>
                        <td colSpan={2}>
                            <input type="text" name="method" id="method" placeholder='접속 방법' />
                        </td>
                        <th scope="row"><label htmlFor="title">주제</label></th>
                        <td colSpan={2}>
                            <input type="text" name="title" id="title" placeholder='주제' />
                        </td>
                        <th><label htmlFor="contents">내용</label></th>
                        <td colSpan={3}>
                            <input type="text" name="contents" id="contents" placeholder='내용' />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="regdate">Log 생성 일자</label></th>
                        <td colSpan={2}>
                        <div className='flex-wrap between'>
                            <span className='datepickers-wrap'>
                            <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                            ~
                            <span><DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                            </span>
                        </div>
                        </td>
                        <td colSpan={7}></td>
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
            <col span="8" />
          </colgroup>
          <thead>
            <tr>
                <th>
                </th>
                <th>LOG ID</th>
                <th>사용자 ID</th>
                <th>접속 방법</th>
                <th>IP주소</th>
                <th>주제</th>
                <th>내용</th>
                <th>LOG 생성 일저</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    <input type="checkbox" name="ck_1" id="ck_1" />
                    <label htmlFor='ck_1'></label>
                </td>
                <td>L230810000047</td>
                <td>200</td>
                <td>TOMS</td>
                <td>52.142.70.47</td>
                <td>로그인</td>
                <td>002000 로그인</td>
                <td>2023-01-01</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="ck_2" id="ck_2" />
                    <label htmlFor='ck_2'></label>
                </td>
                <td>L230810000047</td>
                <td>200</td>
                <td>TOMS</td>
                <td>52.142.70.47</td>
                <td>로그인</td>
                <td>002000 로그인</td>
                <td>2023-01-01</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="ck_3" id="ck_3" />
                    <label htmlFor='ck_3'></label>
                </td>
                <td>L230810000047</td>
                <td>200</td>
                <td>TOMS</td>
                <td>52.142.70.47</td>
                <td>로그인</td>
                <td>002000 로그인</td>
                <td>2023-01-01</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="ck_4" id="ck_4" />
                    <label htmlFor='ck_4'></label>
                </td>
                <td>L230810000047</td>
                <td>200</td>
                <td>TOMS</td>
                <td>52.142.70.47</td>
                <td>로그인</td>
                <td>002000 로그인</td>
                <td>2023-01-01</td>
            </tr>
          </tbody>
        </table>
      <ResultNoData />
      <ResultListPaging />
    </div>
    </>
  )
}
export default SysConnectLog;
