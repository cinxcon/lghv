import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardSearch = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <>
        <div className='search-wrap'>
            <div className='title'>날짜검색</div>
            <div className="date-wrap">
                <div className='date-box'>
                    <label>시작일 :</label>
                    <DatePicker selected={startDate} onChange={handleStartDateChange} dateFormat="yyyy.MM.dd" />
                </div>
                ~
                <div className='date-box'>
                    <label>종료일 :</label>
                    <DatePicker selected={endDate} onChange={handleEndDateChange} dateFormat="yyyy.MM.dd" />
                </div>
            </div>
            <div className='btn-box'>
                <button type='button' className='btn btn-black'>검색</button>
            </div>
        </div>
    </>
  );
}
export default DashboardSearch;
