/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';

function DisabilityMngList(props) {
  const { data } = props;
  const pagedata = {
    title: '장애관리',
    subtitle: '장애목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const pathData = data;
  const navigate = useNavigate();
  const selectedWork = () => {
    navigate('/LGHV-UIX-BLK/LGHV-UIX-BLK-0002-Detail', { state: pathData });
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      <button onClick={selectedWork} className='btn btn-lg btn-primary'>상세보기</button>
    </>
  );
};
export default DisabilityMngList;
