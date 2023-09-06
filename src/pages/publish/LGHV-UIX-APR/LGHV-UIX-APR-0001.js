import ServicetaskDetail from '../LGHV-UIX-WRK/LGHV-UIX-WRK-0004';
import DisabilityMngDetail from '../LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail';
import AccUserDetail from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0002';
import AccEquipmentDetail from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0006';
import { useLocation } from 'react-router-dom';

function ApprovalDetail() {
  const location = useLocation();
  const current = location.pathname.substring(33);

  console.log(location.pathname);

  return (
    <>
      <div style={{ color: 'red' }}>{location.pathname}</div>
      {
        {
          wrk: <ServicetaskDetail />,
          blk: <DisabilityMngDetail />,
          accUser: <AccUserDetail />,
          accEq: <AccEquipmentDetail />
        }[current]
      }
    </>
  )
}

export default ApprovalDetail;
