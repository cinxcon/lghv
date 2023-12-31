import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { Popup, Alert } from '../../popup/Popup';
import PopupSave from '../popupDetail/Popup_Save';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}
const ApprovalLine = ({ onItemSelected }) => {
  const [treeData, setTreeData] = useState([]);
  const [regist, setRegist] = useState(false);
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
      { id: 'da', title: '대표이사', name: '김헬로', no: '0033702' },
      { id: 'db', title: '품질혁신팀', name: '손혁신', no: 'WDN0080122' },
      { id: 'dc', title: '미디어운영팀', name: '이디어', no: '0033702' },
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제', no: '0033702' },
      { id: 'de', title: '품질안전협력', name: '박안전', no: '0033702' },
      { id: 'df', title: 'OMC팀', name: '권큐엠', no: '0033702' },
      { id: 'dg', title: '뉴비즈운영팀', name: '손뉴비', no: '0033702' }
    ],
    N000A00001: [
      { id: 'da', title: '대표이사', name: '김헬로', no: '0033702' }
    ],
    N000C00020: [
      { id: 'db', title: '품질혁신팀', name: '손혁신', no: '0033702' }
    ],
    N000D00404: [
      { id: 'db', title: '품질혁신팀', name: '손혁신', no: 'WDN0080122' }
    ],
    N000F00100: [
      { id: 'dc', title: '미디어운영팀', name: '이디어', no: '0033702' },
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제', no: '0033702' },
      { id: 'de', title: '품질안전협력', name: '박안전', no: '0033702' }
    ],
    N000D00211: [
      { id: 'dc', title: '미디어운영팀', name: '이디어', no: '0033702' }
    ],
    N000D00130: [
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제', no: '0033702' },
      { id: 'de', title: '품질안전협력', name: '박안전', no: '0033702' }
    ],
    N000001301: [
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제', no: '0033702' }
    ],
    N00G000240: [
      { id: 'de', title: '품질안전협력', name: '박안전', no: '0033702' }
    ],
    N00G000261: [
      { id: 'df', title: 'OMC팀', name: '권큐엠', no: '0033702' }
    ],
    N00G000282: [
      { id: 'dg', title: '뉴비즈운영팀', name: '손뉴비', no: '0033702' }
    ],
    N00cjworld: [
      { id: 'dh', title: '가상부서', name: '김나니', no: '0033702' }
    ],
    N00G000308: [
      { id: 'dh', title: '가상부서', name: '김나니', no: '0033702' }
    ]
  };

  const [selectedTree, setSelectedTree] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedDepart, setSelectedDepart] = useState(null);
  const [approvalType, setApprovalType] = useState('기안');
  const [selectedType, setSelectedType] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [trActive, setTrActive] = useState('');
  const [onSave, setOnSave] = useState(false);
  const [isReception, setIsReception] = useState(false);

  const handleItemSelected = (item) => {
    setSelectedTree(item.deptId);
    setSelectedDepart(item.deptName);
  };

  const listItemSelect = (item, index) => {
    const newRow = { id: item.id, title: item.title, name: item.name, no: item.no };
    const activeListItem = document.getElementById(item.id);
    activeListItem.classList.add('active');
    selectedType[index] = approvalType;
    setSelectedType([...selectedType]);
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
    console.log('row;', tableData.length);
    if (tableData.length < 1) {
      alert('선택 내용이 사라 집니다.');
    }
    setTableData(updatedData);
    if (listItem !== null) {
      listItem.classList.remove('active');
    }
  };

  const reviewerSelect = (name, rowIndex) => {
    setTrActive(rowIndex);
    setSelectedName(name); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };
  const handleOptionChange = (event) => {
    setApprovalType(event.target.value);
    if (event.target.value === '수신') {
      setIsReception(true);
    } else {
      setIsReception(false);
    }
  };

  const handleConfirmClick = () => {
    if (selectedName === null) {
      setRegist(true)
    } else {
      // onItemSelected(selectedName);
    }
  };
  const approvalLineSave = () => {
    // console.log(selectedItem)
  }

  const getMenuItems = () => {
    if (selectedTree === null) return null;

    return listData[selectedTree].map((item, index) => (
      <li key={item.id} id={item.id} onClick={(e) => { e.stopPropagation(); listItemSelect(item, index) }} ><span className="item-title">{item.title}</span><span className="item-name">{item.name}({item.no})</span></li>
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
      <div className='new-window-wrap over-flow-y-hidden'>
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>결재 지정</h2>
        </div>
        <div className='approval-top flex-wrap between mb15'>
            <div className='line-select'>
              <fieldset>
                  <legend>결제선 지정</legend>
                  <input type="radio" name="approval-type" id="draft" value="기안" checked={approvalType === '기안'} onChange={handleOptionChange} />
                  <label htmlFor="draft">기안</label>
                  <input type="radio" name="approval-type" id="examine" value="검토" checked={approvalType === '검토'} onChange={handleOptionChange}/>
                  <label htmlFor="examine">검토</label>
                  <input type="radio" name="approval-type" id="adjustment" value="조정" checked={approvalType === '조정'} onChange={handleOptionChange} />
                  <label htmlFor="adjustment">조정</label>
                  <input type="radio" name="approval-type" id="agreement" value="합의" checked={approvalType === '합의'} onChange={handleOptionChange} />
                  <label htmlFor="agreement">합의</label>
                  <input type="radio" name="approval-type" id="approval" value="결제" checked={approvalType === '결제'} onChange={handleOptionChange}/>
                  <label htmlFor="approval">결제</label>
                  <input type="radio" name="approval-type" id="reception" value="수신" checked={approvalType === '수신'} onChange={handleOptionChange} />
                  <label htmlFor="reception">수신</label>
              </fieldset>
            </div>
            <div className='search-box'>
              <label htmlFor="name_search">이름</label>
              <input type='text' name='name-search' id='name_search' className='ml10' style={{ width: '75%' }} />
              <button type='button' className='btn btn-black ml10'>검색</button>
            </div>
        </div>
        <div className="flex-wrap align-start">
          <div className='approval-conts'>
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
                  { isReception === true
                    ? (<li className='all-select'><button type='button' className='btn w100 btn-all-cheak'>[{selectedDepart}] 전체선택</button></li>)
                    : null
                  }
                  {getMenuItems()}
                </ul>
            </div>
          </div>
          <div className='selected-item'>
            <div className="right">
              <button onClick={() => { setOnSave(true) }} className='btn btn-md btn-apv-save'>결제선 저장</button>
                  <Popup open={onSave} close={() => { setOnSave(false) }} header="[결제선 저장] 이름" type={'sm'}>
                      <PopupSave onItemSelected={approvalLineSave} />
                  </Popup>
            </div>
            <div className='overflow mt8'>
              <table className="popup-table">
              <caption>결제선 선택 정보</caption>
                  <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '55%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '15%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">유형</th>
                      <th scope="col">결제자</th>
                      <th scope="col">SMS</th>
                      <th scope="col">E-MAIL</th>
                    </tr>
                  </thead>
                  <tbody>
                  {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td><button onClick={() => deleteRow(row.id)} className='btn-del-28'>삭제</button></td>
                    <td onClick={() => reviewerSelect(row.name, rowIndex)} className={trActive === rowIndex ? 'active' : ''}>{selectedType[rowIndex]}</td>
                    <td onClick={() => reviewerSelect(row.name, rowIndex)} className={`left ${trActive === rowIndex ? 'active' : ''}`}>{row.name}({row.no})</td>
                    <td>
                      <input type="checkbox" name={`sms${row.id}`} id={`sms${row.id}`} />
                      <label htmlFor={`sms${row.id}`}></label>
                    </td>
                    <td>
                      <input type="checkbox" name={`email${row.id}`} id={`email${row.id}`} />
                      <label htmlFor={`email${row.id}`} ></label>
                    </td>
                  </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              <div className='overflow'>
                <table className="popup-table">
                  <caption>자주쓰는 결제선 정보</caption>
                    <colgroup>
                      <col span={2}/>
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" colSpan={2}><span className="bookmark">자주쓰는 결제선</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><button onClick={() => deleteRow()} className='btn-del-28'>삭제</button></td>
                        <td>홍길동 테스트</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
        </div>
        <div className='btn-wrap right'>
          <button onClick={handleConfirmClick} className='btn btn-lg btn-primary'>확인</button>
          <Alert open={regist} close={() => { setRegist(false) }} type={'no'}>
            <div>결재자를 지정해주십시오.</div>
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

export default ApprovalLine;
