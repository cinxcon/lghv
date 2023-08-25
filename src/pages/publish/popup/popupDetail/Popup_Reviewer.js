import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

const Rreviewer = ({ onItemSelected }) => {
  const [treeData, setTreeData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('../data/response_1692163585947.json'); // JSON 파일 경로를 넣어주세요
      setTreeData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const listData = {
    N00: [
      { id: 'da', title: '대표이사', name: '김헬로' },
      { id: 'db', title: '품질혁신팀', name: '손혁신' },
      { id: 'dc', title: '미디어운영팀', name: '이디어' },
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' },
      { id: 'de', title: '품질안전협력', name: '박안전' },
      { id: 'df', title: 'OMC팀', name: '권큐엠' },
      { id: 'dg', title: '뉴비즈운영팀', name: '손뉴비' }
    ],
    N000A00001: [
      { id: 'da', title: '대표이사', name: '김헬로' }
    ],
    N000C00020: [
      { id: 'db', title: '품질혁신팀', name: '손혁신' }
    ],
    N000D00404: [
      { id: 'db', title: '품질혁신팀', name: '손혁신' }
    ],
    N000F00100: [
      { id: 'dc', title: '미디어운영팀', name: '이디어' },
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' },
      { id: 'de', title: '품질안전협력', name: '박안전' }
    ],
    N000D00211: [
      { id: 'dc', title: '미디어운영팀', name: '이디어' }
    ],
    N000D00130: [
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' },
      { id: 'de', title: '품질안전협력', name: '박안전' }
    ],
    N000001301: [
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' }
    ],
    N00G000240: [
      { id: 'de', title: '품질안전협력', name: '박안전' }
    ],
    N00G000261: [
      { id: 'df', title: 'OMC팀', name: '권큐엠' }
    ],
    N00G000282: [
      { id: 'dg', title: '뉴비즈운영팀', name: '손뉴비' }
    ],
    N00cjworld: [
      { id: 'dh', title: '가상부서', name: '김나니' }
    ],
    N00G000308: [
      { id: 'dh', title: '가상부서', name: '김나니' }
    ]
  };

  const [selectedTree, setSelectedTree] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [trActive, setTrActive] = useState('');

  const handleItemSelected = (item) => {
    setSelectedTree(item.deptId);
  };
  const listItemSelect = (item) => {
    const newRow = { id: item.id, title: item.title, name: item.name };
    const activeListItem = document.getElementById(item.id);
    console.log(activeListItem);
    activeListItem.classList.add('active');
    if (!isDuplicate(newRow)) {
      setTableData([...tableData, newRow]);
    }
  };
  const isDuplicate = (newRow) => {
    // newRow와 rows에 이미 있는 데이터를 비교하여 중복 여부 확인
    return tableData.some((tableData) => tableData.name === newRow.name);
  };

  const deleteRow = (id) => {
    const updatedData = tableData.filter(row => row.id !== id);
    const listItem = document.getElementById(id);
    if (tableData.length === 1) {
      alert('선택 내용이 사라 집니다.');
      setSelectedName(null);
    }
    setTableData(updatedData);
    // setTrActive(null);
    if (listItem !== null) {
      listItem.classList.remove('active');
    }
  };

  const reviewerSelect = (name, rowIndex) => {
    setTrActive(rowIndex);
    setSelectedName(name); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };

  const handleConfirmClick = () => {
    if (selectedName === null) {
      alert('검토자를 선택하지 않으셨습니다.');
    } else {
      // onItemSelected(selectedName);
    }
  };

  const getMenuItems = () => {
    if (selectedTree === null) return null;

    return listData[selectedTree].map((item) => (
      <li key={item.id} id={item.id} onClick={() => listItemSelect(item)} ><span className="item-title">{item.title}</span><span className="item-name">{item.name}</span></li>
    ));
  };

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
        <h2>검토자 지정</h2>
      </div>
      <div className='flex-wrap align-start'>
        <div className='approval-conts half'>
          <div className='tree-wrap'>
          <div className='tree-logo'>LG hellovision</div>
                <div className='tree-conts'>
                {treeData.depts && treeData.depts.map((item) => (
                    <TreeItem
                      key={item.deptId}
                      item={item}
                      onItemSelected={handleItemSelected}
                    />
                ))}
                </div>
          </div>
          <div className='list-item'>
                <ul>
                  {getMenuItems()}
                </ul>
          </div>
      </div>
        <div className='selected-item'>
              <table className="popup-table">
                <caption>검토자 리스트</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '40%' }} />
                  <col style={{ width: '40%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">부서</th>
                    <th scope="col">성명</th>
                  </tr>
                </thead>
                <tbody>
                {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td><button onClick={() => deleteRow(row.id)} className='btn btn-delete'>x</button></td>
                  <td onClick={() => reviewerSelect(row.name, rowIndex)} className={trActive === rowIndex ? 'active' : ''}>{row.title}</td>
                  <td onClick={() => reviewerSelect(row.name, rowIndex)} className={trActive === rowIndex ? 'active' : ''}>{row.name}</td>
                </tr>
                ))}
                </tbody>
              </table>
        </div>
      </div>
        <div className='right'>
          <button onClick={handleConfirmClick} className='btn btn-lg btn-primary ml10'>검토자 설정</button>
        </div>
      </div>
      </PopupPortal>
    </>
  );
};

const TreeItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemSelected = (item) => {
    const treeitem = document.querySelectorAll('.item-name');
    const activeItem = document.getElementById(item.deptId);
    treeitem.forEach(element => {
      element.classList.remove('active');
    });
    activeItem.classList.add('active');
    onItemSelected(item);
  };

  return (
    <div className={`tree-item ${item.depts.length === 0 ? 'close' : 'open'}`}>
      <div className="tree-content">
        {item.depts.length !== 0
          ? (<button onClick={handleToggle} className={isExpanded
              ? 'open'
              : ''} />)
          : null}
        {item.depts.length !== 0
          ? (<span id={item.deptId} className='item-name' onClick={() => handleItemSelected(item)}>{item.deptName}</span>)
          : (<span id={item.deptId} className='item-name not-children' onClick={() => handleItemSelected(item)}>{item.deptName}</span>)
        }
      </div>
      {isExpanded &&
        item.depts &&
        item.depts.map((child) => (
          <div key={child.deptId} className="tree-children">
            <TreeItem item={child} onItemSelected={onItemSelected} />
          </div>
        ))}
  </div>
  );
};

export default Rreviewer;
