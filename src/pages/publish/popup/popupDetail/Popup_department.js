import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { Alert } from '../../popup/Popup';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}
const ApprovalDepartment = ({ onItemSelected }) => {
  const [regist, setRegist] = useState(false);
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

  const [selectedName, setSelectedName] = useState(null);

  const handleItemSelected = (item) => {
    setSelectedName(item);
  };

  const handleConfirmClick = () => {
    if (selectedName === null) {
      setRegist(true) // 등록 부서를 선택하지 않으셨습니다.
    } else {
      // onItemSelected(selectedName);
    }
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
          <h2>조직검색</h2>
        </div>
        <div className='approval-conts alone'>
          <div className='tree-wrap alone'>
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
      </div>
      <div className='right mt20'>
        <button onClick={handleConfirmClick} className='btn btn-lg btn-primary ml10'>부서 설정</button>
          <Alert open={regist} close={() => { setRegist(false) }} type={'no'}>
            <div>등록 부서를 선택하지 않으셨습니다.</div>
          </Alert>
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

  const handleItemSelected = () => {
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
          ? (<span className="item-name" onClick={handleItemSelected}>{item.deptName}</span>)
          : (<span className="item-name not-children" onClick={handleItemSelected}>{item.deptName}</span>)
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

export default ApprovalDepartment;
