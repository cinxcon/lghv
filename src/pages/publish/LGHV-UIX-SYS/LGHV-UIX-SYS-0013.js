/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ContentTitle from '../layout/ContentTitle'
import axios from 'axios';

function SysMenuAuthMng() {
  const pagedata = {
    title: '공통관리',
    subtitle: '메뉴권한관리',
    SubMenu: 'yes'
  }
  const [treeData, setTreeData] = useState([]);
  const [authData, setAuthData] = useState([]);

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('../data/response_1692163585947.json'); // JSON 파일 경로를 넣어주세요
      setTreeData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await axios.get('../data/auth_data.json');
      setAuthData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [selectedName, setSelectedName] = useState(null);
  const handleItemSelected = (item) => {
    setSelectedName(item);
    console.log(selectedName);
  };

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='flex-wrap between'>
        <div className='approval-conts half'>
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
        <div className='approval-conts half'>
          <div className='tree-wrap alone'>
            <h3>메뉴권한</h3>
            <div className='tree-conts'>
              {authData.depts && authData.depts.map((item) => (
                <AuthItem
                  key={item.deptId}
                  item={item}
                  onItemSelected={handleItemSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AuthItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleItemSelected = (item) => {
    const activeItem = document.getElementById(`a${item.deptId}`);
    setIsChecked(!isChecked);
    isChecked ? activeItem.classList.remove('active') : activeItem.classList.add('active');
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
          ? (<div><input type="checkbox" name={item.deptId} id={item.deptId} onClick={() => handleItemSelected(item)} /><label htmlFor={item.deptId} id={`a${item.deptId}`} className='item-name' isChecked={isChecked}>{item.deptName}</label></div>)
          : (<div><input type="checkbox" name={item.deptId} id={item.deptId} onClick={() => handleItemSelected(item)} /><label htmlFor={item.deptId} id={`a${item.deptId}`} className='item-name not-children' isChecked={isChecked}>{item.deptName}</label></div>)
        }
      </div>
      {isExpanded &&
        item.depts &&
        item.depts.map((child) => (
          <div key={child.deptId} className="tree-children">
            <AuthItem item={child} onItemSelected={onItemSelected} />
          </div>
        ))}
  </div>
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

export default SysMenuAuthMng;
