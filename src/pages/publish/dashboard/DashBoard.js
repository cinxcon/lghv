import React from 'react';
import DashboardSearch from './component/DashboardSearch';
import ContentTitle from '../layout/ContentTitle';
import DashboardDetail from './component/DashboardDetail';

const DashBorad = () => {
  return (
    <>
    <div className='dashboard-wrap'>
      <ContentTitle />
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
