import React from 'react';

const CustomLegendCircle = ({ data, labels }) => {
// Calculate percentages
  const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
  const percentages = data.datasets[0].data.map((value) => ((value / total) * 100).toFixed(1));
  return (
    <div className='custom-legend vertical'>
      {labels.map((label, index) => (
        <div key={index} className='legend-item'>
          <span style={{ backgroundColor: data.datasets[0].backgroundColor[index] }} className='color-box'></span>
          <span className='label-item'>{label}</span><span>{percentages[index]}%</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegendCircle;
