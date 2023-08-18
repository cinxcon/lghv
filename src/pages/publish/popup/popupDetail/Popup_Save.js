import { useState } from 'react';

function PopupNotiMethod(onItemSelected) {
  const [selectedItem, setSelectedItem] = useState();
  const handleItemSelected = () => {
    setSelectedItem(selectedItem);
  }
  return (
    <>
    <div className="flex-wrap">
        <input type="text" name="line" id="line"></input>
    </div>
    <div className="btn-group center">
        <button type="button" className="btn btn-lg btn-low" onClick={handleItemSelected}>취소</button>
        <button type="button" className="btn btn-lg btn-primary" onClick={handleItemSelected}>저장</button>
    </div>
    </>
  )
}

export default PopupNotiMethod;
