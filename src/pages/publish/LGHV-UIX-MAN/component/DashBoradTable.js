import { Link } from 'react-router-dom';

const DashboardTable = () => {
  return (
    <>
        <div className='flex-wrap between'>
            <div className='half'>
                <div className="flex-wrap between">
                    <div className='title'>
                        <h3>작업 현황</h3>
                    </div>
                    <div>
                        <Link key={''} to={''} className='more-link'>더보기</Link>
                    </div>
                </div>
                <table className="table mt8">
                        <caption>작업현황 데이터 정보</caption>
                        <colgroup>
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
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
                            <td>강원<br/>인프라팀</td>
                            <td>전송망</td>
                            <td>제목</td>
                            <td>2023.01.01 01:00</td>
                            <td>2023.01.01 02:00</td>
                            <td>1H</td>
                        </tr>
                        <tr>
                            <td>T23070000000</td>
                            <td>강원<br/>인프라팀</td>
                            <td>전송망</td>
                            <td>제목</td>
                            <td>2023.01.01 01:00</td>
                            <td>2023.01.01 02:00</td>
                            <td>1H</td>
                        </tr>
                        <tr>
                            <td>T23070000000</td>
                            <td>강원<br/>인프라팀</td>
                            <td>전송망</td>
                            <td>제목</td>
                            <td>2023.01.01 01:00</td>
                            <td>2023.01.01 02:00</td>
                            <td>1H</td>
                        </tr>
                        </tbody>
                </table>
            </div>
            <div className='half'>
                <div className="flex-wrap between">
                    <div className='title'>
                        <h3>장애 목록</h3>
                    </div>
                    <div>
                    <Link key={''} to={''} className='more-link'>더보기</Link>
                    </div>
                </div>
                <table className="table mt8">
                    <caption>장애 목록 데이터 정보</caption>
                    <colgroup>
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '12%' }} />
                        <col style={{ width: '12%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>등록번호</th>
                        <th>접수부서</th>
                        <th>대상서비스</th>
                        <th>장애등급</th>
                        <th>구역명</th>
                        <th>제목</th>
                        <th>시작 일시</th>
                        <th>종료 일시</th>
                        <th>장애시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>T23070000000</td>
                        <td>강원<br/>인프라팀</td>
                        <td>DTV+ATV</td>
                        <td>지정안함</td>
                        <td>호남방송</td>
                        <td>제목</td>
                        <td>2023.01.01 01:00</td>
                        <td>2023.01.01 02:00</td>
                        <td>1H</td>
                    </tr>
                    <tr>
                        <td>T23070000000</td>
                        <td>강원<br/>인프라팀</td>
                        <td>DTV+ATV</td>
                        <td>지정안함</td>
                        <td>호남방송</td>
                        <td>제목</td>
                        <td>2023.01.01 01:00</td>
                        <td>2023.01.01 02:00</td>
                        <td>1H</td>
                    </tr>
                    <tr>
                        <td>T23070000000</td>
                        <td>강원<br/>인프라팀</td>
                        <td>DTV+ATV</td>
                        <td>지정안함</td>
                        <td>호남방송</td>
                        <td>제목</td>
                        <td>2023.01.01 01:00</td>
                        <td>2023.01.01 02:00</td>
                        <td>1H</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}
export default DashboardTable;
