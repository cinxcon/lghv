import { Link } from 'react-router-dom';

function WorkInfo() {
  return (
    <>
        <div className='content-work-info'>
            <h3>작업건수</h3>
            <div>
            <ul className='flex-wrap'>
                <li><Link to='/LGHV-UIX-APR/LGHV-UIX-APR-0000'><span>결재 대기</span><span className='color-primary'>1</span></Link></li>
                <li><Link to='/LGHV-UIX-APR/LGHV-UIX-APR-0000'><span>공람</span><span className='color-primary'>9</span></Link></li>
                <li><Link to='/LGHV-UIX-APR/LGHV-UIX-APR-0000'><span>반려</span><span className='color-primary'>1</span></Link></li>
                <li><Link to='/LGHV-UIX-WRK/LGHV-UIX-WRK-0003'><span>작업</span><span className='color-primary'>1</span></Link></li>
                <li><Link to='/LGHV-UIX-BLK/LGHV-UIX-BLK-0002'><span>장애</span><span className='color-disable'>0</span></Link></li>
            </ul>
            </div>
        </div>
    </>
  )
}
export default WorkInfo;
