import ServicetaskDetail from '../LGHV-UIX-WRK/LGHV-UIX-WRK-0004';
import DisabilityMngDetail from '../LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail';
import AccUserDetailAPR from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0001-DetailAPR';
import AccEquipmentDetailAPR from '../LGHV-UIX-ACC/LGHV-UIX-ACC-0006-DetailAPR';
import { useLocation } from 'react-router-dom';

function ApprovalDetail() {
  const location = useLocation();
  const current = location.pathname.substring(33);

  console.log(location.pathname);

  return (
    <>
      {
        {
          wrk: <ServicetaskDetail />,
          blk: <DisabilityMngDetail />,
          accUser: <AccUserDetailAPR />,
          accEq: <AccEquipmentDetailAPR />
        }[current]
      }
    </>
  )
}

export default ApprovalDetail;
