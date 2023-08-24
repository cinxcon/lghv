import React from 'react';
import DashboardSearch from './component/DashboardSearch';
import ContentTitle from '../layout/ContentTitle';
import DashboardDetail from './component/DashboardDetail';
import DashBoradTable from './component/DashBoradTable';

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
          <DashboardDetail type={'pie'} index={'1'} />
        </div>
        <div className='chart-box'>
          <DashboardDetail type={'pie'} index={'2'} />
        </div>
        <div className="chart-box">
          <DashboardDetail type={'line'} />
        </div>
        <div className="chart-box">
          <DashboardDetail type={'bar'} />
        </div>
        <div className='chart-box wide'>
          <DashboardDetail type={'wideline'} />
        </div>
      </div>
      <DashBoradTable />
    </div>
    </>
  );
};
export default DashBorad;
