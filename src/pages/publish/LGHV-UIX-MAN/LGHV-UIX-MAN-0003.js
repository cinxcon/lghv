import React from 'react';
import DashboardSearch from './component/DashboardSearch';
import ContentTitle from '../layout/ContentTitle';
import DashboardDetail from './component/DashboardDetail';

const DashBorad = () => {
  const pagedata = {
    title: '대시보드',
    subtitle: '대시보드',
    SubMenu: 'no',
    isDetail: 'no'
  }
  return (
    <>
    <div className='dashboard-wrap'>
      <ContentTitle data={pagedata} />
      <DashboardSearch/>
      <div className="chart-wrap">
        <div className="chart-box">
          <DashboardDetail type={'bar'} />
        </div>
        <div className="chart-box">
          <DashboardDetail type={'bar'} />
        </div>
        <div className="chart-box">
          <DashboardDetail type={'pie'} />
        </div>
        <div className='chart-box'>
          <DashboardDetail type={'pie'} />
        </div>
        <div className='chart-box wide'>
          <DashboardDetail type={'line'} />
        </div>
      </div>
    </div>
    </>
  );
};
export default DashBorad;
