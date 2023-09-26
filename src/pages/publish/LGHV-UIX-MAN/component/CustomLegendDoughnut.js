import React from 'react';

const CustomLegendCircle = ({ data, labels }) => {
  return (
    <div className='custom-legend vertical'>
      {labels.map((label, index) => (
        <div key={index} className='legend-item half'>
          <div>
            <span style={{ backgroundColor: data.datasets[0].backgroundColor[index] }} className='color-box'></span>
            <span className='label-item'>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomLegendCircle;
