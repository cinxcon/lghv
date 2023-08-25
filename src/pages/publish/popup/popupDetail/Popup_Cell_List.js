import { useState } from 'react';
import { createPortal } from 'react-dom';
import ResultPageView from '../../common/ResultPageView';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

const CellList = ({ onItemSelected }) => {
  const data = [
    { cell1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] }
  ];
  const numbers = data[0].cell1; // Extract the numbers from the data

  // const [checkboxStates, setCheckboxStates] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState(
    numbers.reduce((acc, number) => {
      acc[number] = false;
      return acc;
    }, {})
  );
  // 전체 선택
  const handleCheckAll = () => {
    const newCheckboxStates = Object.fromEntries(
      Object.keys(checkboxStates).map(key => [key, !allChecked])
    );
    setCheckboxStates(newCheckboxStates);
    setCheckedCount(allChecked ? 0 : numbers.length);
  };
  const handleCheckboxChange = (number) => {
    const newCheckboxStates = {
      ...checkboxStates,
      [number]: !checkboxStates[number]
    };

    setCheckboxStates(newCheckboxStates);
    setCheckedCount(newCheckboxStates[number] ? checkedCount + 1 : checkedCount - 1);
  };

  // 체크박스 그리기
  const checkboxRows = [];
  const rowCount = Math.ceil(numbers.length / 10); // Calculate the number of rows needed

  for (let i = 0; i < rowCount; i++) {
    const rowStart = i * 10;
    const rowEnd = rowStart + 10;

    const checkboxGroup = numbers.slice(rowStart, rowEnd).map((number, index) => (
    <td key={number}>
        <input type="checkbox" id={`checkbox${number}`} name={`checkbox${number}`} checked={checkboxStates[number]} onChange={() => handleCheckboxChange(number)} />
        <label htmlFor={`checkbox${number}`}>{number}</label>
    </td>
    ));

    const emptyCellsCount = 10 - checkboxGroup.length;
    for (let j = 0; j < emptyCellsCount; j++) {
      checkboxGroup.push(<td key={`empty${j}`} />);
    }
    checkboxRows.push(<tr key={i}>{checkboxGroup}</tr>);
  }
  const allChecked = checkedCount === numbers.length;

  return (
    <>
     <PopupPortal>
        <style>
            {`
            #root {display: none;}
            `}
        </style>
        <div className='new-window-wrap'>
            <div className="content-title">
             <h2>CELL 조회</h2>
            </div>
            <div className='pop-search-wrap'>
                <div className='flex-wrap'>
                <label htmlFor="cell_search">CELL</label>
                    <span className='input-btn-wrap ml10'>
                        <input type='text' name='cell_search' id='cell_search' className='input-w-80' />
                        <div className='btn-wrap'>
                            <button className='btn btn-ref'>초기화</button>
                            <button className='btn btn-black btn-search'>검색</button>
                        </div>
                    </span>
                </div>
            </div>
            <div className="result-pageview mb15">
                <ResultPageView />
                <div className='btn-wrap'>
                    <span className='cheked-item'><em>{ checkedCount }</em>개 선택</span>
                    <button type="button" className='btn btn-low btn-md ml10' onClick={handleCheckAll}>SO 전제선택</button>
                    <button type="button" className='btn btn-md'>확인</button>
                </div>
            </div>
            <table className="popup-table center">
                <caption>cell 정보</caption>
                <tbody>{checkboxRows}</tbody>
            </table>
        </div>
        </PopupPortal>
     </>
  );
};

export default CellList;
