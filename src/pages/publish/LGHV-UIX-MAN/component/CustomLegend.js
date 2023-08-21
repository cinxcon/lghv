import React from 'react';

const CustomLegend = ({ datasets }) => {
  return (
    <div className='custom-legend'>
        {datasets.map((dataset) => (
        <div key={dataset.label} className='legend-item'>
            <div style={{ backgroundColor: dataset.color }} className='color-box'></div>
                <span>{dataset.label}</span>
        </div>
        ))}
    </div>
  );
};

export default CustomLegend;
