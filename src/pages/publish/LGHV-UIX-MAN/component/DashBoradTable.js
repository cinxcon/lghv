import { Link } from 'react-router-dom';

const DashboardTable = () => {
  return (
    <>
        <div className='content-section'>
            <div className="flex-wrap between">
                <div className='title'>
                    <h3>상황판</h3>
                </div>
                <div>
                    <Link key={''} to={''} className='more-link'>더보기</Link>
                </div>
            </div>
            <table className="table mt8">
                    <caption>작업현황 데이터 정보</caption>
                    <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '50%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '5%' }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>등록번호</th>
                        <th>등록부서</th>
                        <th>작업유형</th>
                        <th>제목</th>
                        <th>시작 일시</th>
                        <th>종료 일시</th>
                        <th>소요시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>T23070000000</td>
                        <td>강원 인프라팀</td>
                        <td>전송망</td>
                        <td className='left'>제목</td>
                        <td>2023.01.01 01:00</td>
                        <td>2023.01.01 02:00</td>
                        <td>1H</td>
                    </tr>
                    <tr>
                        <td>T23070000000</td>
                        <td>강원 인프라팀</td>
                        <td>전송망</td>
                        <td className='left'>제목</td>
                        <td>2023.01.01 01:00</td>
                        <td>2023.01.01 02:00</td>
                        <td>1H</td>
                    </tr>
                    <tr>
                        <td>T23070000000</td>
                        <td>강원 인프라팀</td>
                        <td>전송망</td>
                        <td className='left'>제목</td>
                        <td>2023.01.01 01:00</td>
                        <td>2023.01.01 02:00</td>
                        <td>1H</td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <div className='content-section'>
            <div className="flex-wrap between">
                <div className='title'>
                    <h3>공지사항</h3>
                </div>
                <div>
                <Link key={''} to={''} className='more-link'>더보기</Link>
                </div>
            </div>
            <table className="table mt8">
                <caption>장애 목록 데이터 정보</caption>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '12%' }} />
                    <col style={{ width: '8%' }} />
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '15%' }} />
                </colgroup>
                <thead>
                <tr>
                    <th>등록번호</th>
                    <th>등록일</th>
                    <th>팝업공지</th>
                    <th>게시기간</th>
                    <th>등록자</th>
                    <th>제목</th>
                    <th>첨부</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>T23070000000</td>
                    <td>2023-01-01</td>
                    <td>Y</td>
                    <td>2023-09-05 ~2023-10-05</td>
                    <td>NSYD</td>
                    <td className='left'>제목</td>
                    <td className='left'><span className="ico_attach">파일명.doc</span></td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
  );
}
export default DashboardTable;
