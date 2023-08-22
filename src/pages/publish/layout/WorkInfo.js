import { Link } from 'react-router-dom';

function WorkInfo() {
  return (
    <>
        <div className='content-work-info'>
            <h3>작업건수</h3>
            <div>
            <ul className='flex-wrap'>
                <li><span>결재 대기</span><Link to='/LGHV-UIX-APR/LGHV-UIX-APR-0001'><span className='color-primary'>1</span>건</Link></li>
                <li><span>공람</span> <Link to='/LGHV-UIX-APR/LGHV-UIX-APR-0003'><span className='color-primary'>9</span>건</Link></li>
                <li><span>반려</span> <Link to='/LGHV-UIX-APR/LGHV-UIX-APR-0004'><span className='color-primary'>1</span>건</Link></li>
                <li><span>작업</span> <Link to='/LGHV-UIX-WRK/LGHV-UIX-WRK-0003'><span className='color-primary'>1</span>건</Link></li>
                <li><span>장애</span> <Link to='/LGHV-UIX-BLK/LGHV-UIX-BLK-0001'><span className='color-primary'>1</span>건</Link></li>
            </ul>
            </div>
        </div>
    </>
  )
}
export default WorkInfo;
