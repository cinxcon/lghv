import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [highlightedWeek, setHighlightedWeek] = useState([]);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setHighlightedWeek([]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    closePopup();
  };

  const selectToday = () => {
    setSelectedDate(new Date());
    setHighlightedWeek([]);
    closePopup();
  };

  const selectYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    setSelectedDate(yesterday);
    setHighlightedWeek([]);
    closePopup();
  };

  const selectLastWeek = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    setSelectedDate(weekAgo);

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekAgo);
      date.setDate(date.getDate() + i);
      weekDates.push(date);
    }
    setHighlightedWeek(weekDates);

    const formattedStartDate = weekDates[0].toLocaleDateString('ko-KR');
    const formattedEndDate = weekDates[6].toLocaleDateString('ko-KR');
    setSelectedDate(`${formattedStartDate} - ${formattedEndDate}`);

    closePopup();
  };

  return (
    <div className="App">
      <input type="text" onClick={openPopup} value={selectedDate || ''} readOnly />
      {isOpen && (
        <div className="popup">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            highlightDates={highlightedWeek}
            inline
          />
          <button onClick={selectToday}>오늘</button>
          <button onClick={selectYesterday}>어제</button>
          <button onClick={selectLastWeek}>최근 1주일</button>
          <button onClick={closePopup}>닫기</button>
          <style>{`
            .react-datepicker__day--highlighted {
              background-color: lightblue;
              color: black;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default App;
