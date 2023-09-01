import { useState } from 'react';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupSysComSort() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>정렬 순서 변경</h2>
        </div>
        <div className='over-flow-y' style={{ height: '593px' }}>
          <table className="table">
            <caption>정렬 순서 변경</caption>
            <colgroup>
              <col style={{ width: '70%' }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">그룹명</th>
                <th scope="col">순서변경</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='left'>점검 결과</td>
                <td><button className="btn-down-square">아래로</button></td>
              </tr>
              {
                resultList.map(function(a, i) {
                  return (
                    <tr key={i}>
                      <td className='left'>지식분류 구분</td>
                      <td>
                        <div className='btn-wrap'>
                          <button className="btn-up-square">위로</button>
                          <button className="btn-down-square">아래로</button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className='detail-bottom-btn-group center mt30'>
          <button type="button" className="btn btn-lg btn-primary">확인</button>
        </div>
      </div>
    </PopupPortal>
  )
}

export default PopupSysComSort;
