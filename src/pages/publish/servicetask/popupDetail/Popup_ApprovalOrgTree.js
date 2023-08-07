import { useState } from 'react';
import { Popup } from '../../popup/Popup';
import PopupSave from '../popupDetail/Popup_Save';

const ApprovalOrgTree = ({ onItemSelected }) => {
  const treeData = [
    {
      id: 1,
      name: '대표이사',
      children: [
        {
          id: 2,
          name: '회장'
        },
        {
          id: 3,
          name: '기술실',
          children: [
            {
              id: 4,
              name: '품질혁신팀'
            }
          ]
        },
        {
          id: 5,
          name: '플랫폼운영담당',
          children: [
            {
              id: 6,
              name: '미디어운영팀'
            },
            {
              id: 7,
              name: '기간망운영팀',
              children: [
                {
                  id: 8,
                  name: '컨버전스운용팀_관제'
                },
                {
                  id: 9,
                  name: '품질안전협력'
                }
              ]
            },
            {
              id: 10,
              name: 'OMC팀'
            },
            {
              id: 11,
              name: '뉴비즈운영팀'
            }
          ]
        }
      ]
    },
    {
      id: 12,
      name: '하나방송',
      children: [
        {
          id: 13,
          name: '가상부서'
        }
      ]
    }
  ];
  const listData = {
    1: [
      { title: '대표이사', name: '김헬로' },
      { title: '품질혁신팀', name: '손혁신' },
      { title: '미디어운영팀', name: '이디어' },
      { title: '컨버전스운용팀_관제', name: '김관제' },
      { title: '품질안전협력', name: '박안전' },
      { title: 'OMC팀', name: '권큐엠' },
      { title: '뉴비즈운영팀', name: '손뉴비' }
    ],
    2: [
      { title: '대표이사', name: '김헬로' }
    ],
    3: [
      { title: '품질혁신팀', name: '손혁신' }
    ],
    4: [
      { title: '품질혁신팀', name: '손혁신' }
    ],
    5: [
      { title: '미디어운영팀', name: '이디어' },
      { title: '컨버전스운용팀_관제', name: '김관제' },
      { title: '품질안전협력', name: '박안전' }
    ],
    6: [
      { title: '미디어운영팀', name: '이디어' }
    ],
    7: [
      { title: '컨버전스운용팀_관제', name: '김관제' },
      { title: '품질안전협력', name: '박안전' }
    ],
    8: [
      { title: '컨버전스운용팀_관제', name: '김관제' }
    ],
    9: [
      { title: '품질안전협력', name: '박안전' }
    ],
    10: [
      { title: 'OMC팀', name: '권큐엠' }
    ],
    11: [
      { title: '뉴비즈운영팀', name: '손뉴비' }
    ],
    12: [
      { title: '가상부서', name: '김나니' }
    ],
    13: [
      { title: '가상부서', name: '김나니' }
    ]
  };

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [onSave, setOnSave] = useState(false);

  const handleItemSelected = (item) => {
    setSelectedMenu(item.id);
  };
  const listItemSelect = (item) => {
    const newRow = { id: tableData.length + 1, title: item.title, name: item.name };
    setTableData([...tableData, newRow]);
  };

  const deleteRow = (id) => {
    const updatedData = tableData.filter(row => row.id !== id);
    setTableData(updatedData);
  };

  const handleConfirmClick = () => {
    // onItemSelected(selectedMenuName); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };

  const approvalLineSave = () => {
    // console.log(selectedItem)
  }
  const getMenuItems = () => {
    if (selectedMenu === null) return null;

    return listData[selectedMenu].map((item) => (
      <li key={item.id}><span className="item-name" onClick={() => listItemSelect(item)}>{item.title}/{item.name}</span></li>
    ));
  };

  return (
    <>
      <div className='approval-top flex-wrap between mb15'>
        <div className='line-select'>
          <fieldset>
              <legend>결제선 지정</legend>
              <input type="radio" name="approval-type" id="draft" value="" defaultChecked={true} />
              <label htmlFor="draft">기안</label>
              <input type="radio" name="approval-type" id="examine" value="" />
              <label htmlFor="examine">검토</label>
              <input type="radio" name="approval-type" id="adjustment" value="" />
              <label htmlFor="adjustment">조정</label>
              <input type="radio" name="approval-type" id="agreement" value="" />
              <label htmlFor="agreement">합의</label>
              <input type="radio" name="approval-type" id="approval" value="" />
              <label htmlFor="approval">결제</label>
              <input type="radio" name="approval-type" id="reception" value="" />
              <label htmlFor="reception">수신</label>
          </fieldset>
        </div>
        <div className='search-box'>
          <label htmlFor="name_search">이름</label>
          <input type='text' name='name-search' id='name_search' className='ml10' style={{ width: 'auto' }} />
          <button type='button' className='btn btn-black ml10'>검색</button>
        </div>
        <div className='btn-group'>
            <button onClick={() => { setOnSave(true) }} className='btn'>결제선 저장</button>
              <Popup open={onSave} close={() => { setOnSave(false) }} header="결제선 저장" type={'sm'}>
                  <PopupSave onItemSelected={approvalLineSave} />
              </Popup>
            <button onClick={handleConfirmClick} className='btn ml10'>확인</button>
        </div>
      </div>
      <div className='approval-conts flex-wrap align-start'>
        <div className='tree-wrap'>
              <div className='tree-conts'>
              <div className='logo'>엘지 유플러스</div>
              {treeData.map((item) => (
                <TreeItem
                  key={item.id}
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
        <div className='selected-item'>
            <table className="popup-table">
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
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
                <td><button onClick={() => deleteRow(row.id)} className='btn btn-delete'>x</button></td>
                <td>{row.title}</td>
                <td>{row.name}</td>
                <td>
                  <input type="checkbox" name={`sms${row.id}`} id={`sms${row.id}`} />
                  <label htmlFor={`sms${row.id}`}>SMS</label>
                </td>
                <td>
                  <input type="checkbox" name={`email${row.id}`} id={`email${row.id}`} />
                  <label htmlFor={`email${row.id}`} >E-MAIL</label>
                </td>
              </tr>
              ))}
              </tbody>
            </table>
            <table className="popup-table">
              <colgroup>
                <col span={2}/>
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" colSpan={2}>자주쓰는 결제선</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><button onClick={() => deleteRow()} className='btn btn-delete'>x</button></td>
                  <td>홍길동 테스트</td>
                </tr>
              </tbody>
            </table>
        </div>
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
    <div className={`tree-item ${!item.children ? 'close' : 'open'}`}>
      <div className="tree-content">
        {item.children
          ? (<button onClick={handleToggle} className={isExpanded
              ? 'open'
              : ''} />)
          : null}
        {item.children
          ? (<span className="item-name" onClick={handleItemSelected}>{item.name}</span>)
          : (<span className="item-name not-children" onClick={handleItemSelected}>{item.name}</span>)
        }
      </div>
      {isExpanded &&
        item.children &&
        item.children.map((child) => (
          <div key={child.id} className="tree-children">
            <TreeItem item={child} onItemSelected={onItemSelected} />
          </div>
        ))}
    </div>
  );
};

export default ApprovalOrgTree;
