import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApprovalDepartment = ({ onItemSelected }) => {
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
      alert('등록 부서를 선택하지 않으셨습니다.');
    } else {
      onItemSelected(selectedName);
    }
  };

  return (
    <>
     <div className='approval-conts'>
        <div className='tree-wrap'>
              <div className='tree-conts'>
              <div className='logo'>엘지 유플러스</div>
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
      <div className='right'>
        <button onClick={handleConfirmClick} className='btn btn-primary ml10'>부서 설정</button>
      </div>
    </>
  );
};

const TreeItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
