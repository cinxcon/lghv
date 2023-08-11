import React, { useState } from 'react';

const CommonPopup = ({ isOpen, onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleConfirm = () => {
    onConfirm(inputValue);
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className='btn' onClick={handleConfirm}>Confirm</button>
      <button className='btn btn-black' onClick={onClose}>Close</button>
    </div>
  );
};

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonValues, setButtonValues] = useState({});

  const openPopup = (button) => {
    setPopupOpen(true);
    setSelectedButton(button);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedButton(null);
  };

  const handleConfirm = (value) => {
    setButtonValues((prevValues) => ({
      ...prevValues,
      [selectedButton]: value
    }));
  };

  return (
    <div>
      <button className='btn' onClick={() => openPopup('button1')}>Open Popup for Button 1</button>
      <button className='btn'onClick={() => openPopup('button2')}>Open Popup for Button 2</button>
      <button className='btn' onClick={() => openPopup('button3')}>Open Popup for Button 3</button>

      <CommonPopup
        isOpen={popupOpen}
        onClose={closePopup}
        onConfirm={handleConfirm}
      />

      <div>
        <p>Button 1 Value: {buttonValues.button1}</p>
        <p>Button 2 Value: {buttonValues.button2}</p>
        <p>Button 3 Value: {buttonValues.button3}</p>
      </div>
    </div>
  );
};

export default App;
